import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { Icon } from '@/components/ui/Icon';
import { whatsappUrl } from '@/lib/config';
import type { PostArticle } from '@/lib/blog/source';

interface PostPageProps {
  post: PostArticle;
}

/** Iniciais do autor pro avatar (ex.: "Pablo Dias" → "PD"). */
function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase() || 'RS';
}

export function PostPage({ post }: PostPageProps): JSX.Element {
  return (
    <>
      <Nav external />

      <main>
        <header className="article-hero">
          <div className="wrap">
            <Link href="/#blog" className="article-back">
              <Icon.Arrow
                style={{ transform: 'rotate(180deg)', width: 16, height: 16 }}
              />
              Voltar para o blog
            </Link>
            <div className="article-meta-top">
              <span className="article-cat">{post.category}</span>
              <span>·</span>
              <span>{post.date.toUpperCase()}</span>
              <span>·</span>
              <span>{post.readTime.toUpperCase()} DE LEITURA</span>
            </div>
            <h1>{post.title}</h1>
            <p className="article-lede">{post.excerpt}</p>
            <div className="article-author">
              <div className="author-avatar">{initials(post.author)}</div>
              <div className="author-info">
                <strong>{post.author}</strong>
                <span>Time de tecnologia · Reative Systems</span>
              </div>
              <div className="author-share">
                <a href="#" className="share-btn" aria-label="LinkedIn">
                  <Icon.Linkedin width={16} height={16} />
                </a>
                <a
                  href={whatsappUrl(
                    `Acabei de ler "${post.title}" no blog da Reative`,
                  )}
                  className="share-btn"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.WhatsApp width={16} height={16} />
                </a>
                <a href="#" className="share-btn" aria-label="Copiar link">
                  <Icon.ArrowUpRight width={16} height={16} />
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="article-cover">
          {post.coverUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="article-cover-img"
              src={post.coverUrl}
              alt={post.coverAlt ?? post.title}
            />
          ) : (
            <div className={`article-cover-inner ${post.coverClass ?? ''}`}>
              // {post.slug.toUpperCase().replace(/-/g, '_')}.md
            </div>
          )}
        </div>

        <article className="article-body">
          <div className="wrap article-layout">
            <aside className="article-toc">
              <h5>Neste artigo</h5>
              <ul>
                {post.toc.map((entry, i) => (
                  <li key={entry.id}>
                    <a href={`#${entry.id}`} className={i === 0 ? 'active' : ''}>
                      {entry.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="article-prose">
              {post.body}

              <div className="article-cta">
                <div className="article-cta-inner">
                  <h3>A sua planilha já é um sistema?</h3>
                  <p>
                    Em 30 minutos a gente faz um diagnóstico gratuito do seu
                    negócio e mostra por onde tirar a operação do Excel — mesmo
                    que você não nos contrate.
                  </p>
                  <div className="article-cta-actions">
                    <a
                      href={whatsappUrl(
                        'Oi! Acabei de ler o artigo no blog da Reative e quero conversar',
                      )}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.WhatsApp className="btn-icon" /> Conversar no WhatsApp
                    </a>
                    <Link href="/#agendar" className="btn btn-ghost">
                      <Icon.Calendar className="btn-icon" /> Agendar 30 min
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
