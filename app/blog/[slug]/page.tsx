import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostPage } from '@/components/post/PostPage';
import { getAllPostSlugs, getPostBySlug } from '@/lib/content/posts';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams(): { slug: string }[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function PostRoute({ params }: PageProps): JSX.Element {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return <PostPage post={post} />;
}
