import { useState, useEffect } from "react"
import { Container, Image } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { setDescricao, setHabilidadeAtiva, setTitulo, resetHabilidadeAtiva } from "../redux/reducer"
import Html from '../assets/images/html.svg'
import Css from '../assets/images/css.svg'
import JavaScript from '../assets/images/javascript.svg'
import ReactJS from '../assets/images/reactjs.svg'
import Bootstrap from '../assets/images/bootstrap.svg'
import PostgreSql from '../assets/images/postgresql.svg'
import MongoDB from '../assets/images/mongodb.svg'
import Git from '../assets/images/git.svg'
import Ingles from '../assets/images/ingles.svg'
import Redux from '../assets/images/redux.svg'
import NodeJS from '../assets/images/nodejs.svg'
import Java from '../assets/images/java.svg'
import SpringBoot from '../assets/images/springboot.svg'
import Hibernate from '../assets/images/hibernate.svg'
import '../assets/styles/HabilidadesComponente.css'

interface RootState {
  descricao: {
    habilidadeAtiva: string;
  }
}

interface HabilidadeInfo {
  habilidade: string;
  habilidadeAtiva: string;
  titulo: string;
  descricao: string;
}

interface HabilidadesComponenteProps {
  habilidade: string;
  duracaoAnimacao: string;
}

const HabilidadesComponente = ({ habilidade, duracaoAnimacao }: HabilidadesComponenteProps) => {

    const dispatch = useDispatch();
    const habilidadeAtivaGlobal = useSelector((state: RootState) => state.descricao.habilidadeAtiva);

    const [estaAtiva, setEstaAtiva] = useState(false)
    const [containerAtivo, setContainerAtivo] = useState(false)

    const habilidadesMap: Record<string, HabilidadeInfo> = {
        html: {
            habilidade: Html,
            habilidadeAtiva: 'html-ativo',
            titulo: 'HTML',
            descricao: 'HTML é a linguagem base para a criação de páginas da web. É uma linguagem de marcação que define a estrutura e o conteúdo de um site, como títulos, parágrafos, imagens, links e outros elementos.'
        },
        css: {
            habilidade: Css,
            habilidadeAtiva: 'css-ativo',
            titulo: 'CSS',
            descricao: 'CSS é uma linguagem de estilo que define a aparência de páginas da web. Ela complementa o HTML, que define a estrutura e o conteúdo da página, fornecendo controle sobre a apresentação visual, como cores, fontes, layout, posicionamento e outros aspectos estéticos.'
        },
        javascript: {
            habilidade: JavaScript,
            habilidadeAtiva: 'javascript-ativo',
            titulo: 'JavaScript',
            descricao: 'JavaScript é uma linguagem de programação que adiciona interatividade e funcionalidade avançada às páginas da web. Ela complementa o HTML e CSS, permitindo criar sites dinâmicos, responsivos e interativos com o usuário.'
        },
        reactjs: {
            habilidade: ReactJS,
            habilidadeAtiva: 'reactjs-ativo',
            titulo: 'React.js',
            descricao: 'ReactJS é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook, para a construção de interfaces de usuário (UI). Ele é amplamente utilizado para criar aplicações web dinâmicas e de alta performance. React adota uma abordagem baseada em componentes, onde a interface do usuário é dividida em pequenos blocos reutilizáveis, cada um com sua própria lógica e estado.'
        },
        bootstrap: {
            habilidade: Bootstrap,
            habilidadeAtiva: 'bootstrap-ativo',
            titulo: 'Bootstrap',
            descricao: 'Bootstrap é um framework front-end de código aberto, desenvolvida pelo Twitter, que facilita a criação de interfaces web responsivas e estilizadas. Ele fornece uma coleção de componentes pré-construídos, como botões, formulários, barras de navegação, entre outros, além de um sistema de grid responsivo e classes CSS para estilização rápida e consistente.'
        },
        postgresql: {
            habilidade: PostgreSql,
            habilidadeAtiva: 'postgresql-ativo',
            titulo: 'PostgreSQL',
            descricao: 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional (SGBD) de código aberto e multiplataforma, conhecido por sua confiabilidade, robustez e recursos avançados. Ele é uma das principais opções para empresas e organizações que exigem um banco de dados poderoso, seguro e escalável.'
        },
        mongodb: {
            habilidade: MongoDB,
            habilidadeAtiva: 'mongodb-ativo',
            titulo: 'MongoDB',
            descricao: 'O MongoDB é um sistema de gerenciamento de banco de dados NoSQL de código aberto e multiplataforma, projetado para armazenar, consultar e gerenciar grandes volumes de dados não estruturados ou semiestruturados. Ele é uma ótima opção para aplicações que exigem flexibilidade, escalabilidade e alto desempenho para lidar com dados dinâmicos e em constante mudança.'
        },
        git: {
            habilidade: Git,
            habilidadeAtiva: 'git-ativo',
            titulo: 'Git',
            descricao: 'Git é um sistema de controle de versão distribuído, projetado para facilitar o gerenciamento de projetos de desenvolvimento de software. Ele permite que várias pessoas colaborem no mesmo projeto, acompanhem as alterações no código-fonte e coordenem o trabalho de forma eficiente. O Git é amplamente utilizado na indústria de software devido à sua velocidade, eficiência e robustez.'
        },
        ingles: {
            habilidade: Ingles,
            habilidadeAtiva: 'ingles-ativo',
            titulo: 'Inglês',
            descricao: 'O inglês se consolidou como a língua franca global, exercendo um papel fundamental na comunicação internacional, no acesso à informação e no desenvolvimento profissional e pessoal.'
        },
        redux: {
            habilidade: Redux,
            habilidadeAtiva: 'redux-ativo',
            titulo: 'Redux Toolkit',
            descricao: 'Redux é uma biblioteca de gerenciamento de estado previsível para aplicações JavaScript, especialmente aquelas construídas com bibliotecas como React. Ele centraliza o estado da aplicação em um único objeto chamado "store", permitindo que diferentes componentes acessem e atualizem o estado de maneira previsível através de "ações" e "reduzidores".'
        },
        nodejs: {
            habilidade: NodeJS,
            habilidadeAtiva: 'nodejs-ativo',
            titulo: 'Node.js',
            descricao: 'Node.js é um ambiente de execução JavaScript que permite executar código JavaScript no lado do servidor. É conhecido por sua alta performance e eficiência em aplicações em tempo real, como chats e jogos, devido à sua arquitetura assíncrona e orientada a eventos. Node.js é amplamente utilizado para construir APIs, serviços web e aplicações escaláveis.'
        },
        java: {
            habilidade: Java,
            habilidadeAtiva: 'java-ativo',
            titulo: 'Java',
            descricao: 'Java é uma linguagem de programação orientada a objetos. É conhecida por sua portabilidade, segurança e robustez, sendo amplamente utilizada em aplicativos web, móveis (especialmente Android) e sistemas corporativos.'
        },
        springboot: {
            habilidade: SpringBoot,
            habilidadeAtiva: 'springboot-ativo',
            titulo: 'Spring Boot',
            descricao: 'Spring Boot é um framework Java que facilita a criação de aplicações web e microserviços, eliminando a necessidade de configurações complexas. Ele oferece configurações automáticas, um servidor embutido, e uma abordagem para criar APIs REST de forma rápida e eficiente.'
        },
        hibernate: {
            habilidade: Hibernate,
            habilidadeAtiva: 'hibernate-ativo',
            titulo: 'JPA / Hibernate',
            descricao: 'JPA (Java Persistence API) é uma especificação Java para mapeamento objeto-relacional (ORM), que facilita a interação entre objetos Java e bancos de dados relacionais. O Hibernate é uma implementação popular do JPA, oferecendo funcionalidades avançadas, como o gerenciamento automático de consultas SQL, cache de dados e controle de transações, permitindo persistir dados de forma eficiente e minimizando a necessidade de escrever SQL manualmente.'
        }
    };

    const habilidadeInfo = habilidadesMap[habilidade] || ({} as HabilidadeInfo)

    // Reseta o estado local se a habilidade ativa global mudar
    useEffect(() => {
        if (habilidadeAtivaGlobal !== habilidadeInfo.habilidadeAtiva) {
            setEstaAtiva(false);  // Desativa localmente se outra habilidade for clicada
            setContainerAtivo(false);
        }
    }, [habilidadeAtivaGlobal, habilidadeInfo.habilidadeAtiva]);

    const handleOnClick = () => {
        if(window.innerWidth > 946.98){
            setEstaAtiva(false);
            setContainerAtivo(false);
        } else {
            // Verifica se a habilidade ativa global é diferente da habilidade atual
            if(habilidadeAtivaGlobal !== habilidadeInfo.habilidadeAtiva) {
                dispatch(resetHabilidadeAtiva());
                dispatch(setHabilidadeAtiva(habilidadeInfo.habilidadeAtiva));
                dispatch(setDescricao(habilidadeInfo.descricao));
                dispatch(setTitulo(habilidadeInfo.titulo));
                setEstaAtiva(true);
                setContainerAtivo(true);
            }

            document.getElementById('habilidades')?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                window.scrollBy({ top: -40, left: 0, behavior: 'smooth' });
            }, 400);
        }
    };

    const handleMouseOver = () => {
        if(window.innerWidth > 946.98){
            dispatch(setHabilidadeAtiva(habilidadeInfo.habilidadeAtiva))
            dispatch(setDescricao(habilidadeInfo.descricao));
            dispatch(setTitulo(habilidadeInfo.titulo));
            setEstaAtiva(true);
            setContainerAtivo(true);
        }
    }

    const handleMouseOut = () => {
        if(window.innerWidth > 946.98){
            dispatch(setHabilidadeAtiva(''))
            dispatch(setDescricao('Passe o mouse (em dispositivos maiores) ou clique (em dispositivos menores) no ícone para saber sobre a tecnologia específica.'));
            dispatch(setTitulo('Saiba sobre a tecnologia'));
            setEstaAtiva(false);
            setContainerAtivo(false);
        }
    }

    return(
        <Container
            data-aos="flip-left"
            data-aos-duration={duracaoAnimacao}
            className='container-habilidade-estatico'
            onClick={handleOnClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>

            <Container className={`container-habilidade-dinamico ${containerAtivo ? 'container-ativo' : ''}`}>

                <Image className={`img-habilidade ${habilidade} ${estaAtiva ? habilidadeInfo.habilidadeAtiva : ''}`}
                src={habilidadeInfo.habilidade}
                draggable="false"/>

            </Container>
        </Container>
    )
}

export default HabilidadesComponente