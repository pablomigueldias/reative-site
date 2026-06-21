import type { MetadataRoute } from 'next';
import { getCategoriesWithCount, getPostMetas } from '@/lib/blog/source';
import { SITE, categorySlug } from '@/lib/blog/seo';

// Revalida o sitemap junto com o blog (ISR).
export const revalidate = 300;

const ESTATICAS = ['', '/blog', '/servicos', '/privacidade', '/termos'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, categorias] = await Promise.all([
    getPostMetas(),
    getCategoriesWithCount(),
  ]);

  const estaticas: MetadataRoute.Sitemap = ESTATICAS.map((p) => ({
    url: `${SITE}${p}`,
    changeFrequency: p === '/blog' ? 'daily' : 'weekly',
    priority: p === '' ? 1 : 0.7,
  }));

  const categoriaUrls: MetadataRoute.Sitemap = categorias.map((c) => ({
    url: `${SITE}/blog/categoria/${categorySlug(c.name)}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : undefined,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...estaticas, ...categoriaUrls, ...postUrls];
}
