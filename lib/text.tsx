import type { ReactNode } from 'react';

/**
 * Transforma marcadores `[[texto]]` em <span class="accent">texto</span>.
 *
 * Permite que textos de conteúdo (que vão sair daqui pra um CMS no futuro)
 * sejam strings puras com sintaxe simples — em vez de JSX hardcoded no
 * arquivo de content.
 *
 * Exemplo:
 *   "Sites que [[vendem]] de verdade" → "Sites que <span class='accent'>vendem</span> de verdade"
 */
export function renderAccented(text: string): ReactNode {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[\[([^\]]+)\]\]$/);
    if (match) {
      return (
        <span key={i} className="accent">
          {match[1]}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

/**
 * Mesma ideia mas com suporte a quebra de linha via `\n`.
 */
export function renderAccentedMultiline(text: string): ReactNode {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <span key={i}>
      {renderAccented(line)}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}
