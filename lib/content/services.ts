import type { ServiceCard, ServiceContent, ServiceSlug } from '@/lib/types';

/**
 * Conteúdo completo das páginas de serviço.
 * Chave do objeto = slug usado na URL (/servicos/[slug]).
 *
 * Quando o backend existir, este arquivo vira fonte de dados para
 * `lib/api/services.ts`, ou desaparece em favor de fetch do CMS.
 */
export const services: Record<ServiceSlug, ServiceContent> = {
  automacao: {
    slug: 'automacao',
    eyebrow: 'Serviço · Automação',
    shortName: 'Automação',
    iconKey: 'Workflow',
    title: 'Automação que [[devolve tempo]] pra sua equipe.',
    lede: 'Aquele relatório que toma 3h por semana. O lead que cai no e-mail e demora 2 dias pra virar atendimento. A nota copiada na mão pra planilha. A gente automatiza — e você recupera horas todo mês.',
    stats: [
      { num: '~6h', label: 'economizadas por semana, em média' },
      { num: '24/7', label: 'rodando sem intervenção' },
      { num: '0', label: 'erros de digitação humanos' },
    ],
    includes: [
      {
        num: '01',
        title: 'Mapa de processos',
        description:
          'Documento desenhando cada passo do fluxo atual e onde o tempo está sendo perdido. Você fica com o documento, mesmo sem contratar a execução.',
      },
      {
        num: '02',
        title: 'Automação com baixo código',
        description:
          'Construímos com n8n, Make ou Zapier — ferramentas maduras, baratas, e que sua equipe consegue ajustar depois.',
      },
      {
        num: '03',
        title: 'Integração entre sistemas',
        description:
          'Seu CRM falando com o WhatsApp, sua loja com o ERP, sua planilha com o e-mail. Sem cópia manual no meio.',
      },
      {
        num: '04',
        title: 'Tratamento de erro',
        description:
          'Se uma etapa falhar, a gente avisa por e-mail/Slack e a operação continua. Nada some sem você saber.',
      },
      {
        num: '05',
        title: 'Painel de monitoramento',
        description:
          'Você vê quantas execuções rodaram, quais deram problema, quanto tempo economizou — tudo num só lugar.',
      },
      {
        num: '06',
        title: 'Treinamento da equipe',
        description:
          'Sessão prática pra quem vai operar e ajustar a automação no dia-a-dia. Sem ficar refém da gente.',
      },
    ],
    cases: [
      {
        tag: 'E-commerce',
        title: 'Pedido cai → estoque atualiza → NF emite → cliente recebe rastreio',
        problem:
          'Equipe da Lúcia copiava cada pedido da loja pra planilha de estoque, depois pro emissor de NF. Demorava 15 min por pedido.',
        solution:
          'Webhook no checkout → atualiza estoque no Bling → emite NF-e → manda rastreio por WhatsApp. Tudo em 30 segundos.',
        result: 'Reduziu de 15min pra [[30s por pedido]]',
      },
      {
        tag: 'Imobiliária',
        title: 'Lead do site → CRM → atribui ao corretor → notifica WhatsApp',
        problem:
          'Formulário do site caía num e-mail genérico. Lead esperava em média 2 dias por resposta. Boa parte ia pro concorrente.',
        solution:
          'Form → cria contato no Pipedrive → distribui round-robin entre corretores → manda WhatsApp pro corretor + cliente.',
        result: 'Tempo de resposta caiu pra [[menos de 5 min]]',
      },
      {
        tag: 'Serviços',
        title: 'Cliente novo → contrato no Docusign → cobrança no ASAAS → boas-vindas',
        problem:
          'Onboarding de novo cliente envolvia 5 abas, 3 sistemas e 1 estagiário. Erros eram comuns.',
        solution:
          'Formulário interno → gera contrato pré-preenchido → cria cobrança recorrente → manda e-mail de boas-vindas.',
        result: 'Onboarding de [[2 dias pra 20 minutos]]',
      },
      {
        tag: 'Consultoria',
        title: 'Apontamento de horas → relatório semanal → fatura mensal',
        problem:
          'Time de 8 pessoas anotava horas em planilhas diferentes. Cliente reclamava que cobrança não batia com horas trabalhadas.',
        solution:
          'Toggl → consolida no Google Sheets → gera PDF semanal → no fim do mês emite NF e manda pro cliente.',
        result: 'Cobrança [[100% rastreável]] e fim das discussões',
      },
    ],
  },

  sites: {
    slug: 'sites',
    eyebrow: 'Serviço · Sites e Sistemas Web',
    shortName: 'Sites e sistemas',
    iconKey: 'Code',
    title: 'Sites e sistemas que [[vendem]] e funcionam.',
    lede: 'Site institucional, loja virtual, sistema interno, painel administrativo. Feito pra carregar rápido, ser editado por você quando precisar, e crescer com o seu negócio sem virar caixa-preta.',
    stats: [
      { num: '<2s', label: 'de carregamento na primeira visita' },
      { num: '100%', label: 'responsivo (celular, tablet, desktop)' },
      { num: 'A+', label: 'em performance e SEO no Lighthouse' },
    ],
    includes: [
      {
        num: '01',
        title: 'Design feito pro seu negócio',
        description:
          'Não é template genérico. A gente desenha pro que você vende, pro tom da sua marca e pra ação que o visitante precisa tomar.',
      },
      {
        num: '02',
        title: 'CMS pra você editar',
        description:
          'Painel administrativo onde você troca texto, foto, banner sem precisar chamar a gente toda vez. Treinamos sua equipe.',
      },
      {
        num: '03',
        title: 'Hospedagem premium',
        description:
          'CDN global, SSL automático, backup diário. Site fica no ar 99,9% do tempo, com domínio na sua conta.',
      },
      {
        num: '04',
        title: 'SEO técnico',
        description:
          'Sitemap, schema, meta tags, OpenGraph, Core Web Vitals. Google entende seu site, e você aparece quando precisa.',
      },
      {
        num: '05',
        title: 'Integrações que importam',
        description:
          'WhatsApp, Google Analytics, Pixel do Meta, formulário no CRM, pagamento Stripe ou Pagar.me. Tudo já pronto.',
      },
      {
        num: '06',
        title: 'Código no seu GitHub',
        description:
          'Você é dono do código desde o dia 1. Se um dia quiser trocar de empresa, leva tudo. Sem refém de fornecedor.',
      },
    ],
    cases: [
      {
        tag: 'Institucional',
        title: 'Site novo pra clínica que tinha página de Facebook como vitrine',
        problem:
          'Cliente não conseguia ser achado no Google. Marcação de consulta era só por mensagem direta no Instagram.',
        solution:
          'Site institucional + integração com sistema de agendamento online + WhatsApp business + meta tags otimizadas pra busca local.',
        result: 'Marcações via site cresceram [[+340% em 90 dias]]',
      },
      {
        tag: 'E-commerce',
        title: 'Migração de loja Wix lenta para Shopify performática',
        problem:
          'Loja na plataforma errada: lenta, cara, e sem integração com o ERP. Conversão estava parada havia 1 ano.',
        solution:
          'Migramos pro Shopify, recriamos o tema, conectamos ao Bling e ao Pagar.me. Mantivemos URLs antigas pra não perder SEO.',
        result: 'Conversão subiu de [[0,9% pra 2,4%]]',
      },
      {
        tag: 'Sistema interno',
        title: 'Painel sob medida pra controle de OS de assistência técnica',
        problem:
          'Operação rodava em planilha compartilhada. 3 técnicos editavam ao mesmo tempo, OS sumiam, peças desapareciam do estoque.',
        solution:
          'Sistema web simples com login, histórico de OS, integração com WhatsApp pra avisar cliente quando ficou pronto.',
        result: 'OS perdidas caíram pra [[zero em 6 meses]]',
      },
      {
        tag: 'Landing page',
        title: 'Página de captura pra lançamento de curso online',
        problem:
          'Cliente queria validar uma ideia de curso antes de gravar. Precisava medir interesse rapidamente.',
        solution:
          'Landing focada em conversão + integração com Mailchimp + Pixel do Meta + página de obrigado com remarketing.',
        result: '[[2.300 leads em 2 semanas]]',
      },
    ],
  },

  suporte: {
    slug: 'suporte',
    eyebrow: 'Serviço · Suporte de TI',
    shortName: 'Suporte de TI',
    iconKey: 'Headset',
    title: 'Suporte de TI [[com hora marcada]] e jeito de gente.',
    lede: 'Mesa de ajuda pra sua equipe, manutenção preventiva de máquinas e ambientes, e um canal direto no WhatsApp pra quando o computador travar — sem ticket que ninguém responde.',
    stats: [
      { num: '<4h', label: 'primeira resposta em chamado' },
      { num: '99.9%', label: 'uptime garantido em SLA' },
      { num: '0', label: 'fidelidade obrigatória' },
    ],
    includes: [
      {
        num: '01',
        title: 'Helpdesk com SLA',
        description:
          'Canal exclusivo no WhatsApp e e-mail pra sua equipe. Resposta em até 4h úteis, registro de tudo, prioridades acordadas em contrato.',
      },
      {
        num: '02',
        title: 'Manutenção preventiva',
        description:
          'Visita mensal (ou remoto, se preferir) pra atualizar sistema, limpar máquina, verificar antivírus. Antes de quebrar, a gente cuida.',
      },
      {
        num: '03',
        title: 'Backup automatizado',
        description:
          'Configuração de backup diário em nuvem (Google Drive, OneDrive, S3). Teste de restore mensal. Você nunca perde dado importante.',
      },
      {
        num: '04',
        title: 'Gestão de e-mail e Workspace',
        description:
          'Microsoft 365 ou Google Workspace: criar conta nova, recuperar senha, ajustar grupo, configurar domínio próprio.',
      },
      {
        num: '05',
        title: 'Segurança básica',
        description:
          'Antivírus corporativo, atualização de senhas, MFA em sistemas críticos. Bloqueio de tentativa suspeita antes que vire problema.',
      },
      {
        num: '06',
        title: 'Compras consultivas',
        description:
          'Vai trocar máquina? Comprar nobreak? Contratar internet? A gente recomenda pelo que serve pra você — sem comissão de fornecedor.',
      },
    ],
    cases: [
      {
        tag: 'Comércio',
        title: 'Ataque de ransomware → restauração em 6 horas',
        problem:
          'Loja foi infectada num sábado de manhã. Sistema fiscal travou. Sem backup confiável, perderiam o histórico de vendas do mês.',
        solution:
          'Backup em nuvem que tínhamos configurado 2 meses antes. Restauramos máquinas, trocamos senhas, treinamos equipe contra phishing.',
        result: 'De volta no ar em [[6 horas]], zero dado perdido',
      },
      {
        tag: 'Escritório',
        title: 'Migração de Hotmail genérico pra e-mail profissional',
        problem:
          'Sócios usavam @hotmail e @gmail pra atender cliente. Passava insegurança, perdia anexo, sem domínio próprio.',
        solution:
          'Compramos domínio, configuramos Google Workspace, migramos histórico, treinamos equipe e configuramos assinatura padrão.',
        result: 'Imagem profissional + [[conformidade LGPD]]',
      },
      {
        tag: 'Indústria',
        title: 'Suporte preventivo evitou parada de chão de fábrica',
        problem:
          'PC do supervisor de produção dava pau toda semana. Cada parada custava cara em produção atrasada.',
        solution:
          'Diagnóstico apontou HD com setores ruins. Trocamos antes da falha catastrófica, migramos dados sem perda.',
        result: 'Zero parada nos [[últimos 8 meses]]',
      },
      {
        tag: 'Saúde',
        title: 'Adequação de consultório à LGPD',
        problem:
          'Clínica armazenava prontuário em pasta compartilhada na rede sem controle de acesso. Risco alto pra LGPD.',
        solution:
          'Migramos pra sistema de prontuário com criptografia, configuramos perfis de acesso, escrevemos política interna de uso.',
        result: 'Conformidade alcançada em [[30 dias]]',
      },
    ],
  },

  consultoria: {
    slug: 'consultoria',
    eyebrow: 'Serviço · Consultoria em Tecnologia',
    shortName: 'Consultoria',
    iconKey: 'Compass',
    title: 'Antes de gastar com tecnologia, [[olhe o mapa.]]',
    lede: 'Diagnóstico do seu stack atual, escolha de ferramentas, plano de transformação digital. Recomendação por escrito que você leva mesmo se não nos contratar pra executar.',
    stats: [
      { num: '30 min', label: 'primeira conversa, gratuita' },
      { num: '10 dias', label: 'pra entregar diagnóstico completo' },
      { num: '100%', label: 'vendor-neutro — não recebemos comissão' },
    ],
    includes: [
      {
        num: '01',
        title: 'Diagnóstico do stack atual',
        description:
          'Mapeamento de cada ferramenta, sistema, planilha e processo que sua empresa usa hoje. Onde está o ouro e onde está o ralo.',
      },
      {
        num: '02',
        title: 'Plano de prioridades',
        description:
          'Lista do que mexer primeiro, baseado em retorno pro negócio, custo de implementação e risco de não fazer.',
      },
      {
        num: '03',
        title: 'Recomendação de ferramentas',
        description:
          'Comparativo justo de opções (com prós, contras, preços, casos de uso). Você decide com informação, não com pressão de vendedor.',
      },
      {
        num: '04',
        title: 'Roadmap de 12 meses',
        description:
          'Plano em fases, com marcos mensuráveis, custos estimados e ordem de execução. Pode ser feito por nós ou por outro fornecedor.',
      },
      {
        num: '05',
        title: 'Documento entregue',
        description:
          'PDF de 20-40 páginas com tudo registrado. É seu, mesmo que você não fechar contrato com a gente. Sem amarra.',
      },
      {
        num: '06',
        title: 'Apresentação executiva',
        description:
          'Reunião de 1h pra apresentar o diagnóstico ao seu time ou aos sócios, com tempo pra perguntas e ajustes.',
      },
    ],
    cases: [
      {
        tag: 'Distribuidora',
        title: 'Decisão entre trocar ERP ou continuar e adaptar',
        problem:
          'Cliente ia gastar R$ 80mil migrando pra um ERP novo. Achava que o atual estava saturado.',
        solution:
          'Diagnóstico mostrou que o ERP suportava — só faltava integração e treinamento. Recomendamos não trocar, e investir no que tinha.',
        result: 'Economizou [[~R$ 70mil]] em troca desnecessária',
      },
      {
        tag: 'Agência',
        title: 'Roadmap pra escalar de 5 pra 30 funcionários sem caos',
        problem:
          'Agência crescendo rápido. Sócios sentiam que tudo virava bagunça quando passava de 8 pessoas. Não sabiam por onde começar.',
        solution:
          'Mapeamos processos, recomendamos CRM, gestão de tarefas, ponto eletrônico, política de TI. Plano dividido em 4 trimestres.',
        result: '[[Crescimento sem replanilhar]] a cada contratação',
      },
      {
        tag: 'Indústria',
        title: 'Auditoria de segurança antes de auditoria do cliente',
        problem:
          'Cliente novo (multinacional) exigia certificações de segurança. PME não sabia nem por onde começar.',
        solution:
          'Auditoria interna, gap analysis contra ISO 27001, plano de adequação em 90 dias. Indicamos parceiro certificador pra auditoria final.',
        result: 'Contrato com a multinacional [[fechado]]',
      },
      {
        tag: 'Logística',
        title: 'Análise de make-or-buy pra sistema de roteirização',
        problem:
          'Cliente cogitava desenvolver sistema próprio de roteirização. Tinha orçamento de R$ 200mil.',
        solution:
          'Comparativo entre 4 SaaS do mercado e o custo real de manter algo interno. Conclusão: SaaS resolvia 95% por R$ 800/mês.',
        result: 'Decisão informada poupou [[R$ 200mil]]',
      },
    ],
  },
};

/** Helper pra recuperar serviço por slug (retorna null se não existir). */
export function getServiceBySlug(slug: string): ServiceContent | null {
  return (services as Record<string, ServiceContent>)[slug] ?? null;
}

/** Lista de slugs disponíveis — usada pro generateStaticParams. */
export function getServiceSlugs(): ServiceSlug[] {
  return Object.keys(services) as ServiceSlug[];
}

/**
 * Cards para a seção "Services" da home.
 * Automação é o card "featured" — mantido como na home original.
 */
export const homeServiceCards: ServiceCard[] = [
  {
    num: '04',
    slug: 'automacao',
    href: '/servicos/automacao',
    iconKey: 'Workflow',
    title: 'Automação de processos e integrações',
    description:
      'Aquele relatório que toma 3h toda semana. O lead que cai no e-mail e demora 2 dias pra virar atendimento. A nota fiscal copiada na mão pra planilha. A gente automatiza — e você recupera horas todo mês.',
    tags: ['n8n', 'Make', 'APIs', 'Zapier', 'Google Apps Script'],
    featured: true,
  },
  {
    num: '01',
    slug: 'sites',
    href: '/servicos/sites',
    iconKey: 'Code',
    title: 'Sites e sistemas web',
    description:
      'Sites institucionais, lojas virtuais e sistemas internos sob medida — feitos pra carregar rápido, ser editáveis por você e crescer com o seu negócio.',
    tags: ['React', 'Next.js', 'WordPress', 'Shopify'],
  },
  {
    num: '02',
    slug: 'suporte',
    href: '/servicos/suporte',
    iconKey: 'Headset',
    title: 'Suporte técnico e TI',
    description:
      'Mesa de ajuda para sua equipe, manutenção preventiva, configuração de ambiente e backup. Tudo com SLA claro e atendimento por WhatsApp.',
    tags: ['SLA 4h', 'Backup', 'Helpdesk', 'Microsoft 365'],
  },
  {
    num: '03',
    slug: 'consultoria',
    href: '/servicos/consultoria',
    iconKey: 'Compass',
    title: 'Consultoria em tecnologia',
    description:
      'Diagnóstico do seu stack atual, escolha de ferramentas, plano de transformação digital. Recomendação por escrito que você leva mesmo se não nos contratar.',
    tags: ['Diagnóstico', 'Roadmap', 'Vendor selection'],
  },
];
