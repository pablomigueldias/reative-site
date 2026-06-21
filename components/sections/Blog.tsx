import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { PostCard } from '@/lib/blog/source';

interface BlogProps {
  posts: PostCard[];
}

/**
 * Seção/grid de posts. Presentacional (recebe `posts` por prop) pra poder ser
 * reusada na home e na página `/blog` — quem busca os dados é o server component
 * que a renderiza (`await getPostCards()`).
 */
export function Blog({ posts }: BlogProps): JSX.Element {
  return (
    <section className="blog-section" id="blog">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Conteúdo direto ao ponto</span>
            <h2>Tecnologia de forma simples, clara e pensada para a realidade do seu negócio.</h2>
          </div>
          <p className="lede">
           Sem termos complicados ou promessas exageradas. Conteúdo direto, com exemplos reais,
           para quem precisa decidir entre investir em tecnologia ou continuar fazendo tudo manualmente.
          </p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link className="post" href={`/blog/${post.slug}`} key={post.slug}>
              {post.coverUrl ? (
                <div className="post-cover post-cover-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.coverUrl} alt={post.coverAlt ?? post.title} />
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
        <div className="blog-all">
          <Link className="btn btn-ghost" href="/blog">
            Ver todos os artigos <Icon.Arrow width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
