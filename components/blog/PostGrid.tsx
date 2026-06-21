import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { PostCard } from '@/lib/blog/source';

/** Grid de cards de post — reusado no índice e nas páginas de categoria. */
export function PostGrid({ posts }: { posts: PostCard[] }): JSX.Element {
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <Link className="post" href={`/blog/${post.slug}`} key={post.slug}>
          {post.coverUrl ? (
            <div className="post-cover post-cover-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.coverUrl} alt={post.coverAlt ?? post.title} loading="lazy" />
              <div className="post-cover-tag">{post.category}</div>
            </div>
          ) : (
            <div className={`post-cover ${post.coverClass ?? ''}`}>
              <div className="post-cover-tag">{post.category}</div>
            </div>
          )}
          <div className="post-body">
            <div className="post-meta">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} de leitura</span>
            </div>
            <h3>{post.title}</h3>
            <p className="post-excerpt">{post.excerpt}</p>
            <span className="post-link">
              Ler artigo <Icon.Arrow width={14} height={14} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
