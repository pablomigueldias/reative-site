import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/service/ServicePage';
import { getServiceBySlug, getServiceSlugs } from '@/lib/content/services';

interface PageProps {
  params: { slug: string };
}

/**
 * Gera estaticamente as 4 rotas no build (SSG): /servicos/automacao, /sites, etc.
 */
export function generateStaticParams(): { slug: string }[] {
  return getServiceSlugs().map((slug) => ({ slug }));
}

/**
 * Metadata específico de cada serviço (título, OG, etc.)
 */
export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  // Tira os [[...]] do título pra texto plain
  const titlePlain = service.title.replace(/\[\[([^\]]+)\]\]/g, '$1');

  return {
    title: `${service.shortName} — ${service.eyebrow.replace(/^Serviço · /, '')}`,
    description: service.lede,
    openGraph: {
      title: titlePlain,
      description: service.lede,
    },
  };
}

export default function ServiceRoute({ params }: PageProps): JSX.Element {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }
  return <ServicePage service={service} />;
}
