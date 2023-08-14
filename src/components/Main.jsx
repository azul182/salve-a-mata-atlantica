import "../assets/styles/components/Main.scss";
import ImgContainer from "./ImgContainer";

const imgs1 = [
  { name: "satelite", src: "/src/assets/imgs/satelite1.jpg" },
  { name: "floresta", src: "/src/assets/imgs/floresta.jpeg" },
];

const imgs2 = [
  { name: "queimada", src: "/src/assets/imgs/queimada.jpg" },
  { name: "desmatamento", src: "/src/assets/imgs/desmatamento.jpg" },
];

const Main = () => {
  return (
    <main className="main">
      <section>
        <small>01 - About</small>
        <h2>Sobre Nós</h2>
        <p>
          A ONG Salve a Mata Atlântica é dedicada à proteção e preservação da
          biodiversidade única e frágil da Mata Atlântica. Nossa missão é
          combater o desmatamento e as queimadas por meio do uso avançado de
          tecnologia de mapeamento via satélite, garantindo um futuro
          sustentável para essa região tão importante.
        </p>
        <ImgContainer imgs={imgs1} />

        <h2>Nossa Tecnologia</h2>
        <p className="bottom-line">
          Utilizamos tecnologia de mapeamento via satélite de última geração
          para monitorar em tempo real as áreas da Mata Atlântica. Isso nos
          permite detectar rapidamente atividades suspeitas de desmatamento e
          focos de queimadas, possibilitando uma resposta ágil e eficaz para
          prevenir danos irreparáveis ao ecossistema.
        </p>
      </section>
      <section>
        <small className="objective-text">02 - Objectives</small>
        <h2>1.Prevenir Queimadas</h2>
        <p>
          Através do monitoramento constante, conseguimos identificar focos de
          incêndio em estágios iniciais, permitindo uma ação rápida de combate
          às queimadas e evitando sua propagação descontrolada.
        </p>
        <ImgContainer imgs={imgs2} />
        <h2>Combater o Desmatamento</h2>
        <p>
          Monitoramos as áreas de floresta para detectar atividades de
          desmatamento ilegal. Ao identificar essas ameaças, trabalhamos em
          conjunto com as autoridades competentes para interromper tais
          atividades e aplicar as medidas legais cabíveis.
        </p>
      </section>
    </main>
  );
};

export default Main;
