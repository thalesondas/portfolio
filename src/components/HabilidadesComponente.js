import { useEffect } from "react"
import { Container, Image } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { setDescricao, setTitulo } from "../redux/reducer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Html from '../images/html.svg'
import Css from '../images/css.svg'
import JavaScript from '../images/javascript.svg'
import ReactJS from '../images/reactjs.svg'
import Bootstrap from '../images/bootstrap.svg'
import PostgreSql from '../images/postgresql.svg'
import MongoDB from '../images/mongodb.svg'
import Git from '../images/git.svg'
import Ingles from '../images/ingles.svg'
import Python from '../images/python.svg'
import PowerBI from '../images/powerbi.svg'
import Excel from '../images/excel.svg'
import '../assets/HabilidadesComponente.css'

const HabilidadesComponente = (props) => {

    useEffect(() => {
        AOS.init();
    }, [])

    const dispatch = useDispatch();

    let habilidade;
    let descricao;
    let titulo;

    if(props.habilidade === 'html'){
        habilidade = Html
        titulo = 'HTML'
        descricao = 'HTML é a linguagem base para a criação de páginas da web. É uma linguagem de marcação que define a estrutura e o conteúdo de um site, como títulos, parágrafos, imagens, links e outros elementos.'
    } else if(props.habilidade === 'css'){
        habilidade = Css
        titulo = 'CSS'
        descricao = 'CSS é uma linguagem de estilo que define a aparência de páginas da web. Ela complementa o HTML, que define a estrutura e o conteúdo da página, fornecendo controle sobre a apresentação visual, como cores, fontes, layout, posicionamento e outros aspectos estéticos.'
    } else if(props.habilidade === 'javascript'){
        habilidade = JavaScript
        titulo = 'JavaScript'
        descricao = 'JavaScript é uma linguagem de programação que adiciona interatividade e funcionalidade avançada às páginas da web. Ela complementa o HTML e CSS, permitindo criar sites dinâmicos, responsivos e interativos com o usuário.'
    } else if(props.habilidade === 'reactjs'){
        habilidade = ReactJS
        titulo = 'ReactJS'
        descricao = 'ReactJS é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook, para a construção de interfaces de usuário (UI). Ele é amplamente utilizado para criar aplicações web dinâmicas e de alta performance. React adota uma abordagem baseada em componentes, onde a interface do usuário é dividida em pequenos blocos reutilizáveis, cada um com sua própria lógica e estado.'
    } else if(props.habilidade === 'bootstrap'){
        habilidade = Bootstrap
        titulo = 'Bootstrap'
        descricao = 'Bootstrap é um framework front-end de código aberto, desenvolvido pelo Twitter, que facilita a criação de interfaces web responsivas e estilizadas. Ele fornece uma coleção de componentes pré-construídos, como botões, formulários, barras de navegação, entre outros, além de um sistema de grid responsivo e classes CSS para estilização rápida e consistente.'
    } else if(props.habilidade === 'postgresql'){
        habilidade = PostgreSql
        titulo = 'PostgreSQL'
        descricao = 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional (SGBD) de código aberto e multiplataforma, conhecido por sua confiabilidade, robustez e recursos avançados. Ele é uma das principais opções para empresas e organizações que exigem um banco de dados poderoso, seguro e escalável.'
    } else if(props.habilidade === 'mongodb'){
        habilidade = MongoDB
        titulo = 'MongoDB'
        descricao = 'O MongoDB é um sistema de gerenciamento de banco de dados NoSQL de código aberto e multiplataforma, projetado para armazenar, consultar e gerenciar grandes volumes de dados não estruturados ou semiestruturados. Ele é uma ótima opção para aplicações que exigem flexibilidade, escalabilidade e alto desempenho para lidar com dados dinâmicos e em constante mudança.'
    } else if(props.habilidade === 'git'){
        habilidade = Git
        titulo = 'Git'
        descricao = 'Git é um sistema de controle de versão distribuído, projetado para facilitar o gerenciamento de projetos de desenvolvimento de software. Ele permite que várias pessoas colaborem no mesmo projeto, acompanhem as alterações no código-fonte e coordenem o trabalho de forma eficiente. O Git é amplamente utilizado na indústria de software devido à sua velocidade, eficiência e robustez.'
    } else if(props.habilidade === 'ingles'){
        habilidade = Ingles
        titulo = 'Inglês'
        descricao = 'O inglês se consolidou como a língua franca global, exercendo um papel fundamental na comunicação internacional, no acesso à informação e no desenvolvimento profissional e pessoal.'
    } else if(props.habilidade === 'python'){
        habilidade = Python
        titulo = 'Python'
        descricao = 'O Python se consolidou como uma linguagem de programação indispensável para análise de dados, devido à sua versatilidade, simplicidade e amplo leque de bibliotecas especializadas. Sua sintaxe é intuitiva e a curva de aprendizado é suave.'
    } else if(props.habilidade === 'powerbi'){
        habilidade = PowerBI
        titulo = 'Power BI'
        descricao = 'O Power BI se tornou uma ferramenta essencial para análise de dados, permitindo que empresas e profissionais transformem dados brutos em insights acionáveis e visualizações impactantes. Sua interface intuitiva, recursos poderosos e ampla variedade de conectores o tornam ideal para usuários de todos os níveis de experiência em análise de dados.'
    } else if(props.habilidade === 'excel'){
        habilidade = Excel
        titulo = 'Excel'
        descricao = 'O Excel se destaca como uma ferramenta poderosa para análise de dados, mesmo que não seja sua função principal. Sua interface intuitiva, recursos robustos e ampla variedade de funções o tornam acessível para iniciantes e usuários experientes em análise de dados.'
    }

    const handleMouseEnter = () => {
        dispatch(setDescricao(descricao));
        dispatch(setTitulo(titulo))
    };

    const handleMouseLeave = () => {
        dispatch(setDescricao('Coloque o mouse sobre o ícone para saber sobre a tecnologia específica.'));
        dispatch(setTitulo('Saiba sobre a tecnologia'))
    };

    return(
        <Container data-aos="flip-left" data-aos-duration={props.duracaoAnimacao} className="container-habilidade-estatico" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Container className="container-habilidade-dinamico">
                <Image className={`img-habilidade ${props.habilidade}`} src={habilidade}/>
            </Container>
        </Container>
    )
}

export default HabilidadesComponente