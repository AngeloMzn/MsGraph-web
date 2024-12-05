'use client';
import "./globals.css";
import Tittle from "./components/ui/tittle";
import ImageArticleLeft from "./components/ui/imageArticleLeft";
import ImageArticleRight from "./components/ui/imageArticleRight";


export default function Home() {
  return (
    <>
      <Tittle>Bem-vindo(a) ao MSgraph veja aqui dados da Pesquisa Socioassistencial de Mato Grosso do Sul</Tittle>
      <ImageArticleLeft src="/images/graph1.jpg">
        Esta página foi criada para facilitar o acesso aos dados da Pesquisa Socioassistencial realizada em todo o Estado de Mato Grosso do Sul. Aqui, você encontrará informações detalhadas sobre a realidade socioeconômica das famílias em situação de vulnerabilidade, coletadas com o objetivo de aprimorar as políticas públicas e garantir que os grupos mais necessitados sejam adequadamente atendidos.
      </ImageArticleLeft>
      <ImageArticleRight src="/images/graph2.jpg">Navegue pelos dados e descubra insights que podem ajudar na formulação de estratégias sociais mais eficazes. A plataforma foi projetada para oferecer uma experiência intuitiva, com visualizações de dados que permitem explorar as informações de maneira clara e acessível.
      </ImageArticleRight>
    </>
  );
}

