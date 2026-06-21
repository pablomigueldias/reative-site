/**
 * Fonte de verdade do blog para as páginas — abstrai DE ONDE vêm os posts.
 *
 * Com backend (`NEXT_PUBLIC_API_URL`): busca no studio via ISR.
 * Sem backend (dev/preview): cai no conteúdo local (`lib/content`), então o
 * site nunca quebra e dá pra trabalhar offline. A migração move o conteúdo pro
 * banco; o fallback continua valendo como rede de segurança.
 */
import type { ReactNode } from 'react';

import { ArticleMarkdown } from '@/components/post/ArticleMarkdown';
import type { ApiPost, ApiPostListItem } from '@/lib/api/blog';
import { fetchPost, fetchPosts } from '@/lib/api/blog';
import { blogPosts } from '@/lib/content/home';
import { blogPostsFull, getAllPostSlugs, getPostBySlug } from '@/lib/content/posts';
import { buildToc } from '@/lib/blog/toc';

export interface PostCard {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverClass?: string;
  coverUrl?: string;
  coverAlt?: string;
}

export interface PostSeo {
  metaDescription?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords: string[];
  noindex: boolean;
}

export interface PostArticle extends PostCard {
  author: string;
  toc: { id: string; label: string }[];
  body: ReactNode;
  seo: PostSeo;
  lang: string;
  publishedAt?: string;
  updatedAt?: string;
}

const DATE_FMT = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

/** ISO → "12 de mai. de 2026" simplificado pra "12 Mai 2026". */
function formatDate(iso: string | null | undefined): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return DATE_FMT.format(d)
    .replace(/\bde\b/g, '')
    .replace('.', '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/(^| )([a-z])/g, (_, s, c) => s + c.toUpperCase());
}

function readTime(min: number | null | undefined): string {
  return `${min && min > 0 ? min : 1} min`;
}

function apiToCard(p: ApiPostListItem): PostCard {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? '',
    category: p.category ?? '',
    date: formatDate(p.published_at),
    readTime: readTime(p.reading_time),
    coverClass: p.cover_class ?? undefined,
    coverUrl: p.cover_url ?? undefined,
    coverAlt: p.cover_alt ?? undefined,
  };
}

function apiToArticle(p: ApiPost): PostArticle {
  return {
    ...apiToCard(p),
    author: p.author,
    toc: p.body_md ? buildToc(p.body_md) : p.toc,
    body: p.body_md ? <ArticleMarkdown content={p.body_md} /> : null,
    lang: p.lang,
    publishedAt: p.published_at ?? undefined,
    updatedAt: p.updated_at ?? undefined,
    seo: {
      metaDescription: p.seo.meta_description ?? undefined,
      ogImage: p.seo.og_image ?? undefined,
      ogTitle: p.seo.og_title ?? undefined,
      ogDescription: p.seo.og_description ?? undefined,
      keywords: p.seo.keywords ?? [],
      noindex: p.seo.noindex,
    },
  };
}

// ── Fallback local (conteúdo hardcoded) ──────────────────────────
function localCards(): PostCard[] {
  return blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
    coverClass: p.coverClass,
  }));
}

function localArticle(slug: string): PostArticle | null {
  const p = getPostBySlug(slug);
  if (!p) return null;
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
    coverClass: p.coverClass,
    author: 'Equipe Reative',
    toc: p.toc,
    body: p.body,
    lang: 'pt-BR',
    seo: { keywords: [], noindex: false, metaDescription: p.excerpt },
  };
}

// ── API pública do módulo ────────────────────────────────────────

export async function getPostCards(opts?: { limit?: number }): Promise<PostCard[]> {
  const remoto = await fetchPosts(opts?.limit ?? 50);
  if (remoto && remoto.length > 0) return remoto.map(apiToCard);
  const locais = localCards();
  return opts?.limit ? locais.slice(0, opts.limit) : locais;
}

/**
 * Posts relacionados a um artigo: prioriza a MESMA categoria (exclui o próprio),
 * e completa com os mais recentes se faltar. Pro leitor continuar navegando.
 */
export async function getRelated(
  slug: string,
  category?: string | null,
  limit = 3,
): Promise<PostCard[]> {
  const todos = (await getPostCards({ limit: 50 })).filter((p) => p.slug !== slug);
  const mesma = category ? todos.filter((p) => p.category === category) : [];
  const resto = todos.filter((p) => !mesma.includes(p));
  return [...mesma, ...resto].slice(0, limit);
}

export async function getArticle(slug: string): Promise<PostArticle | null> {
  const remoto = await fetchPost(slug);
  if (remoto) return apiToArticle(remoto);
  return localArticle(slug);
}

export async function getArticleSlugs(): Promise<string[]> {
  const remoto = await fetchPosts();
  if (remoto && remoto.length > 0) return remoto.map((p) => p.slug);
  return getAllPostSlugs();
}

/** Categorias presentes (nome + contagem), ordenadas por frequência. */
export async function getCategoriesWithCount(): Promise<
  { name: string; count: number }[]
> {
  const cards = await getPostCards({ limit: 50 });
  const conta = new Map<string, number>();
  for (const c of cards) {
    const nome = c.category?.trim();
    if (nome) conta.set(nome, (conta.get(nome) ?? 0) + 1);
  }
  return [...conta.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/** Posts de uma categoria (por nome exato). */
export async function getPostsByCategory(name: string): Promise<PostCard[]> {
  const cards = await getPostCards({ limit: 50 });
  return cards.filter((c) => c.category === name);
}

/** Metadados crus (slug + datas ISO) de todos os posts — pro sitemap. */
export async function getPostMetas(): Promise<
  { slug: string; updatedAt?: string; category?: string | null }[]
> {
  const remoto = await fetchPosts(50);
  if (remoto && remoto.length > 0) {
    return remoto.map((p) => ({
      slug: p.slug,
      updatedAt: p.updated_at ?? p.published_at ?? undefined,
      category: p.category,
    }));
  }
  return Object.values(blogPostsFull).map((p) => ({
    slug: p.slug,
    category: p.category,
  }));
}

// Reexporta pra quem precisar listar tudo localmente.
export { blogPostsFull };
