import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Manrope, Space_Grotesk, Montserrat} from 'next/font/google';
import { config } from '@/lib/config';
import './globals.css';

/**
 * Fontes carregadas pelo next/font.
 * Cada uma exporta uma CSS variable que é consumida em globals.css via:
 *   --font-display: var(--font-display-loaded), ...fallbacks
 */
const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-loaded',
  display: 'swap',
});

const fontBody = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-loaded',
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-loaded',
  display: 'swap',
});

const fontLogo = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-loaded',
  display: 'swap',
});

// ============================================
// Metadata global (sobrescrita em cada página)
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(config.site.url),
  title: {
    default: `${config.site.name} · ${config.site.tagline}`,
    template: `%s · ${config.site.name}`,
  },
  description: config.site.description,
  applicationName: config.site.name,
  authors: [{ name: config.site.name }],
  creator: config.site.name,
  publisher: config.site.name,
  keywords: [
    'desenvolvimento web',
    'automação de processos',
    'suporte de TI',
    'consultoria em tecnologia',
    'PME',
    'site profissional',
    'sistema sob medida',
    'n8n',
    'Make',
    'Next.js',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: config.site.url,
    siteName: config.site.name,
    title: `${config.site.name} · ${config.site.tagline}`,
    description: config.site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${config.site.name} · ${config.site.tagline}`,
    description: config.site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icondefinitiva.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#fafaf8',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="pt-BR"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} ${fontLogo.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${config.site.url}/#organization`,
              name: config.site.name,
              url: config.site.url,
              logo: `${config.site.url}/logo-reative-512.png`,
              description: config.site.description,
              email: config.contact.email,
              sameAs: [config.social.linkedin, config.social.instagram],
            }),
          }}
        />
      </body>
    </html>
  );
}
