import { useRef, useState, useEffect } from "react"
import { Container, Image } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { setDescricao, setHabilidadeAtiva, setTitulo } from "../redux/reducer"
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
import NodeJS from '../images/nodejs.svg'
import Java from '../images/java.svg'
import '../assets/HabilidadesComponente.css'

const HabilidadesComponente = (props) => {

    const dispatch = useDispatch();
    const componenteRef = useRef(null);

    const [estaAtiva, setEstaAtiva] = useState(false)
    const [containerAtivo, setContainerAtivo] = useState(false)

    let habilidade;
    let descricao;
    let titulo;
    let habilidadeAtiva;

    if(props.habilidade === 'html'){
        habilidade = Html
        habilidadeAtiva = 'html-ativo'
        titulo = 'HTML'
        descricao = 'HTML é a linguagem base para a criação de páginas da web. É uma linguagem de marcação que define a estrutura e o conteúdo de um site, como títulos, parágrafos, imagens, links e outros elementos.'
    } else if(props.habilidade === 'css'){
        habilidade = Css
        habilidadeAtiva = 'css-ativo'
        titulo = 'CSS'
        descricao = 'CSS é uma linguagem de estilo que define a aparência de páginas da web. Ela complementa o HTML, que define a estrutura e o conteúdo da página, fornecendo controle sobre a apresentação visual, como cores, fontes, layout, posicionamento e outros aspectos estéticos.'
    } else if(props.habilidade === 'javascript'){
        habilidade = JavaScript
        habilidadeAtiva = 'javascript-ativo'
        titulo = 'JavaScript'
        descricao = 'JavaScript é uma linguagem de programação que adiciona interatividade e funcionalidade avançada às páginas da web. Ela complementa o HTML e CSS, permitindo criar sites dinâmicos, responsivos e interativos com o usuário.'
    } else if(props.habilidade === 'reactjs'){
        habilidade = ReactJS
        habilidadeAtiva = 'reactjs-ativo'
        titulo = 'React.js'
        descricao = 'ReactJS é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook, para a construção de interfaces de usuário (UI). Ele é amplamente utilizado para criar aplicações web dinâmicas e de alta performance. React adota uma abordagem baseada em componentes, onde a interface do usuário é dividida em pequenos blocos reutilizáveis, cada um com sua própria lógica e estado.'
    } else if(props.habilidade === 'bootstrap'){
        habilidade = Bootstrap
        habilidadeAtiva = 'bootstrap-ativo'
        titulo = 'Bootstrap'
        descricao = 'Bootstrap é um framework front-end de código aberto, desenvolvido pelo Twitter, que facilita a criação de interfaces web responsivas e estilizadas. Ele fornece uma coleção de componentes pré-construídos, como botões, formulários, barras de navegação, entre outros, além de um sistema de grid responsivo e classes CSS para estilização rápida e consistente.'
    } else if(props.habilidade === 'postgresql'){
        habilidade = PostgreSql
        habilidadeAtiva = 'postgresql-ativo'
        titulo = 'PostgreSQL'
        descricao = 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional (SGBD) de código aberto e multiplataforma, conhecido por sua confiabilidade, robustez e recursos avançados. Ele é uma das principais opções para empresas e organizações que exigem um banco de dados poderoso, seguro e escalável.'
    } else if(props.habilidade === 'mongodb'){
        habilidade = MongoDB
        habilidadeAtiva = 'mongodb-ativo'
        titulo = 'MongoDB'
        descricao = 'O MongoDB é um sistema de gerenciamento de banco de dados NoSQL de código aberto e multiplataforma, projetado para armazenar, consultar e gerenciar grandes volumes de dados não estruturados ou semiestruturados. Ele é uma ótima opção para aplicações que exigem flexibilidade, escalabilidade e alto desempenho para lidar com dados dinâmicos e em constante mudança.'
    } else if(props.habilidade === 'git'){
        habilidade = Git
        habilidadeAtiva = 'git-ativo'
        titulo = 'Git'
        descricao = 'Git é um sistema de controle de versão distribuído, projetado para facilitar o gerenciamento de projetos de desenvolvimento de software. Ele permite que várias pessoas colaborem no mesmo projeto, acompanhem as alterações no código-fonte e coordenem o trabalho de forma eficiente. O Git é amplamente utilizado na indústria de software devido à sua velocidade, eficiência e robustez.'
    } else if(props.habilidade === 'ingles'){
        habilidade = Ingles
        habilidadeAtiva = 'ingles-ativo'
        titulo = 'Inglês'
        descricao = 'O inglês se consolidou como a língua franca global, exercendo um papel fundamental na comunicação internacional, no acesso à informação e no desenvolvimento profissional e pessoal.'
    } else if(props.habilidade === 'python'){
        habilidade = Python
        habilidadeAtiva = 'python-ativo'
        titulo = 'Python'
        descricao = 'O Python se consolidou como uma linguagem de programação indispensável para análise de dados, devido à sua versatilidade, simplicidade e amplo leque de bibliotecas especializadas. Sua sintaxe é intuitiva e a curva de aprendizado é suave.'
    } else if(props.habilidade === 'nodejs'){
        habilidade = NodeJS
        habilidadeAtiva = 'nodejs-ativo'
        titulo = 'Node.js'
        descricao = 'Node.js é um ambiente de execução JavaScript baseado no motor V8 do Google Chrome, que permite executar código JavaScript no lado do servidor. É conhecido por sua alta performance e eficiência em aplicações em tempo real, como chats e jogos, devido à sua arquitetura assíncrona e orientada a eventos. Node.js é amplamente utilizado para construir APIs, serviços web e aplicações escaláveis.'
    } else if(props.habilidade === 'java'){
        habilidade = Java
        habilidadeAtiva = 'java-ativo'
        titulo = 'Java'
        descricao = 'Java é uma linguagem de programação orientada a objetos. É conhecida por sua portabilidade, segurança e robustez, sendo amplamente utilizada em aplicativos web, móveis (especialmente Android) e sistemas corporativos.'
    }

    const handleOnClick = () => {

        dispatch(setHabilidadeAtiva(habilidadeAtiva))
        dispatch(setDescricao(descricao));
        dispatch(setTitulo(titulo));
        setEstaAtiva(true);
        setContainerAtivo(true);

        if(window.innerWidth < 946.98){
            document.getElementById('habilidades').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                window.scrollBy({ top: -40, left: 0, behavior: 'smooth' });
            }, 400);
        }
    }

    useEffect(() => {
        const handleOnClickFora = () => {
            if(componenteRef.current) {
                dispatch(setTitulo('Saiba sobre a tecnologia'));
                dispatch(setDescricao('Clique no ícone para saber sobre a tecnologia específica.'));
                setEstaAtiva(false);
                setContainerAtivo(false);
            }
        };
        document.addEventListener("mousedown", handleOnClickFora);
        return () => {
            document.removeEventListener("mousedown", handleOnClickFora);
        };
    }, [dispatch, componenteRef]);

    return(
        <Container
            ref={componenteRef}
            data-aos="flip-left"
            data-aos-duration={props.duracaoAnimacao}
            className='container-habilidade-estatico'
            onClick={handleOnClick}>

            <Container className={`container-habilidade-dinamico ${containerAtivo ? 'container-ativo' : ''}`}>
                <Image className={`img-habilidade ${props.habilidade} ${estaAtiva ? habilidadeAtiva : ''}`} src={habilidade}/>
            </Container>
        </Container>
    )
}

export default HabilidadesComponente