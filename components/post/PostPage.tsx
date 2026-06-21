import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { Icon } from '@/components/ui/Icon';
import { config, whatsappUrl } from '@/lib/config';
import { ctaDoPost } from '@/lib/blog/cta';
import type { PostArticle, PostCard } from '@/lib/blog/source';
import {
  SITE,
  blogPostingJsonLd,
  breadcrumbJsonLd,
  categorySlug,
} from '@/lib/blog/seo';

interface PostPageProps {
  post: PostArticle;
  relacionados?: PostCard[];
}

/** Iniciais do autor pro avatar (ex.: "Pablo Dias" → "PD"). */
function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase() || 'RS';
}

export function PostPage({ post, relacionados = [] }: PostPageProps): JSX.Element {
  const cta = ctaDoPost(post.category);
  const agendar = config.contact.scheduleUrl;
  const agendarExterno = /^https?:\/\//.test(agendar);
  return (
    <>
      <Nav external />

      <main>
        <header className="article-hero">
          <div className="wrap">
            <nav className="crumbs" aria-label="Trilha">
              <Link href="/">Início</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              {post.category ? (
                <>
                  <span>/</span>
                  <Link href={`/blog/categoria/${categorySlug(post.category)}`}>
                    {post.category}
                  </Link>
                </>
              ) : null}
            </nav>
            <div className="article-meta-top">
              {post.category ? (
                <Link
                  className="article-cat"
                  href={`/blog/categoria/${categorySlug(post.category)}`}
                >
                  {post.category}
                </Link>
              ) : null}
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
              fetchPriority="high"
              decoding="async"
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

              <aside className="article-cta">
                <div className="article-cta-inner">
                  <span className="article-cta-eyebrow">Reative Systems</span>
                  <h3>{cta.titulo}</h3>
                  <p>{cta.texto}</p>
                  <div className="article-cta-actions">
                    {agendarExterno ? (
                      <a
                        href={agendar}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon.Calendar className="btn-icon" /> Agendar 30 min
                      </a>
                    ) : (
                      <Link href={agendar} className="btn btn-primary">
                        <Icon.Calendar className="btn-icon" /> Agendar 30 min
                      </Link>
                    )}
                    <a
                      href={whatsappUrl(
                        `Oi! Li "${post.title}" no blog da Reative e quero conversar.`,
                      )}
                      className="btn btn-ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.WhatsApp className="btn-icon" /> WhatsApp
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {relacionados.length > 0 && (
          <section className="related">
            <div className="wrap">
              <h2 className="related-title">Continue lendo</h2>
              <div className="related-grid">
                {relacionados.map((r) => (
                  <Link className="related-card" href={`/blog/${r.slug}`} key={r.slug}>
                    {r.coverUrl ? (
                      <div className="related-cover">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={r.coverUrl} alt={r.coverAlt ?? r.title} />
                      </div>
                    ) : (
                      <div className={`related-cover ${r.coverClass ?? ''}`} />
                    )}
                    <div className="related-body">
                      <span className="related-cat">{r.category}</span>
                      <h3>{r.title}</h3>
                      <span className="related-link">
                        Ler artigo <Icon.Arrow width={14} height={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd(post)),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Início', url: SITE },
              { name: 'Blog', url: `${SITE}/blog` },
              ...(post.category
                ? [
                    {
                      name: post.category,
                      url: `${SITE}/blog/categoria/${categorySlug(post.category)}`,
                    },
                  ]
                : []),
              { name: post.title, url: `${SITE}/blog/${post.slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}
