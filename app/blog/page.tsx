import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { BlogIndex } from '@/components/blog/BlogIndex';
import { getPostCards } from '@/lib/blog/source';
import { config } from '@/lib/config';
import { SITE, breadcrumbJsonLd, itemListJsonLd } from '@/lib/blog/seo';

// ISR: a lista revalida sozinha quando o studio publica algo novo.
export const revalidate = 300;

const feedUrl = config.api.baseUrl
  ? `${config.api.baseUrl}/api/public/blog/feed.xml`
  : undefined;

export const metadata: Metadata = {
  title: 'Blog — Reative Systems',
  description:
    'Automação, dados e sistemas sob medida para PMEs. Conteúdo direto, com exemplos reais, com busca e filtros por tema.',
  alternates: feedUrl
    ? { types: { 'application/rss+xml': feedUrl } }
    : undefined,
};

interface PageProps {
  searchParams?: { q?: string; cat?: string };
}

export default async function BlogIndexPage({
  searchParams,
}: PageProps): Promise<JSX.Element> {
  // Servidor busca (SSR/ISR, bom pro SEO); o BlogIndex filtra/busca no cliente.
  const posts = await getPostCards({ limit: 50 });
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE}/blog#blog`,
    name: 'Blog — Reative Systems',
    url: `${SITE}/blog`,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${SITE}/#organization` },
  };
  const breadcrumb = breadcrumbJsonLd([
    { name: 'Início', url: SITE },
    { name: 'Blog', url: `${SITE}/blog` },
  ]);
  return (
    <>
      <Nav external />
      <main>
        <BlogIndex
          posts={posts}
          initialQ={searchParams?.q ?? ''}
          initialCat={searchParams?.cat ?? ''}
        />
      </main>
      <Footer />
      {[blogLd, breadcrumb, itemListJsonLd(posts)].map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
    </>
  );
}
