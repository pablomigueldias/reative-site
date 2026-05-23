import Link from 'next/link';
import { BrandMark } from '@/components/ui/BrandMark';
import { Icon } from '@/components/ui/Icon';
import { config, whatsappUrl } from '@/lib/config';

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <BrandMark className="brand-mark" />
              <span className="brand-name">{config.site.name}</span>
            </Link>
            <p>
              Tecnologia que reativa o seu negócio. Desenvolvimento, automação e suporte de TI.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              <a
                href={config.social.linkedin}
                aria-label="LinkedIn"
                style={{ color: 'var(--ink-soft)' }}
              >
                <Icon.Linkedin width={20} height={20} />
              </a>
              <a
                href={config.social.instagram}
                aria-label="Instagram"
                style={{ color: 'var(--ink-soft)' }}
              >
                <Icon.Instagram width={20} height={20} />
              </a>
              <a
                href={whatsappUrl()}
                aria-label="WhatsApp"
                style={{ color: 'var(--ink-soft)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.WhatsApp width={20} height={20} />
              </a>
            </div>
          </div>

          <div>
            <h5>Serviços</h5>
            <ul>
              <li>
                <Link href="/servicos/sites">Sites e sistemas</Link>
              </li>
              <li>
                <Link href="/servicos/automacao">Automação</Link>
              </li>
              <li>
                <Link href="/servicos/suporte">Suporte de TI</Link>
              </li>
              <li>
                <Link href="/servicos/consultoria">Consultoria</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>Empresa</h5>
            <ul>
              <li>
                <a href="/#sobre">Sobre</a>
              </li>
              <li>
                <a href="/#metodo">Como trabalhamos</a>
              </li>
              <li>
                <a href="/#planos">Planos</a>
              </li>
              <li>
                <a href="/#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Contato</h5>
            <ul>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`}>E-mail</a>
              </li>
              <li>
                <a href="/#contato">Agendar reunião</a>
              </li>
              <li>
                <a href="/#faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {config.site.name} · {config.site.tagline}
          </span>
          <span style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacidade">Política de privacidade</Link>
            <Link href="/termos">Termos de serviço</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
