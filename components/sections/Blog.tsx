import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { blogPosts } from '@/lib/content/home';

export function Blog(): JSX.Element {
  return (
    <section className="blog-section" id="blog">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Conteúdo direto ao ponto</span>
            <h2>Tecnologia explicada como dono de PME entende.</h2>
          </div>
          <p className="lede">
            Sem jargão, sem &quot;cloud disruptivo&quot;. Texto curto, exemplo
            real, direto pra quem precisa decidir entre investir em sistema novo
            ou continuar fazendo na mão.
          </p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link className="post" href={`/blog/${post.slug}`} key={post.slug}>
              <div className={`post-cover ${post.coverClass}`}>
                <div className="post-cover-tag">{post.category}</div>
              </div>
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
      </div>
    </section>
  );
}
