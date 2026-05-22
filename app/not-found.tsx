import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { Icon } from '@/components/ui/Icon';
import { whatsappUrl } from '@/lib/config';

export default function NotFound(): JSX.Element {
  return (
    <>
      <Nav external />
      <main>
        <section className="hero" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Erro 404</span>
              <h1 style={{ marginTop: 16 }}>
                Essa página <span className="accent">não existe</span> por aqui.
              </h1>
              <p className="hero-lede" style={{ marginTop: 24 }}>
                Você pode ter seguido um link antigo ou digitado a URL errada.
                A boa notícia é que tem bastante coisa pra ver na home.
              </p>
              <div className="hero-actions" style={{ marginTop: 32 }}>
                <Link href="/" className="btn btn-primary">
                  <Icon.Arrow className="btn-icon" /> Voltar para a home
                </Link>
                <a
                  href={whatsappUrl(
                    'Oi! Tentei acessar uma página da Reative mas deu 404',
                  )}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.WhatsApp className="btn-icon" /> Falar com a gente
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
