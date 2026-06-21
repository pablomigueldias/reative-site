import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { BlogIndex } from '@/components/blog/BlogIndex';
import { getPostCards } from '@/lib/blog/source';

// ISR: a lista revalida sozinha quando o studio publica algo novo.
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Blog — Reative Systems',
  description:
    'Automação, dados e sistemas sob medida para PMEs. Conteúdo direto, com exemplos reais, com busca e filtros por tema.',
};

export default async function BlogIndexPage(): Promise<JSX.Element> {
  // Servidor busca (SSR/ISR, bom pro SEO); o BlogIndex filtra/busca no cliente.
  const posts = await getPostCards({ limit: 50 });
  return (
    <>
      <Nav external />
      <main>
        <BlogIndex posts={posts} />
      </main>
      <Footer />
    </>
  );
}
