import Link from 'next/link';
import { Icon, RenderIcon } from '@/components/ui/Icon';
import { homeServiceCards } from '@/lib/content/services';

export function Services(): JSX.Element {
  const featured = homeServiceCards.find((s) => s.featured);
  const others = homeServiceCards.filter((s) => !s.featured);

  return (
    <section id="servicos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">O que fazemos</span>
            <h2>Quatro frentes pra desenrolar a tecnologia do seu negócio.</h2>
          </div>
          <p className="lede">
            Trabalhamos como um time de tecnologia terceirizado: você fala o
            problema, a gente entrega a solução — desde o site novo até a
            planilha que ninguém aguenta mais preencher.
          </p>
        </div>

        <div className="services-grid">
          {featured && (
            <Link
              className="service featured"
              href={featured.href}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <div>
                <div className="service-num">// {featured.num} · destaque</div>
                <div className="service-icon" style={{ marginTop: 16 }}>
                  <RenderIcon name={featured.iconKey} />
                </div>
                <h3 style={{ marginTop: 20 }}>{featured.title}</h3>
                <p style={{ marginTop: 12 }}>{featured.description}</p>
                <div className="service-tags" style={{ marginTop: 24 }}>
                  {featured.tags.map((tag) => (
                    <span className="service-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="featured-visual">
                <pre
                  style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.7,
                    color: 'var(--on-dark-soft)',
                  }}
                >
{`▸ webhook  formulário do site
   └─ filtro  é cliente novo?
       ├─ sim → criar lead no CRM
       │       └─ enviar boas-vindas (WhatsApp)
       │           └─ avisar comercial no Slack
       └─ não → atualizar histórico
               └─ etiquetar conversa
─────────────────────────────────
✓ economiza  ~6h por semana
✓ sem erro humano
✓ funciona 24/7`}
                </pre>
              </div>
            </Link>
          )}

          {others.map((service) => (
            <Link
              key={service.num}
              className="service"
              href={service.href}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <div className="service-arrow">
                <Icon.ArrowUpRight width={20} height={20} />
              </div>
              <div className="service-num">// {service.num}</div>
              <div className="service-icon">
                <RenderIcon name={service.iconKey} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span className="service-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
