'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { PostCard } from '@/lib/blog/source';

interface BlogIndexProps {
  posts: PostCard[];
}

const TODOS = 'Todos';

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function SearchIcon(): JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Índice navegável do blog: busca por texto + filtro por categoria, client-side
 * sobre os posts já carregados (instantâneo). Pro cliente/recrutador achar
 * conteúdo sem scroll infinito.
 */
export function BlogIndex({ posts }: BlogIndexProps): JSX.Element {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string>(TODOS);

  // Categorias com contagem (deriva dos posts), ordenadas por frequência.
  const categorias = useMemo(() => {
    const conta = new Map<string, number>();
    for (const p of posts) {
      const c = p.category?.trim();
      if (c) conta.set(c, (conta.get(c) ?? 0) + 1);
    }
    return [...conta.entries()].sort((a, b) => b[1] - a[1]).map(([c]) => c);
  }, [posts]);

  const filtrados = useMemo(() => {
    const termo = norm(q.trim());
    return posts.filter((p) => {
      if (cat !== TODOS && p.category !== cat) return false;
      if (!termo) return true;
      const alvo = norm(`${p.title} ${p.excerpt} ${p.category ?? ''}`);
      return alvo.includes(termo);
    });
  }, [posts, q, cat]);

  return (
    <section className="blog-section blog-index" id="blog">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Blog</span>
            <h2>Conteúdo sobre tecnologia para o seu negócio.</h2>
          </div>
          <p className="lede">
            Automação, dados, sites e gestão de TI explicados de forma direta — com
            exemplos reais, para quem precisa decidir.
          </p>
        </div>

        <div className="blog-toolbar">
          <div className="blog-search">
            <SearchIcon />
            <input
              type="search"
              placeholder="Buscar artigo…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Buscar artigo"
            />
          </div>
          <div className="blog-chips">
            <button
              type="button"
              className={`chip ${cat === TODOS ? 'is-active' : ''}`}
              onClick={() => setCat(TODOS)}
            >
              {TODOS}
            </button>
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                className={`chip ${cat === c ? 'is-active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtrados.length === 0 ? (
          <p className="blog-empty">
            Nenhum artigo encontrado{q ? ` para “${q}”` : ''}. Tente outro termo ou
            categoria.
          </p>
        ) : (
          <div className="blog-grid">
            {filtrados.map((post) => (
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
        )}
      </div>
    </section>
  );
}
