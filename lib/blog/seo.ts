import { config } from '@/lib/config';
import type { PostArticle, PostCard } from '@/lib/blog/source';

export const SITE = config.site.url.replace(/\/$/, '');
const LOGO = `${SITE}/logo-reative-512.png`;

/** Slug de categoria pra URL (`/blog/categoria/<slug>`). */
export function categorySlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function postUrl(slug: string): string {
  return `${SITE}/blog/${slug}`;
}

export function categoryUrl(name: string): string {
  return `${SITE}/blog/categoria/${categorySlug(name)}`;
}

/** JSON-LD `BlogPosting` — habilita rich results do artigo no Google. */
export function blogPostingJsonLd(post: PostArticle): Record<string, unknown> {
  const url = postUrl(post.slug);
  const ehPessoa = (post.author ?? '').trim().includes(' ');
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.slice(0, 110),
    description: post.seo.metaDescription ?? post.excerpt,
    image: post.coverUrl ? [post.coverUrl] : [LOGO],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      '@type': ehPessoa ? 'Person' : 'Organization',
      name: post.author || config.site.name,
    },
    publisher: {
      '@type': 'Organization',
      name: config.site.name,
      logo: { '@type': 'ImageObject', url: LOGO },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.seo.keywords?.length ? post.seo.keywords.join(', ') : undefined,
    articleSection: post.category ?? undefined,
    inLanguage: post.lang ?? 'pt-BR',
  };
}

/** JSON-LD `BreadcrumbList` — trilha de navegação nos resultados. */
export function breadcrumbJsonLd(
  itens: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itens.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** JSON-LD de uma lista de posts (página de categoria / índice). */
export function itemListJsonLd(posts: PostCard[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: postUrl(p.slug),
      name: p.title,
    })),
  };
}
