import type {
  BlogPost,
  CompanyValue,
  FaqItem,
  MethodStep,
  PricingPlan,
  StackItem,
  TrustItem,
} from '@/lib/types';

// ============================================
// Trust strip — abaixo do hero
// ============================================
export const trustItems: TrustItem[] = [
  { label: 'Resposta em até 4h úteis', iconKey: 'Clock' },
  { label: 'Contrato sem fidelidade', iconKey: 'Shield' },
  { label: 'Código auditável e seu', iconKey: 'Code' },
  { label: 'Reunião inicial gratuita', iconKey: 'Calendar' },
];

// ============================================
// Method — como trabalhamos
// ============================================
export const methodSteps: MethodStep[] = [
  {
    num: '01',
    title: 'Diagnóstico',
    description:
      'Conversa de 30 min para entender seu negócio, identificar oportunidades de melhoria e definir prioridades. Sem custo e sem compromisso.',
    duration: '30 min · gratuito',
  },
  {
    num: '02',
    title: 'Proposta',
    description:
      'Documento por escrito com escopo, prazo, preço fechado e o que está e não está incluso. Você leva mesmo sem fechar.',
    duration: 'Até 3 dias úteis',
  },
  {
    num: '03',
    title: 'Execução',
    description:
      'Reuniões semanais de acompanhamento, acesso a um canal direto no WhatsApp e código versionado no GitHub que é seu.',
    duration: 'Sprints de 1-2 semanas',
  },
  {
    num: '04',
    title: 'Operação',
    description:
      'Entrega com treinamento da sua equipe, 30 dias de garantia e plano mensal opcional pra evolução contínua.',
    duration: '30 dias de garantia',
  },
];

// ============================================
// Valores — seção "Sobre"
// ============================================
export const companyValues: CompanyValue[] = [
  {
    num: '01',
    title: 'Combinado é combinado',
    description:
      'Preço fechado, prazo escrito, escopo definido. Se mudar, a gente reabre conversa antes — nunca depois.',
  },
  {
    num: '02',
    title: 'Sem refém de fornecedor',
    description:
      'Código no seu GitHub, senhas no seu cofre, domínio na sua conta. Se um dia você quiser trocar de empresa, leva tudo.',
  },
  {
    num: '03',
    title: 'Atendimento de gente, não de bot',
    description:
      'Você fala direto com quem vai mexer no seu sistema. Sem call center, sem ticket que ninguém responde.',
  },
  {
    num: '04',
    title: 'Tecnologia a serviço do negócio',
    description:
      'A gente não vende framework da moda. Vende solução de problema. Se uma planilha resolve, é planilha que você vai ter.',
  },
];

// ============================================
// Stack — tecnologias usadas
// ============================================
export const stackItems: StackItem[] = [
  { category: 'Web', name: 'React' },
  { category: 'Web', name: 'Next.js' },
  { category: 'Web', name: 'WordPress' },
  { category: 'Web', name: 'Shopify' },
  { category: 'Backend', name: 'Node.js' },
  { category: 'Backend', name: 'Python' },
  { category: 'Cloud', name: 'AWS' },
  { category: 'Cloud', name: 'Cloudflare' },
  { category: 'Cloud', name: 'Vercel' },
  { category: 'Automação', name: 'n8n' },
  { category: 'Automação', name: 'Make' },
  { category: 'Automação', name: 'Zapier' },
  { category: 'DB', name: 'PostgreSQL' },
  { category: 'DB', name: 'Supabase' },
  { category: 'Integrações', name: 'Stripe' },
  { category: 'Integrações', name: 'Pagar.me' },
  { category: 'Workspace', name: 'Microsoft 365' },
  { category: 'Workspace', name: 'Google Workspace' },
];

// ============================================
// Pricing — planos
// ============================================
export const pricingPlans: PricingPlan[] = [
  {
    name: 'Start',
    title: 'Plano Start',
    description:
      'Pro negócio que precisa colocar a casa em ordem: site novo, e-mail profissional e suporte básico.',
    price: { monthly: 890, annual: 712 },
    features: [
      'Site institucional até 5 páginas',
      'E-mail profissional (até 5 contas)',
      'Hospedagem e domínio inclusos',
      'Suporte por WhatsApp em horário comercial',
      '1 alteração de conteúdo por mês',
    ],
    cta: 'Começar com o Start',
    featured: false,
  },
  {
    name: 'Grow',
    title: 'Plano Grow',
    description:
      'Pra quem já passou da fase do site e quer automatizar processo, integrar sistema e ter time de TI.',
    price: { monthly: 2490, annual: 1992 },
    features: [
      'Tudo do Start, mais:',
      'Até 4 automações ativas (Make / n8n)',
      'Suporte prioritário com SLA de 4h',
      'Reunião quinzenal de evolução',
      'Integração com 1 ERP ou CRM',
      'Backup diário e monitoramento 24/7',
    ],
    cta: 'Falar sobre o Grow',
    featured: true,
    badge: 'Mais escolhido',
  },
  {
    name: 'Custom',
    title: 'Projeto sob medida',
    description:
      'Sistema sob medida, e-commerce robusto ou projeto único? A gente faz por escopo fechado.',
    price: null,
    features: [
      'Escopo definido em conjunto',
      'Time dedicado para o seu projeto',
      'Sprints semanais com entrega contínua',
      'Código no seu GitHub desde o dia 1',
      'Treinamento pra equipe interna',
      'Garantia estendida de 90 dias',
    ],
    cta: 'Pedir orçamento',
    featured: false,
  },
];

// ============================================
// Blog posts (resumos para a home)
// ============================================
export const blogPosts: BlogPost[] = [
  {
    slug: 'planilha-virou-sistema',
    category: 'Automação',
    coverClass: 'post-cover-1',
    date: '12 Mai 2026',
    readTime: '6 min',
    title: '5 sinais de que a sua planilha já virou sistema (e ninguém percebeu)',
    excerpt:
      'Toda planilha começa simples. O problema é quando ela vira o coração da operação — e ninguém pode tirar férias.',
  },
  {
    slug: 'site-lento-custa-caro',
    category: 'Site',
    coverClass: 'post-cover-2',
    date: '28 Abr 2026',
    readTime: '8 min',
    title: 'Por que site lento custa mais caro que site bonito',
    excerpt:
      'Cada segundo a mais de carregamento corta conversão. Mostramos com número quanto sua empresa pode estar deixando na mesa.',
  },
  {
    slug: 'quanto-custa-nao-ter-ti',
    category: 'Gestão de TI',
    coverClass: 'post-cover-3',
    date: '14 Abr 2026',
    readTime: '5 min',
    title: 'Quanto custa NÃO ter suporte de TI na sua PME',
    excerpt:
      'A conta da TI parece alta — até a primeira invasão, o primeiro backup perdido ou o primeiro dia inteiro com a equipe parada.',
  },
];

// ============================================
// FAQ
// ============================================
export const faqItems: FaqItem[] = [
  {
    question: 'Vocês atendem só em Curitiba ou em qualquer cidade?',
    answer:
      'Atendemos qualquer lugar do Brasil de forma remota — reuniões por video-call, suporte por WhatsApp e Slack. Em Curitiba e região metropolitana fazemos visita presencial quando o projeto exige.',
  },
  {
    question: 'Como funciona a cobrança? Tem fidelidade?',
    answer:
      'Os planos mensais não têm fidelidade obrigatória — você cancela com 30 dias de aviso. Para projetos sob medida (Custom), trabalhamos com escopo fechado e cronograma de pagamento por entregas. Tudo definido no contrato antes de começar.',
  },
  {
    question: 'E se eu não souber explicar tecnicamente o que preciso?',
    answer:
      'Esse é o motivo de existirmos. Na reunião de diagnóstico, a conversa é sobre o seu negócio, não sobre tecnologia. Quem traduz o problema pra solução técnica somos nós — você só precisa contar o que está dando trabalho ou perdendo dinheiro.',
  },
  {
    question: 'Vocês trabalham com tecnologias específicas ou usam o que for melhor?',
    answer:
      'Usamos o que resolve o seu problema com menor custo de manutenção. Temos preferência por ferramentas open source e soluções consolidadas (React, Node, Python, n8n, AWS), mas se WordPress for o caminho, é WordPress. Recomendação técnica vem com justificativa por escrito.',
  },
  {
    question: 'O código que vocês fazem é meu?',
    answer:
      'Sim. Todo código é versionado em um repositório no seu GitHub (ou no nosso, transferido pra você quando quiser). Senhas, domínio, hospedagem — tudo fica em conta sua. Se um dia você quiser trocar de empresa, leva tudo.',
  },
  {
    question: 'E se eu não gostar do que vocês entregaram?',
    answer:
      'Todos os projetos têm 30 dias de garantia de satisfação. Se algo não funcionou como combinado, refazemos sem custo. Se ainda assim não der certo, devolvemos o pagamento dos itens que não atenderam. Combinado é combinado.',
  },
  {
    question: 'Quanto tempo leva pra começar?',
    answer:
      'Da primeira conversa à proposta: até 3 dias úteis. Da proposta aceita ao kickoff do projeto: normalmente 5 a 10 dias úteis, conforme a complexidade do escopo e a nossa agenda. Para suporte mensal, ativamos em até 48h.',
  },
  {
    question: 'Vocês emitem nota fiscal?',
    answer:
      'Sim, somos PJ regularizada e emitimos NF-e/NFS-e em todos os serviços. Aceitamos pagamento via Pix, boleto, cartão de crédito (com taxa) e transferência. Para empresas, oferecemos faturamento mensal.',
  },
];
