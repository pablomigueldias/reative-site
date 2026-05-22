import { companyValues } from '@/lib/content/home';

export function About(): JSX.Element {
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="eyebrow">Quem somos</span>
            <h2>
              Um time pequeno, próximo, e que sabe onde aperta o sapato da PME.
            </h2>
            <div className="about-values">
              {companyValues.map((value) => (
                <div className="value" key={value.num}>
                  <div className="value-num">{value.num}</div>
                  <div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-side">
            <div className="about-side-inner">
              <span className="hero-card-eyebrow">// nossa origem</span>
              <h3>Reative quer dizer reativar.</h3>
              <p>
                A gente nasceu olhando pro lado e vendo dezenas de pequenos
                negócios{' '}
                <strong>parados no tempo</strong> — não por falta de vontade,
                mas por falta de tempo, de quem explique, e de quem cobre justo.
              </p>
              <div className="about-pull">
                "Nosso trabalho não é entregar tecnologia. É devolver tempo pro
                dono do negócio voltar a olhar pra frente."
              </div>
              <p>
                Hoje somos <strong>uma equipe enxuta</strong> de desenvolvedores
                e analistas com experiência em projetos de e-commerce, automação
                e infraestrutura. Atendemos PMEs de qualquer cidade — remoto ou
                presencial em Curitiba e região.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
