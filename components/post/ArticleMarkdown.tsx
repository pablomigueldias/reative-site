import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';

interface ArticleMarkdownProps {
  content: string;
}

/**
 * Renderiza o corpo do post (Markdown vindo do studio) dentro do `.article-prose`.
 *
 * - `remark-gfm`: tabelas, listas de tarefas, ~tachado~, autolinks.
 * - `rehype-slug`: dá `id` aos headings (casam com o sumário gerado em `buildToc`).
 * - `rehype-highlight`: realce de blocos de código (tema em `blog.css`).
 *
 * Server component (sem `use client`): renderiza no build/ISR, custo zero no cliente.
 */
export function ArticleMarkdown({ content }: ArticleMarkdownProps): JSX.Element {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug, rehypeHighlight]}
    >
      {content}
    </ReactMarkdown>
  );
}
