/**
 * CTA do fim do post — adapta o gancho à CATEGORIA do artigo (em vez de um texto
 * genérico). O link de agendamento vem de UM lugar só (config.contact.scheduleUrl
 * → NEXT_PUBLIC_SCHEDULE_URL), então trocar lá atualiza todos os posts.
 */
export interface Cta {
  titulo: string;
  texto: string;
}

const POR_CATEGORIA: Record<string, Cta> = {
  Automação: {
    titulo: 'Sua operação ainda depende de processo manual?',
    texto:
      'Em 30 minutos a gente mapeia o que dá pra automatizar no seu negócio e quanto isso te devolve em tempo — mesmo que você não nos contrate.',
  },
  Dados: {
    titulo: 'Seus dados estão ajudando a decidir — ou só acumulando?',
    texto:
      'Em 30 minutos mostramos como transformar suas planilhas e sistemas num painel que responde as perguntas certas do seu negócio.',
  },
  Site: {
    titulo: 'Seu site trabalha por você ou é só um cartão de visita?',
    texto:
      'Em 30 minutos a gente avalia seu site e mostra onde ele pode gerar mais contato e venda — sem enrolação técnica.',
  },
  'Gestão de TI': {
    titulo: 'Sua TI vive apagando incêndio?',
    texto:
      'Em 30 minutos fazemos um diagnóstico do seu ambiente e mostramos como deixar a operação estável e segura — mesmo que você não nos contrate.',
  },
  IA: {
    titulo: 'Quer usar IA no seu negócio sem cair em modinha?',
    texto:
      'Em 30 minutos mostramos onde a IA realmente economiza tempo e dinheiro na sua operação — com pé no chão.',
  },
};

const PADRAO: Cta = {
  titulo: 'Pronto para tirar sua operação do improviso?',
  texto:
    'Em 30 minutos a gente faz um diagnóstico gratuito do seu negócio e mostra por onde começar — mesmo que você não nos contrate.',
};

export function ctaDoPost(category?: string | null): Cta {
  return (category && POR_CATEGORIA[category.trim()]) || PADRAO;
}
