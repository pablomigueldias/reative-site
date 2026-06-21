import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { PostGrid } from '@/components/blog/PostGrid';
import { getCategoriesWithCount, getPostsByCategory } from '@/lib/blog/source';
import {
  SITE,
  breadcrumbJsonLd,
  categorySlug,
  categoryUrl,
  itemListJsonLd,
} from '@/lib/blog/seo';

export const revalidate = 300;
export const dynamicParams = true;

interface PageProps {
  params: { slug: string };
}

/** Resolve o slug da URL → nome real da categoria (match por slug). */
async function nomeDaCategoria(slug: string): Promise<string | null> {
  const cats = await getCategoriesWithCount();
  return cats.find((c) => categorySlug(c.name) === slug)?.name ?? null;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const cats = await getCategoriesWithCount();
  return cats.map((c) => ({ slug: categorySlug(c.name) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const nome = await nomeDaCategoria(params.slug);
  if (!nome) return {};
  const titulo = `${nome} — artigos do blog`;
  const desc = `Artigos sobre ${nome} para PMEs: automação, dados e tecnologia descomplicada, com exemplos reais.`;
  const url = categoryUrl(nome);
  return {
    title: titulo,
    description: desc,
    alternates: { canonical: url },
    openGraph: { title: titulo, description: desc, type: 'website', url },
    twitter: { card: 'summary_large_image', title: titulo, description: desc },
  };
}

export default async function CategoriaPage({ params }: PageProps): Promise<JSX.Element> {
  const nome = await nomeDaCategoria(params.slug);
  if (!nome) notFound();
  const posts = await getPostsByCategory(nome);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Início', url: SITE },
    { name: 'Blog', url: `${SITE}/blog` },
    { name: nome, url: categoryUrl(nome) },
  ]);

  return (
    <>
      <Nav external />
      <main>
        <section className="blog-section blog-index">
          <div className="wrap">
            <nav className="crumbs" aria-label="Trilha">
              <Link href="/">Início</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span aria-current="page">{nome}</span>
            </nav>
            <div className="section-head">
              <div>
                <span className="eyebrow">Categoria</span>
                <h2>{nome}</h2>
              </div>
              <p className="lede">
                Tudo sobre <strong>{nome}</strong> — direto ao ponto, para quem
                precisa decidir sobre tecnologia no negócio.
              </p>
            </div>
            <PostGrid posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd(posts)) }}
      />
    </>
  );
}
