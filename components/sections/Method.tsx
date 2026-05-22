import { methodSteps } from '@/lib/content/home';

export function Method(): JSX.Element {
  return (
    <section className="method-section" id="metodo">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Como trabalhamos</span>
            <h2>Sem surpresa, sem caixa-preta. Só método.</h2>
          </div>
          <p className="lede">
            Empresa de tecnologia tem fama de complicar e cobrar caro. A gente
            trabalha do outro jeito: tudo escrito, tudo combinado, e você
            acompanha o avanço todo dia.
          </p>
        </div>
        <div className="method-grid">
          {methodSteps.map((step) => (
            <div className="method-step" key={step.num}>
              <div className="method-num">PASSO {step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="method-duration">⏱ {step.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
