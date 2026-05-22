import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { legalContent } from '@/lib/content/legal';

export const metadata: Metadata = {
  title: 'Termos de Serviço',
  description:
    'As regras do contrato com a Reative Systems — claras e objetivas.',
};

export default function TermosPage(): JSX.Element {
  return <LegalPage content={legalContent.termos} />;
}
