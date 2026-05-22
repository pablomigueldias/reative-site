import { companyValues } from '@/lib/content/home';

export function About(): JSX.Element {
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="eyebrow">Quem somos</span>
            <h2>
              Uma equipe próxima, estratégica e focada em soluções digitais eficientes.
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
                A <strong>Reative Systems</strong> nasceu ao perceber que muitas empresas tinham potencial para crescer, 
                mas ainda enfrentavam dificuldades por falta de tempo, 
                orientação e <strong>soluções acessíveis</strong> para evoluir digitalmente.
              </p>
              <div className="about-pull">
                "Nosso trabalho não é entregar tecnologia. É devolver tempo pro
                dono do negócio voltar a olhar pra frente."
              </div>
              <p>
                Hoje somos uma equipe <strong>especializada em desenvolvimento</strong>, em automação e infraestrutura, 
                com experiência em projetos digitais para empresas de diferentes segmentos.
                Atendemos negócios de <strong>qualquer lugar do Brasil</strong>, de forma remota, 
                criando soluções modernas, eficientes e alinhadas às necessidades de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
