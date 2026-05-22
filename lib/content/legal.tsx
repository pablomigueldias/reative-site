import type { LegalContent } from '@/lib/types';

/**
 * Conteúdo das páginas legais.
 * Mantido em TSX porque tem links e formatação inline; quando vier de CMS,
 * vira Markdown e a gente faz parse com react-markdown.
 */
export const legalContent: Record<'privacidade' | 'termos', LegalContent> = {
  privacidade: {
    title: 'Política de Privacidade',
    lede: 'Como a Reative Systems coleta, usa e protege os dados que você compartilha com a gente.',
    lastUpdated: 'Última atualização: 1º de janeiro de 2026',
    sections: [
      {
        id: 'intro',
        heading: 'Quem somos e o que fazemos com seus dados',
        body: (
          <>
            <p>
              A <strong>Reative Systems</strong> ("nós", "nosso") é uma empresa
              brasileira de tecnologia que presta serviços de desenvolvimento,
              automação, suporte e consultoria de TI para pequenas e médias
              empresas.
            </p>
            <p>
              Esta política descreve, de forma clara,{' '}
              <strong>
                quais dados coletamos, por que coletamos, como usamos e por
                quanto tempo guardamos
              </strong>
              . Seguimos a Lei Geral de Proteção de Dados (LGPD — Lei
              13.709/2018).
            </p>
            <p>
              Se algo aqui não estiver claro, escreve pra{' '}
              <a href="mailto:privacidade@reativesystems.com.br">
                privacidade@reativesystems.com.br
              </a>{' '}
              que a gente explica em linguagem de gente.
            </p>
          </>
        ),
      },
      {
        id: 'dados',
        heading: 'Quais dados a gente coleta',
        body: (
          <>
            <h3>Quando você navega no site</h3>
            <ul>
              <li>
                Dados técnicos: endereço IP, tipo de navegador, dispositivo,
                páginas visitadas
              </li>
              <li>
                Cookies de sessão e analytics (Google Analytics, agregado e
                anônimo)
              </li>
              <li>Pixel de remarketing (Meta), só se você consentir no banner</li>
            </ul>
            <h3>Quando você preenche formulário ou manda WhatsApp</h3>
            <ul>
              <li>Nome, e-mail, telefone, empresa</li>
              <li>Mensagem que você nos enviou e contexto da conversa</li>
              <li>Histórico de atendimento, se virar cliente</li>
            </ul>
            <h3>Quando vira cliente</h3>
            <ul>
              <li>
                Dados de faturamento (CNPJ, endereço, dados bancários quando
                aplicável)
              </li>
              <li>
                Acesso a sistemas e ambientes que você nos der pra prestar o
                serviço
              </li>
              <li>Conteúdo de reuniões, e-mails e canais de comunicação combinados</li>
            </ul>
          </>
        ),
      },
      {
        id: 'uso',
        heading: 'Pra que usamos os dados',
        body: (
          <>
            <ul>
              <li>
                <strong>Atendimento:</strong> responder sua mensagem, agendar
                reunião, enviar proposta
              </li>
              <li>
                <strong>Execução do serviço:</strong> tudo combinado em
                contrato, e nada além
              </li>
              <li>
                <strong>Faturamento:</strong> emitir nota fiscal e cobrar
                conforme combinado
              </li>
              <li>
                <strong>Comunicação operacional:</strong> avisar sobre
                andamento, manutenções, mudanças no serviço
              </li>
              <li>
                <strong>Marketing (só com consentimento):</strong> newsletter
                mensal, conteúdo do blog. Você pode descadastrar a qualquer hora
                num clique
              </li>
              <li>
                <strong>Análise interna:</strong> entender o que funciona no
                site e como melhorar (sempre agregado, nunca individualizado)
              </li>
            </ul>
            <p>
              A gente <strong>nunca vende seus dados</strong> pra ninguém. Nunca.
            </p>
          </>
        ),
      },
      {
        id: 'compartilhamento',
        heading: 'Com quem compartilhamos',
        body: (
          <>
            <p>
              Compartilhamos dados{' '}
              <strong>
                apenas com fornecedores que precisamos pra prestar o serviço
              </strong>
              , e cada um com contrato de confidencialidade:
            </p>
            <ul>
              <li>Provedores de hospedagem e nuvem (AWS, Vercel, Cloudflare)</li>
              <li>Plataforma de e-mail (Google Workspace)</li>
              <li>
                Plataforma de pagamento e emissão fiscal (Stripe, Pagar.me,
                sistema fiscal)
              </li>
              <li>Ferramentas de comunicação (WhatsApp Business, Slack)</li>
            </ul>
            <p>
              Em nenhuma hipótese repassamos seus dados pra terceiros que não
              sejam essenciais à operação. Se uma autoridade legal exigir, te
              avisamos antes — exceto quando a lei proibir.
            </p>
          </>
        ),
      },
      {
        id: 'tempo',
        heading: 'Por quanto tempo guardamos',
        body: (
          <ul>
            <li>
              <strong>Dados de navegação anônimos:</strong> até 26 meses (padrão
              Google Analytics)
            </li>
            <li>
              <strong>Dados de contato (sem virar cliente):</strong> 12 meses,
              depois removidos automaticamente
            </li>
            <li>
              <strong>Dados de cliente ativo:</strong> enquanto durar o contrato
              + 5 anos depois (exigência fiscal e contábil)
            </li>
            <li>
              <strong>Dados de marketing (newsletter):</strong> até você
              descadastrar
            </li>
          </ul>
        ),
      },
      {
        id: 'direitos',
        heading: 'Os seus direitos (LGPD)',
        body: (
          <>
            <p>Você pode, a qualquer momento e sem custo:</p>
            <ul>
              <li>Pedir uma cópia de tudo o que temos sobre você</li>
              <li>Corrigir dados incorretos</li>
              <li>
                Pedir a exclusão dos dados (limitada ao que a lei nos obriga
                manter)
              </li>
              <li>Cancelar o consentimento de marketing</li>
              <li>Saber com quem compartilhamos seus dados</li>
              <li>
                Reclamar à ANPD (Autoridade Nacional de Proteção de Dados) se
                sentir lesado
              </li>
            </ul>
            <p>
              Pra exercer qualquer direito, escreva pra{' '}
              <a href="mailto:privacidade@reativesystems.com.br">
                privacidade@reativesystems.com.br
              </a>
              . Resposta em até 15 dias.
            </p>
          </>
        ),
      },
      {
        id: 'seguranca',
        heading: 'Como a gente protege',
        body: (
          <ul>
            <li>Criptografia em trânsito (HTTPS) e em repouso onde aplicável</li>
            <li>Acesso por autenticação multifator nas ferramentas internas</li>
            <li>Princípio do menor privilégio — só quem precisa, acessa</li>
            <li>Backup diário e plano de continuidade documentado</li>
            <li>Revisão trimestral das permissões e fornecedores</li>
          </ul>
        ),
      },
      {
        id: 'mudancas',
        heading: 'Se a gente mudar algo',
        body: (
          <p>
            Se essa política mudar, a gente avisa por e-mail (se for cliente) e
            destaca o "última atualização" no topo desta página. Mudanças
            significativas exigem novo consentimento.
          </p>
        ),
      },
    ],
  },

  termos: {
    title: 'Termos de Serviço',
    lede: 'As regras claras do contrato. Combinado é combinado — e aqui está combinado.',
    lastUpdated: 'Última atualização: 1º de janeiro de 2026',
    sections: [
      {
        id: 'intro',
        heading: 'Aceitação destes termos',
        body: (
          <>
            <p>
              Ao contratar qualquer serviço da{' '}
              <strong>Reative Systems</strong>, você concorda com os termos
              abaixo. Esses termos formam a base do contrato — em projetos
              específicos, assinamos um contrato adicional com escopo,
              cronograma e valores definidos.
            </p>
            <p>
              Se algo aqui não estiver claro, pergunte antes de assinar. A
              gente prefere ajustar o contrato a ter mal-entendido depois.
            </p>
          </>
        ),
      },
      {
        id: 'servicos',
        heading: 'O que entregamos',
        body: (
          <>
            <p>Atualmente oferecemos:</p>
            <ul>
              <li>Desenvolvimento de sites e sistemas web</li>
              <li>Automação de processos e integrações entre sistemas</li>
              <li>Suporte de TI mensal (helpdesk + manutenção)</li>
              <li>Consultoria em tecnologia (diagnóstico e roadmap)</li>
            </ul>
            <p>
              Cada serviço tem escopo definido em proposta escrita. O que estiver
              fora do escopo é negociado separadamente.
            </p>
          </>
        ),
      },
      {
        id: 'preco',
        heading: 'Preço e pagamento',
        body: (
          <ul>
            <li>
              <strong>Planos mensais:</strong> cobrança recorrente até dia 5 do
              mês, mediante boleto, Pix ou cartão. Atraso superior a 10 dias
              corridos suspende o serviço (após aviso por e-mail).
            </li>
            <li>
              <strong>Projetos sob medida:</strong> cronograma de pagamento por
              entrega, normalmente 30% no início, 40% no meio, 30% na entrega
              final.
            </li>
            <li>
              <strong>Reajuste:</strong> uma vez por ano, em data definida no
              contrato, indexado pelo IPCA ou outro indicador combinado.
            </li>
            <li>
              <strong>Nota fiscal:</strong> emitimos NF-e/NFS-e em todos os
              serviços, em até 5 dias úteis após o pagamento.
            </li>
          </ul>
        ),
      },
      {
        id: 'prazo',
        heading: 'Prazos e cancelamento',
        body: (
          <>
            <ul>
              <li>
                <strong>Sem fidelidade obrigatória</strong> nos planos mensais.
                Cancele com 30 dias de aviso antecipado.
              </li>
              <li>
                <strong>Projetos sob medida</strong> seguem cronograma do
                contrato. Cancelamento unilateral fora do contrato pode gerar
                multa, definida caso a caso.
              </li>
              <li>
                <strong>Pausa do serviço</strong> pode ser solicitada por até 60
                dias mediante aviso prévio. Após esse prazo, contrato é
                automaticamente encerrado.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'propriedade',
        heading: 'Propriedade do que entregamos',
        body: (
          <>
            <p>
              <strong>O código é seu desde o dia 1.</strong> Mantemos repositório
              no seu GitHub (ou no nosso, com transferência sob solicitação).
              Senhas, domínios e contas ficam em nome da sua empresa.
            </p>
            <p>
              Bibliotecas open source seguem as licenças dos respectivos
              projetos. Ferramentas pagas (Make, n8n self-hosted, etc.) ficam
              na conta da sua empresa, mesmo que a gente configure.
            </p>
            <p>
              Não usamos seu código ou seus dados em projetos de terceiros, nem
              treinamos modelos de IA com eles.
            </p>
          </>
        ),
      },
      {
        id: 'responsabilidades',
        heading: 'Limites de responsabilidade',
        body: (
          <>
            <p>
              A Reative Systems é responsável pelo que está escrito no contrato
              do projeto/serviço. Em particular:
            </p>
            <ul>
              <li>
                Não nos responsabilizamos por indisponibilidade de fornecedores
                terceiros (AWS, Vercel, Cloudflare, etc.), apesar de monitorá-los
                e ter plano B onde possível.
              </li>
              <li>
                Não nos responsabilizamos por uso indevido feito por funcionários
                da sua empresa após entrega/treinamento.
              </li>
              <li>
                Nossa responsabilidade financeira por danos é limitada ao valor
                pago pelos serviços nos últimos 12 meses.
              </li>
            </ul>
            <p>
              <strong>Excluem-se desses limites:</strong> dano causado por dolo
              ou má-fé da nossa parte. Aí respondemos integralmente.
            </p>
          </>
        ),
      },
      {
        id: 'garantia',
        heading: 'Garantia de satisfação',
        body: (
          <>
            <p>Todos os projetos têm 30 dias de garantia. Significa que:</p>
            <ul>
              <li>
                Se algo entregue não funcionar conforme o escrito, refazemos sem
                custo.
              </li>
              <li>
                Se mesmo após refazer não atender, devolvemos o pagamento dos
                itens não cumpridos.
              </li>
              <li>
                Garantia não cobre mudança de escopo posterior à entrega — isso
                é projeto novo.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'foro',
        heading: 'Foro e legislação',
        body: (
          <p>
            Estes termos seguem a legislação brasileira. Eventual disputa será
            resolvida preferencialmente por mediação. Persistindo o impasse,
            fica eleito o foro da comarca da sede da Reative Systems —
            renunciando-se a qualquer outro, por mais privilegiado que seja.
          </p>
        ),
      },
    ],
  },
};
