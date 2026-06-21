'use client';

import { useEffect, useMemo, useState } from 'react';
import { PostGrid } from '@/components/blog/PostGrid';
import type { PostCard } from '@/lib/blog/source';

interface BlogIndexProps {
  posts: PostCard[];
  initialQ?: string;
  initialCat?: string;
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
export function BlogIndex({
  posts,
  initialQ = '',
  initialCat = '',
}: BlogIndexProps): JSX.Element {
  const [q, setQ] = useState(initialQ);
  const [cat, setCat] = useState<string>(initialCat || TODOS);

  // Reflete busca/categoria na URL (sem recarregar) → buscas compartilháveis e
  // compatível com a SearchAction do Google (/blog?q=...).
  useEffect(() => {
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (cat !== TODOS) params.set('cat', cat);
    const qs = params.toString();
    window.history.replaceState(null, '', qs ? `/blog?${qs}` : '/blog');
  }, [q, cat]);

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
          <PostGrid posts={filtrados} />
        )}
      </div>
    </section>
  );
}
