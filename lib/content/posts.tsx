import type { ReactNode } from 'react';
import type { BlogPost } from '@/lib/types';

/**
 * Conteúdo completo dos posts do blog.
 * Por enquanto, só o primeiro tem o corpo escrito — os outros são placeholders
 * que vão se preencher quando você escrever ou conectar um CMS (Sanity, Notion API, etc.).
 */

export interface BlogPostFull extends BlogPost {
  /** Sumário (TOC) — links âncora pra navegação interna */
  toc: { id: string; label: string }[];
  /** Corpo do artigo */
  body: ReactNode;
}

const planilhaSistema: BlogPostFull = {
  slug: 'planilha-virou-sistema',
  category: 'Automação',
  coverClass: 'post-cover-1',
  date: '12 Mai 2026',
  readTime: '6 min',
  title: '5 sinais de que a sua planilha já virou sistema (e ninguém percebeu)',
  excerpt:
    'Toda planilha começa simples. O problema é quando ela vira o coração da operação, tem 18 abas, ninguém entende as fórmulas — e o autor pediu férias.',
  toc: [
    { id: 'sinal-1', label: '1. Mais de uma pessoa precisa editar ao mesmo tempo' },
    { id: 'sinal-2', label: '2. Tem fórmula que ninguém mais entende' },
    { id: 'sinal-3', label: '3. Você manda print pra confirmar valor' },
    { id: 'sinal-4', label: '4. Tem cópia "de backup" toda semana' },
    { id: 'sinal-5', label: '5. Travou — e a operação parou' },
    { id: 'proximo-passo', label: 'O próximo passo' },
  ],
  body: (
    <>
      <p>
        Se você é dono de PME, é bem provável que tenha pelo menos uma planilha
        que <strong>ninguém pode mexer sem perguntar antes.</strong> Aquela que
        controla o estoque, ou os pedidos, ou a comissão da equipe comercial.
        Aquela que se quebrar num sábado de manhã, atrasa a entrega de segunda.
      </p>
      <p>
        Planilha é uma ferramenta incrível pra começar. O problema é que ela
        cresce sem avisar — e quando você percebe, ela <em>já virou um sistema</em>.
        Só que sem backup, sem controle de acesso, sem histórico de mudança e
        sem suporte.
      </p>
      <p>
        Este artigo é sobre os 5 sinais que indicam que chegou a hora de tirar o
        seu negócio do Excel. Se você marcar 3 ou mais, dá pra começar a conversa.
      </p>

      <h2 id="sinal-1">1. Mais de uma pessoa precisa editar ao mesmo tempo</h2>
      <p>
        "Fulana, fecha aí que eu preciso lançar o pedido." Se essa frase é
        frequente no seu dia, sua planilha{' '}
        <strong>já não é uma planilha</strong> — é um banco de dados mal-tratado.
      </p>
      <p>
        Mesmo no Google Sheets ou no Excel online, edição simultânea quebra
        fórmulas, sobrescreve linhas e gera "versões fantasma" que ninguém sabe
        qual é a verdadeira. Sistema de verdade resolve isso com transações —
        uma pessoa por vez salva, mas ninguém precisa esperar.
      </p>

      <div className="callout">
        <div className="callout-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
          >
            <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8z" />
          </svg>
        </div>
        <div>
          <strong>Sinal de alerta</strong>
          <p>
            Se você já perdeu pelo menos um pedido por causa de "duas pessoas
            mexeram ao mesmo tempo", você já pagou o preço de não ter sistema.
            Provavelmente várias vezes.
          </p>
        </div>
      </div>

      <h2 id="sinal-2">2. Tem fórmula que ninguém mais entende</h2>
      <p>
        A planilha foi construída pelo João, que saiu da empresa em 2023. Tem
        uma célula no canto direito que faz <code>=PROCV(SE(...))</code> em três
        abas, multiplica por uma constante chamada <code>FATOR_X</code>, e
        ninguém ousa mexer porque uma vez mexeram e o fechamento do mês quebrou.
      </p>
      <p>
        Isso é <strong>dívida técnica.</strong> Acontece com sistema também — mas
        em sistema bem feito, a regra fica documentada e auditável. Em planilha,
        a regra mora numa célula, sem teste, sem versionamento, sem dono.
      </p>
      <blockquote>
        "Toda fórmula complexa em planilha é uma bomba-relógio. Você não sabe
        quando explode — só sabe que vai explodir, e provavelmente no pior dia
        possível."
        <cite>— Dito popular do mundo de TI</cite>
      </blockquote>

      <h2 id="sinal-3">3. Você manda print pra confirmar valor</h2>
      <p>
        Sabe quando o vendedor pergunta "o desconto é 7% ou 10% pro cliente X?"
        e você abre a planilha, dá um print da célula e manda no WhatsApp dele?
      </p>
      <p>
        Isso significa que o{' '}
        <strong>dado certo está na sua cabeça ou no seu acesso</strong>, e a
        planilha é só um lembrete pra você. Em sistema, cada usuário vê o valor
        certo do lugar onde ele vai usar — e ninguém precisa parar o que está
        fazendo pra confirmar.
      </p>

      <div className="stat-grid">
        <div className="stat-card">
          <span className="num">~6h</span>
          <span className="lbl">
            Tempo médio por semana que um gestor de PME passa{' '}
            <strong>respondendo dúvida sobre dado</strong> que devia estar
            visível
          </span>
        </div>
        <div className="stat-card">
          <span className="num">23%</span>
          <span className="lbl">
            dos erros de cobrança em pequenos comércios vêm de{' '}
            <strong>cópia manual</strong> entre planilha e sistema fiscal
          </span>
        </div>
        <div className="stat-card">
          <span className="num">1 em 4</span>
          <span className="lbl">
            PMEs já <strong>perderam dado relevante</strong> por planilha
            corrompida ou apagada sem querer
          </span>
        </div>
      </div>

      <h2 id="sinal-4">4. Tem cópia "de backup" toda semana</h2>
      <p>
        <code>vendas_2026.xlsx</code>
        <br />
        <code>vendas_2026_backup.xlsx</code>
        <br />
        <code>vendas_2026_backup_NOVO.xlsx</code>
        <br />
        <code>vendas_2026_FINAL.xlsx</code>
        <br />
        <code>vendas_2026_FINAL_v2_NÃO_MEXER.xlsx</code>
      </p>
      <p>
        Se isso te lembra a sua pasta no Drive, você está fazendo backup manual
        porque <strong>não confia que a versão atual está protegida.</strong> E
        está certo de não confiar — planilha não tem rollback, não tem
        auditoria, não tem histórico confiável.
      </p>

      <h3>Por que backup manual não é backup</h3>
      <ul>
        <li>Você só tem o que copiou na hora — entre cópias, está descoberto</li>
        <li>
          Se você apagar uma linha errada e salvar, a cópia anterior não te ajuda
          se já é da semana passada
        </li>
        <li>
          Se a planilha corromper, você descobre na próxima vez que abrir — pode
          ser meses depois
        </li>
        <li>Ninguém testa o backup. Quando precisa, descobre que não funciona</li>
      </ul>

      <h2 id="sinal-5">5. Travou — e a operação parou</h2>
      <p>
        O sinal mais claro de todos: na semana passada, a planilha não abriu. Ou
        abriu com erro. Ou alguém apagou uma aba sem querer. E nesse intervalo,
        <strong> sua empresa não conseguiu trabalhar.</strong>
      </p>
      <p>
        Se a planilha tem esse poder, ela é infraestrutura crítica.
        Infraestrutura crítica precisa de monitoramento, redundância e um plano
        de recuperação. Tudo o que planilha não tem.
      </p>

      <hr />

      <h2 id="proximo-passo">Tá, e o próximo passo?</h2>
      <p>
        A boa notícia:{' '}
        <strong>
          tirar o negócio da planilha não significa contratar um sistema gigante
          de R$ 5 mil/mês.
        </strong>{' '}
        Na maioria dos casos, dá pra resolver com uma combinação enxuta de:
      </p>
      <ul>
        <li>
          Um banco de dados leve (Supabase, Airtable, ou até Google Sheets como
          API)
        </li>
        <li>Uma interface simples pra equipe lançar e consultar</li>
        <li>Automações pra reduzir o trabalho manual repetitivo</li>
        <li>Backup automatizado e controle de quem mexeu no quê</li>
      </ul>
      <p>
        O custo de fazer isso bem feito é bem menor do que o custo de continuar
        improvisando — e fica mais barato quanto antes começar.
      </p>
    </>
  ),
};

export const blogPostsFull: Record<string, BlogPostFull> = {
  [planilhaSistema.slug]: planilhaSistema,
};

export function getPostBySlug(slug: string): BlogPostFull | null {
  return blogPostsFull[slug] ?? null;
}

export function getAllPostSlugs(): string[] {
  return Object.keys(blogPostsFull);
}
