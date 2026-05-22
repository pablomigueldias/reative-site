import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { Method } from '@/components/sections/Method';
import { Icon, RenderIcon } from '@/components/ui/Icon';
import { whatsappUrl } from '@/lib/config';
import { renderAccented } from '@/lib/text';
import type { ServiceContent } from '@/lib/types';

interface ServicePageProps {
  service: ServiceContent;
}

/**
 * Página completa de um serviço. Recebe o conteúdo pronto e renderiza:
 * - Hero (título + lede + CTAs + sidebar com stats)
 * - Includes (o que está incluso)
 * - Casos (problema/solução/resultado)
 * - Method (reutilizado da home, mostra como trabalhamos)
 * - CTA final
 * - Footer
 */
export function ServicePage({ service }: ServicePageProps): JSX.Element {
  return (
    <>
      <Nav external />

      <main>
        <header className="svc-hero">
          <div className="wrap">
            <div className="svc-hero-grid">
              <div>
                <div className="svc-hero-icon">
                  <RenderIcon name={service.iconKey} />
                </div>
                <span className="eyebrow">{service.eyebrow}</span>
                <h1>{renderAccented(service.title)}</h1>
                <p
                  className="lede"
                  style={{
                    marginTop: 24,
                    fontSize: 'clamp(17px, 1.4vw, 20px)',
                  }}
                >
                  {service.lede}
                </p>
                <div className="hero-actions" style={{ marginTop: 32 }}>
                  <a
                    href={whatsappUrl(
                      `Oi! Quero saber mais sobre o serviço de ${service.shortName}`,
                    )}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon.WhatsApp className="btn-icon" /> Falar sobre esse serviço
                  </a>
                  <a href="/#agendar" className="btn btn-ghost">
                    <Icon.Calendar className="btn-icon" /> Agendar 30 min
                  </a>
                </div>
              </div>

              <aside className="svc-hero-side">
                <div
                  className="hero-card-eyebrow"
                  style={{ color: 'var(--brand)' }}
                >
                  // o que você ganha
                </div>
                <div className="svc-stats">
                  {service.stats.map((stat, i) => (
                    <div key={i}>
                      <span className="num">{stat.num}</span>
                      <span className="lbl">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <h4>Garantias do serviço</h4>
                <ul className="plan-features">
                  <li>
                    <Icon.Check /> 30 dias de garantia de satisfação
                  </li>
                  <li>
                    <Icon.Check /> Sem fidelidade obrigatória
                  </li>
                  <li>
                    <Icon.Check /> Código e dados sempre seus
                  </li>
                  <li>
                    <Icon.Check /> Diagnóstico inicial gratuito
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">O que está incluso</span>
                <h2>O que entregamos quando você fecha esse serviço.</h2>
              </div>
              <p className="lede">
                Tudo escrito em contrato, escopo definido antes de começar, e
                nada de "ah, isso é à parte" no meio do projeto. Combinado é
                combinado.
              </p>
            </div>
            <div className="svc-includes">
              {service.includes.map((item) => (
                <div className="svc-include" key={item.num}>
                  <span className="svc-include-num">// {item.num}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="svc-cases-section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Exemplos do mundo real</span>
                <h2>Tipo de problema que a gente resolve.</h2>
              </div>
              <p className="lede">
                Casos representativos do que tem aparecido no nosso WhatsApp. Se
                algum desses parece com o que você vive, é provável que a gente
                consiga te ajudar.
              </p>
            </div>
            <div className="svc-cases">
              {service.cases.map((c, i) => (
                <div className="svc-case" key={i}>
                  <span className="svc-case-tag">{c.tag}</span>
                  <h4>{c.title}</h4>
                  <div className="svc-case-divider">// problema</div>
                  <p className="svc-case-problem">{c.problem}</p>
                  <div className="svc-case-divider">// solução</div>
                  <p className="svc-case-solution">{c.solution}</p>
                  <div className="svc-case-result">
                    <Icon.Zap
                      style={{
                        width: 18,
                        height: 18,
                        color: 'var(--brand)',
                      }}
                    />
                    {renderAccented(c.result)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Method />

        <section className="svc-cta">
          <div className="wrap">
            <div className="svc-cta-card">
              <div>
                <span className="eyebrow">Próximo passo</span>
                <h2 style={{ marginTop: 16 }}>
                  Bora descobrir se esse serviço resolve o seu caso?
                </h2>
                <p className="lede" style={{ marginTop: 16 }}>
                  Em 30 minutos, sem custo, a gente entende o seu cenário e
                  mostra se faz sentido seguir. Você sai da conversa com uma
                  direção — contratando ou não.
                </p>
              </div>
              <div className="actions">
                <a
                  href={whatsappUrl(
                    `Oi! Quero saber mais sobre o serviço de ${service.shortName}`,
                  )}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.WhatsApp className="btn-icon" /> Conversar no WhatsApp
                </a>
                <a href="/#agendar" className="btn btn-ghost">
                  <Icon.Calendar className="btn-icon" /> Agendar reunião gratuita
                </a>
                <a href="/#servicos" className="btn btn-ghost">
                  Ver outros serviços <Icon.Arrow className="btn-icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
