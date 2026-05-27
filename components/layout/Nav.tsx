'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BrandMark } from '@/components/ui/BrandMark';
import { Icon } from '@/components/ui/Icon';
import { config, whatsappUrl } from '@/lib/config';

interface NavProps {
  /**
   * Quando `true`, links âncora (#servicos, #faq...) apontam pra home
   * (ex: "/#servicos") em vez de só o hash. Use em páginas que não são a home.
   */
  external?: boolean;
}

const NAV_LINKS = [
  { hash: '#servicos', label: 'Serviços' },
  { hash: '#metodo', label: 'Como trabalhamos' },
  { hash: '#sobre', label: 'Sobre' },
  { hash: '#contato', label: 'Contato' },
] as const;

export function Nav({ external = false }: NavProps): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkFor = (hash: string) => (external ? `/${hash}` : hash);

  return (
    <>
      <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <Link href="/" className="brand">
            <BrandMark className="brand-mark" />
            <span className="brand-name">{config.site.name}</span>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map(({ hash, label }) => (
              <a key={hash} href={linkFor(hash)}>
                {label}
              </a>
            ))}
          </div>

          <div className="nav-cta">
            <a href={linkFor('#contato')} className="btn btn-ghost">
              Falar com a gente
            </a>
            <a
              href={whatsappUrl(
                'Oi! Quero saber mais sobre a Reative Systems',
              )}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.WhatsApp className="btn-icon" />
              <span className="label-full">WhatsApp</span>
            </a>
            <button
              type="button"
              className="nav-burger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(({ hash, label }) => (
          <a
            key={hash}
            href={linkFor(hash)}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className="nav-mobile-cta">
          <a
            href={linkFor('#contato')}
            className="btn btn-ghost"
            onClick={() => setMobileOpen(false)}
          >
            Falar com a gente
          </a>
          <a
            href={whatsappUrl('Oi! Quero saber mais sobre a Reative Systems')}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.WhatsApp className="btn-icon" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
