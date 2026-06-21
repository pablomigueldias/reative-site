import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/blog/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Sem áreas privadas no site público; tudo indexável.
    },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
