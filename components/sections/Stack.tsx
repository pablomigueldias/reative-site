import { stackItems } from '@/lib/content/home';

export function Stack(): JSX.Element {
  return (
    <section className="stack-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Stack moderna, escolha consciente</span>
            <h2>A gente usa ferramenta porque resolve, não porque é nova.</h2>
          </div>
          <p className="lede">
            Tudo o que entregamos roda em tecnologias maduras, com comunidade
            ativa e documentação aberta. Sem invenção que vira problema seu daqui
            um ano.
          </p>
        </div>
        <div className="stack-grid">
          {stackItems.map((item, idx) => (
            <div className="stack-item" key={`${item.category}-${item.name}-${idx}`}>
              <div className="stack-cat">{item.category}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
