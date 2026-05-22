/**
 * Tipos compartilhados de domínio.
 * Mantém o shape das entidades centralizado — quando o backend existir,
 * estes tipos devem espelhar os DTOs da API.
 */

import type { ReactNode } from 'react';

// ============================================
// Serviços
// ============================================

export type ServiceSlug = 'automacao' | 'sites' | 'suporte' | 'consultoria';

export interface ServiceStat {
  /** Número/valor de destaque (ex: "~6h", "<2s", "99.9%") */
  num: string;
  /** Descrição do que esse número significa */
  label: string;
}

export interface ServiceInclude {
  /** Numeração em string ("01", "02"...) usada como decoração */
  num: string;
  title: string;
  description: string;
}

export interface ServiceCase {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  /**
   * Resultado com marker [[...]] para texto destacado.
   * Ex: "Reduziu de 15min pra [[30s por pedido]]"
   */
  result: string;
}

export interface ServiceContent {
  slug: ServiceSlug;
  /** Texto curto que aparece acima do título — "Serviço · Automação" */
  eyebrow: string;
  /** Nome curto pra cards e nav */
  shortName: string;
  /** Ícone (key do objeto Icon) */
  iconKey: IconKey;
  /** Título com markers [[...]] pra destaque */
  title: string;
  lede: string;
  stats: ServiceStat[];
  includes: ServiceInclude[];
  cases: ServiceCase[];
}

// ============================================
// Card resumido (usado na home, em listagens)
// ============================================

export interface ServiceCard {
  num: string;
  slug: ServiceSlug | null; // null para "destaque" sem rota dedicada (já que automação é o destacado)
  href: string;
  iconKey: IconKey;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

// ============================================
// Pricing
// ============================================

export interface PricingPlan {
  name: 'Start' | 'Grow' | 'Custom';
  title: string;
  description: string;
  /** Preço mensal/anual em BRL. null se "a combinar" */
  price: { monthly: number; annual: number } | null;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
}

// ============================================
// Blog
// ============================================

export interface BlogPost {
  slug: string;
  category: string;
  /** Identificador do estilo de cover (CSS gradient) */
  coverClass: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

// ============================================
// FAQ
// ============================================

export interface FaqItem {
  question: string;
  answer: string;
}

// ============================================
// Método
// ============================================

export interface MethodStep {
  num: string;
  title: string;
  description: string;
  duration: string;
}

// ============================================
// Sobre / Valores
// ============================================

export interface CompanyValue {
  num: string;
  title: string;
  description: string;
}

// ============================================
// Stack
// ============================================

export interface StackItem {
  category: string;
  name: string;
}

// ============================================
// Trust badges
// ============================================

export interface TrustItem {
  label: string;
  iconKey: IconKey;
}

// ============================================
// Legal pages
// ============================================

export interface LegalSection {
  id: string;
  heading: string;
  /** ReactNode é OK aqui porque é conteúdo estático; se vier de CMS, vira string MD */
  body: ReactNode;
}

export interface LegalContent {
  title: string;
  lede: string;
  lastUpdated: string;
  sections: LegalSection[];
}

// ============================================
// Icons (chaves disponíveis)
// ============================================

export type IconKey =
  | 'Arrow'
  | 'ArrowUpRight'
  | 'WhatsApp'
  | 'Calendar'
  | 'Mail'
  | 'Check'
  | 'Plus'
  | 'Shield'
  | 'Clock'
  | 'Zap'
  | 'Heart'
  | 'Code'
  | 'Workflow'
  | 'Headset'
  | 'Compass'
  | 'Phone'
  | 'Linkedin'
  | 'Instagram';

// ============================================
// Contato — formulário e API
// ============================================

export interface ContactFormData {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  servico: string;
  mensagem: string;
}

export interface ContactFormErrors {
  nome?: string;
  email?: string;
  mensagem?: string;
}

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; error: string; errors?: ContactFormErrors };
