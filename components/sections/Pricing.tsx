'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { pricingPlans } from '@/lib/content/home';

export function Pricing(): JSX.Element {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="planos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Planos e preços</span>
            <h2>Preço fixo. Sem surpresa na fatura.</h2>
          </div>
          <div>
            <p className="lede">
              Mensalidade fechada, sem fidelidade obrigatória, com escopo bem
              definido. Se a sua demanda crescer, a gente conversa antes de
              cobrar.
            </p>
            <div className="pricing-toggle" role="tablist">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={!annual ? 'active' : ''}
                aria-pressed={!annual}
              >
                Mensal
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={annual ? 'active' : ''}
                aria-pressed={annual}
              >
                Anual <span className="save">−20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => {
            const displayPrice = plan.price
              ? annual
                ? plan.price.annual
                : plan.price.monthly
              : null;

            return (
              <div
                className={`plan ${plan.featured ? 'featured' : ''}`}
                key={plan.name}
              >
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <div>
                  <div className="plan-name">{plan.name}</div>
                  <h3 style={{ marginTop: 8 }}>{plan.title}</h3>
                </div>
                <p className="plan-desc">{plan.description}</p>
                <div className="plan-price">
                  {displayPrice === null ? (
                    <span className="custom">A combinar</span>
                  ) : (
                    <>
                      <span className="currency">R$</span>
                      <span className="amount">
                        {displayPrice.toLocaleString('pt-BR')}
                      </span>
                      <span className="period">
                        /mês{annual ? ' · pago anual' : ''}
                      </span>
                    </>
                  )}
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Icon.Check /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="plan-cta">
                  <a
                    href="#contato"
                    className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    {plan.cta} <Icon.Arrow className="btn-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
