import ExtendedArticle from "../components/ui/extendedArticle";
import ImageCenter from "../components/ui/imageCenter";
import Tittle from "../components/ui/tittle";

export default function oboutUs() {
    return (<>
        <Tittle>Sobre a Pesquisa Socioassistencial em Mato Grosso do Sul</Tittle>
        <ExtendedArticle>
            Com o objetivo de aprimorar as políticas sociais e suprir a ausência de uma base de dados completa e atualizada que refletisse a realidade socioeconômica da população mais vulnerável, o Governo do Estado de Mato Grosso do Sul, por meio da Secretaria de Estado de Assistência Social e dos Direitos Humanos (SEAD), com o apoio da Secretaria Executiva de Gestão Estratégica e Municipalismo (SEGEM/SEGOV), realizou uma ampla Pesquisa Socioassistencial.
            Essa pesquisa cobriu todo o território sul-mato-grossense, permitindo a construção de um diagnóstico socioassistencial detalhado. Por meio dos resultados da pesquisa e do cruzamento com outros bancos de dados, como o CadÚnico do Governo Federal e o Programa Mais Social, foi possível identificar de forma mais precisa as famílias em situação de vulnerabilidade que, por diversas razões, ainda não estão plenamente atendidas pelas políticas públicas.
            O processo de seleção das residências a serem entrevistadas utilizou uma amostra aleatória simples, assegurando que todas as moradias cadastradas nos bancos de dados da Secretaria de Estado de Saúde (SES) e da Empresa de Saneamento de Mato Grosso do Sul (SANESUL) tivessem a mesma probabilidade de participação. Ao todo, 25.850 domicílios foram entrevistados, garantindo uma margem de erro de 1% para o Estado como um todo e de 5% a 7% para os municípios.

        </ExtendedArticle>
        <ImageCenter src={"/images/graph1.jpg"} alt={''} width={500} height={500}/>
        <ExtendedArticle>Os dados coletados durante a pesquisa estão disponíveis para consulta e análise por meio desta plataforma. Eles foram organizados de forma a facilitar o acesso e a visualização, com o intuito de apoiar a formulação de políticas públicas, pesquisas acadêmicas e ações voltadas à melhoria das condições de vida das famílias em situação de vulnerabilidade. O usuário poderá explorar as informações por município, indicadores socioeconômicos e outros recortes relevantes, possibilitando uma visão abrangente da realidade socioassistencial de Mato Grosso do Sul.
            A pesquisa foi conduzida com o mais alto rigor metodológico, e a disponibilização dos dados busca promover maior transparência e acessibilidade, permitindo que gestores públicos, pesquisadores e demais interessados possam utilizar essas informações para criar estratégias mais eficazes de intervenção social.
        </ExtendedArticle>
    </>);
}