import { Icon } from '@/components/ui/Icon';
import { config, whatsappUrl } from '@/lib/config';

export function Hero(): JSX.Element {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">{config.site.tagline}</span>
            <h1>
              Tecnologia que
              <br />
              <span className="strike">complica</span>{' '}
              <span className="accent">descomplica</span>
              <br />o seu dia-a-dia.
            </h1>
            <p className="hero-lede">
              Desenvolvimento, automações e suporte para pequenas e médias
              empresas que querem parar de perder tempo com sistema lento,
              planilha manual e site quebrado.
            </p>
            <div className="hero-actions">
              <a
                href={whatsappUrl('Oi! Quero saber mais sobre a Reative Systems')}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.WhatsApp className="btn-icon" /> Conversar no WhatsApp
              </a>
              <a href="#agendar" className="btn btn-ghost">
                <Icon.Calendar className="btn-icon" /> Agendar reunião gratuita
              </a>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <div className="num">
                  &lt; 4<span>h</span>
                </div>
                <div className="label">
                  Tempo médio de primeira resposta em chamados
                </div>
              </div>
              <div className="hero-meta-item">
                <div className="num">
                  30<span>d</span>
                </div>
                <div className="label">
                  Garantia de satisfação ou seu dinheiro de volta
                </div>
              </div>
              <div className="hero-meta-item">
                <div className="num">
                  0<span>%</span>
                </div>
                <div className="label">
                  Fidelidade obrigatória — cancele quando precisar
                </div>
              </div>
            </div>
          </div>

          <aside className="hero-side">
            <div className="hero-side-inner">
              <div className="hero-card-eyebrow">// começo gratuito</div>
              <h3>Diagnóstico inicial sem custo</h3>
              <p>
                Em 30 minutos, identificamos oportunidades de melhoria e mostramos como a tecnologia pode impulsionar o crescimento do seu negócio — mesmo que você não contrate.
              </p>
              <div className="hero-channels">
                <a href="#agendar" className="hero-channel">
                  <div className="hero-channel-icon">
                    <Icon.Calendar style={{ color: 'var(--brand)' }} />
                  </div>
                  <div className="hero-channel-text">
                    <strong>Agendar 30 min</strong>
                    <span>Quarta a sexta · video-call</span>
                  </div>
                  <div className="hero-channel-arrow">→</div>
                </a>
                <a
                  href={whatsappUrl()}
                  className="hero-channel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hero-channel-icon">
                    <Icon.WhatsApp
                      style={{
                        color: 'var(--brand)',
                        fill: 'var(--brand)',
                      }}
                    />
                  </div>
                  <div className="hero-channel-text">
                    <strong>Mandar áudio</strong>
                    <span>Resposta em até 4h úteis</span>
                  </div>
                  <div className="hero-channel-arrow">→</div>
                </a>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hero-channel"
                >
                  <div className="hero-channel-icon">
                    <Icon.Mail style={{ color: 'var(--brand)' }} />
                  </div>
                  <div className="hero-channel-text">
                    <strong>Mandar e-mail</strong>
                    <span>{config.contact.email}</span>
                  </div>
                  <div className="hero-channel-arrow">→</div>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
