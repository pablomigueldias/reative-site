/**
 * Client do blog headless — busca os posts no studio (`NEXT_PUBLIC_API_URL`).
 *
 * Usa `fetch` nativo (com `next.revalidate` = ISR) em vez do `apiRequest`
 * genérico, porque aqui a renderização é estática/incremental: o site
 * pré-renderiza e revalida de tempos em tempos, sem cookie nem credenciais.
 *
 * Se não há backend configurado (`NEXT_PUBLIC_API_URL` vazio), as funções
 * retornam `null` — o `lib/blog/source` cai no conteúdo local (mock/migração).
 */
import { config } from '@/lib/config';
import { hasBackend } from '@/lib/api/client';

/** Revalidação do ISR (segundos). Lista muda mais; post fica estável. */
const REVALIDATE_LIST = 300;
const REVALIDATE_POST = 600;

export interface ApiSeo {
  meta_description: string | null;
  keyword_alvo: string | null;
  keywords: string[];
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  noindex: boolean;
}

export interface ApiPostListItem {
  slug: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  cover_url: string | null;
  cover_alt: string | null;
  cover_class: string | null;
  author: string;
  tags: string[];
  reading_time: number | null;
  published_at: string | null;
  updated_at: string | null;
}

export interface ApiPost extends ApiPostListItem {
  body_md: string | null;
  toc: { id: string; label: string }[];
  imagens: Record<string, unknown>[];
  lang: string;
  word_count: number | null;
  seo: ApiSeo;
}

interface ApiListResponse {
  items: ApiPostListItem[];
  total: number;
  limit: number;
  offset: number;
}

function base(): string {
  return config.api.baseUrl.replace(/\/$/, '');
}

/** Lista de posts publicados. `null` = sem backend; `[]` = backend sem posts. */
export async function fetchPosts(limit = 50): Promise<ApiPostListItem[] | null> {
  if (!hasBackend()) return null;
  try {
    const res = await fetch(`${base()}/api/public/blog/posts?limit=${limit}`, {
      next: { revalidate: REVALIDATE_LIST },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as ApiListResponse;
    return data.items;
  } catch {
    return null;
  }
}

/** Post completo por slug. `null` = sem backend OU não encontrado. */
export async function fetchPost(slug: string): Promise<ApiPost | null> {
  if (!hasBackend()) return null;
  try {
    const res = await fetch(
      `${base()}/api/public/blog/posts/${encodeURIComponent(slug)}`,
      { next: { revalidate: REVALIDATE_POST } },
    );
    if (!res.ok) return null;
    return (await res.json()) as ApiPost;
  } catch {
    return null;
  }
}
