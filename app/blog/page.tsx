import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { Blog } from '@/components/sections/Blog';
import { getPostCards } from '@/lib/blog/source';

// ISR: a lista revalida sozinha quando o studio publica algo novo.
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Blog — Reative Systems',
  description:
    'Automação, dados e sistemas sob medida para PMEs. Conteúdo direto, com exemplos reais.',
};

export default async function BlogIndexPage(): Promise<JSX.Element> {
  const posts = await getPostCards();
  return (
    <>
      <Nav external />
      <main>
        <Blog posts={posts} />
      </main>
      <Footer />
    </>
  );
}
