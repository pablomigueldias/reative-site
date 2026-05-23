/**
 * Configuração central do app — lida do environment com tipagem forte.
 * Nunca importe `process.env` diretamente em componentes; passe por aqui.
 */

export const config = {
  site: {
    name: 'Reative Systems',
    tagline: 'Escalando seu negócio',
    description:
      'Desenvolvimento, automação e suporte de TI para pequenas e médias empresas. Tecnologia descomplicada, com preço fixo e garantia.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },

  contact: {
    whatsappNumber:
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511925848819',
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contato@reativesystems.com.br',
    phone: '(11) 9 2584-8819',
    phoneDigits: '+5511925848819',
  },

  api: {
    /** URL do backend; vazio significa "ainda sem backend, usar mock" */
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/reative-systems/',
    instagram: 'https://www.instagram.com/reativesystems/',
  },

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  },
} as const;

/** URL do WhatsApp já formatada com mensagem opcional. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${config.contact.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
