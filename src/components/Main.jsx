import "../assets/styles/components/Main.scss";
import ImgContainer from "./ImgContainer";
import Form from "./Form";

const imgs1 = [
  { name: "Satélite", src: "/satelite1.jpg" },
  { name: "Floresta", src: "/floresta.jpeg" },
];

const imgs2 = [
  { name: "Queimada", src: "/queimada.jpg" },
  { name: "Desmatamento", src: "/desmatamento.jpg" },
];

const imgs3 = [
  { name: "Onça", src: "/onca.jpg" },
  { name: "Floresta", src: "/coracao.jpg" },
];

const Main = () => {
  return (
    <main className="main">
      <section id="about">
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
      <section id="objectives">
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
      <section id="help">
        <small className="objective-text">03 - How to Help?</small>
        <h2>Doações</h2>
        <p>
          {" "}
          Seja um parceiro na luta pela preservação da Mata Atlântica. Suas
          doações nos permitem investir em tecnologia, treinamento de equipes e
          ações de conscientização para ampliar nosso impacto.
        </p>
        <h2>Voluntariado</h2>
        <p>
          Junte-se a nós como voluntário! Participe das nossas campanhas de
          reflorestamento, ações de conscientização e atividades educativas em
          comunidades locais.
        </p>
        <ImgContainer imgs={imgs3} />
        <h2>Compartilhe Conhecimento</h2>
        <p>
          Educação é a chave para a mudança. Compartilhe nosso site e
          informações sobre a importância da preservação da Mata Atlântica nas
          redes sociais para ampliar nossa mensagem.
        </p>
      </section>
      <div className="secundary-bg">
        <section id="doe">
          <small className="objective-text">04 - Contact</small>
          <h2>Contato</h2>
          <p>
            Estamos aqui para ouvir você! Se você tiver perguntas, sugestões ou
            quiser saber mais sobre nossa organização, entre em contato conosco
            através do formulário de contato em nosso site ou pelos meios de
            comunicação listados.
          </p>
          <Form />
        </section>
      </div>
    </main>
  );
};

export default Main;
