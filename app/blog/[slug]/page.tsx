import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostPage } from '@/components/post/PostPage';
import { getArticle, getArticleSlugs, getRelated } from '@/lib/blog/source';
import { SITE } from '@/lib/blog/seo';

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
  const ogImg = post.seo.ogImage ?? post.coverUrl ?? undefined;
  return {
    title: post.title,
    description,
    keywords: post.seo.keywords.length ? post.seo.keywords : undefined,
    authors: [{ name: post.author }],
    alternates: { canonical: `${SITE}/blog/${post.slug}` },
    robots: post.seo.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: post.seo.ogTitle ?? post.title,
      description: post.seo.ogDescription ?? description,
      type: 'article',
      url: `${SITE}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      section: post.category ?? undefined,
      tags: post.seo.keywords.length ? post.seo.keywords : undefined,
      images: ogImg ? [{ url: ogImg }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.ogTitle ?? post.title,
      description: post.seo.ogDescription ?? description,
      images: ogImg ? [ogImg] : undefined,
    },
  };
}

export default async function PostRoute({ params }: PageProps): Promise<JSX.Element> {
  const post = await getArticle(params.slug);
  if (!post) {
    notFound();
  }
  const relacionados = await getRelated(post.slug, post.category, 3);
  return <PostPage post={post} relacionados={relacionados} />;
}
