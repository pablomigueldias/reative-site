import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { legalContent } from '@/lib/content/legal';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Como a Reative Systems coleta, usa e protege os dados que você compartilha.',
};

export default function PrivacidadePage(): JSX.Element {
  return <LegalPage content={legalContent.privacidade} />;
}
