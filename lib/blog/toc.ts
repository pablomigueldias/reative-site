import GithubSlugger from 'github-slugger';

export interface TocEntry {
  id: string;
  label: string;
  level: number;
}

/**
 * Extrai o sumário (TOC) dos headings H2/H3 do Markdown, gerando os mesmos
 * `id`s que o `rehype-slug` produz no corpo renderizado — então as âncoras do
 * sumário sempre casam com os títulos. Fonte única: o próprio `body_md`.
 */
export function buildToc(markdown: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const entries: TocEntry[] = [];
  let inFence = false;

  for (const raw of markdown.split('\n')) {
    const line = raw.trimEnd();
    if (/^\s*```/.test(line)) {
      inFence = !inFence; // ignora headings dentro de bloco de código
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (!match) continue;
    const hashes = match[1] ?? '';
    const level = hashes.length;
    // tira marcação inline (negrito/código/links) do rótulo
    const label = (match[2] ?? '')
      .replace(/`([^`]*)`/g, '$1')
      .replace(/\*\*([^*]*)\*\*/g, '$1')
      .replace(/\*([^*]*)\*/g, '$1')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .trim();
    entries.push({ id: slugger.slug(label), label, level });
  }

  return entries;
}
