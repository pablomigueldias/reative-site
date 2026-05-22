import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import type { LegalContent } from '@/lib/types';

interface LegalPageProps {
  content: LegalContent;
}

/**
 * Layout compartilhado das páginas legais (Privacidade e Termos).
 * Estrutura: hero + sidebar com TOC + corpo com seções âncoras.
 */
export function LegalPage({ content }: LegalPageProps): JSX.Element {
  return (
    <>
      <Nav external />
      <main>
        <header className="legal-hero">
          <div className="wrap">
            <span className="eyebrow">Documento legal</span>
            <h1 style={{ marginTop: 20 }}>{content.title}</h1>
            <p
              className="lede"
              style={{ marginTop: 20, fontSize: 'clamp(17px, 1.4vw, 20px)' }}
            >
              {content.lede}
            </p>
            <p
              style={{
                marginTop: 24,
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: 'var(--ink-mute)',
              }}
            >
              {content.lastUpdated}
            </p>
          </div>
        </header>

        <div className="legal-body">
          <div className="wrap legal-layout">
            <aside className="legal-toc">
              <h5>Neste documento</h5>
              <ul>
                {content.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="legal-prose">
              {content.sections.map((section, idx) => (
                <section key={section.id} id={section.id}>
                  <h2 style={idx === 0 ? { marginTop: 0 } : undefined}>
                    {section.heading}
                  </h2>
                  {section.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
