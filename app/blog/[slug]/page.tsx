import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostPage } from '@/components/post/PostPage';
import { getArticle, getArticleSlugs } from '@/lib/blog/source';

interface PageProps {
  params: { slug: string };
}

// ISR: revalida páginas já geradas; slugs novos do studio entram on-demand.
export const revalidate = 600;
export const dynamicParams = true;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getArticle(params.slug);
  if (!post) return {};

  const description = post.seo.metaDescription ?? post.excerpt;
  return {
    title: post.title,
    description,
    keywords: post.seo.keywords.length ? post.seo.keywords : undefined,
    robots: post.seo.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: post.seo.ogTitle ?? post.title,
      description: post.seo.ogDescription ?? description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.seo.ogImage ? [{ url: post.seo.ogImage }] : undefined,
    },
  };
}

export default async function PostRoute({ params }: PageProps): Promise<JSX.Element> {
  const post = await getArticle(params.slug);
  if (!post) {
    notFound();
  }
  return <PostPage post={post} />;
}
