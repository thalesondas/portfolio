import { useState, useEffect } from "react"
import { Container, Image } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { setDescricao, setHabilidadeAtiva, setTitulo, resetHabilidadeAtiva } from "../redux/reducer"
import TypeScript from '../assets/images/typescript.svg'
import Python from '../assets/images/python.svg'
import ReactJS from '../assets/images/reactjs.svg'
import Bootstrap from '../assets/images/bootstrap.svg'
import PostgreSql from '../assets/images/postgresql.svg'
import MongoDB from '../assets/images/mongodb.svg'
import Git from '../assets/images/git.svg'
import Ingles from '../assets/images/ingles.svg'
import Redux from '../assets/images/redux.svg'
import NodeJS from '../assets/images/nodejs.svg'
import NestJS from '../assets/images/nestjs.svg'
import Vue from '../assets/images/vue.svg'
import Django from '../assets/images/django.svg'
import Docker from '../assets/images/docker.svg'
import Jest from '../assets/images/jest.svg'
import Unittest from '../assets/images/unittest.svg'
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
        python: {
            habilidade: Python,
            habilidadeAtiva: 'python-ativo',
            titulo: 'Python',
            descricao: 'Python é uma linguagem de programação de alto nível, simples e versátil. É muito utilizada em áreas como ciência de dados, automação, back-end, machine learning e desenvolvimento web (com frameworks como Django e Flask).'
        },
        typescript: {
            habilidade: TypeScript,
            habilidadeAtiva: 'typescript-ativo',
            titulo: 'TypeScript',
            descricao: 'TypeScript adiciona tipos estáticos e recursos avançados ao JavaScript, ajudando a melhorar a legibilidade, a qualidade e a escalabilidade do código, especialmente em projetos grandes.'
        },
        nestjs: {
            habilidade: NestJS,
            habilidadeAtiva: 'nestjs-ativo',
            titulo: 'NestJS',
            descricao: 'NestJS é um framework back-end para Node.js que utiliza TypeScript e uma arquitetura modular. Ele facilita a criação de APIs e micro serviços escaláveis e bem estruturados.'
        },
        nodejs: {
            habilidade: NodeJS,
            habilidadeAtiva: 'nodejs-ativo',
            titulo: 'Node.js',
            descricao: 'Node.js é um ambiente de execução JavaScript voltado para o back-end. Ele se destaca por sua performance e pelo modelo assíncrono e orientado a eventos, sendo ideal para aplicações em tempo real e APIs escaláveis.'
        },
        django: {
            habilidade: Django,
            habilidadeAtiva: 'django-ativo',
            titulo: 'Django',
            descricao: 'Django é um framework web para Python focado em produtividade e segurança. Ele segue o padrão MVC e oferece ferramentas integradas como ORM, autenticação, administração e gerenciamento de rotas.'
        },
        reactjs: {
            habilidade: ReactJS,
            habilidadeAtiva: 'reactjs-ativo',
            titulo: 'React.js',
            descricao: 'React é uma biblioteca JavaScript para construção de interfaces usando uma abordagem baseada em componentes. Ele é amplamente utilizado para criar aplicações dinâmicas, rápidas e reutilizáveis.'
        },
        vuejs: {
            habilidade: Vue,
            habilidadeAtiva: 'vuejs-ativo',
            titulo: 'Vue.js',
            descricao: 'Vue.js é um framework JavaScript focado na construção de interfaces reativas. Ele combina simplicidade com boa performance e uma curva de aprendizado suave, sendo muito usado em SPAs.'
        },
        bootstrap: {
            habilidade: Bootstrap,
            habilidadeAtiva: 'bootstrap-ativo',
            titulo: 'Bootstrap',
            descricao: 'Bootstrap é um framework front-end com componentes pré-construídos e grid responsivo. Ele ajuda a criar interfaces consistentes e adaptáveis com menos esforço de estilização.'
        },
        postgresql: {
            habilidade: PostgreSql,
            habilidadeAtiva: 'postgresql-ativo',
            titulo: 'PostgreSQL',
            descricao: 'PostgreSQL é um banco de dados relacional open-source, conhecido pela robustez, segurança e suporte a recursos avançados. Ele é amplamente utilizado em sistemas corporativos e aplicações que exigem confiabilidade.'
        },
        mongodb: {
            habilidade: MongoDB,
            habilidadeAtiva: 'mongodb-ativo',
            titulo: 'MongoDB',
            descricao: 'MongoDB é um banco de dados NoSQL orientado a documentos, ideal para sistemas que lidam com dados dinâmicos e em grande volume, oferecendo flexibilidade e alta escalabilidade.'
        },
        redux: {
            habilidade: Redux,
            habilidadeAtiva: 'redux-ativo',
            titulo: 'Redux Toolkit',
            descricao: 'Redux Toolkit é uma ferramenta para gerenciamento de estado previsível, simplificando a configuração do Redux e reduzindo código repetitivo, especialmente em aplicações React.'
        },
        ingles: {
            habilidade: Ingles,
            habilidadeAtiva: 'ingles-ativo',
            titulo: 'Inglês',
            descricao: 'O inglês é a principal língua utilizada em tecnologia, negócios e ciência, sendo essencial para o acesso ao conhecimento e oportunidades globais.'
        },
        git: {
            habilidade: Git,
            habilidadeAtiva: 'git-ativo',
            titulo: 'Git',
            descricao: 'Git é um sistema de controle de versão distribuído que facilita a colaboração entre desenvolvedores, permitindo acompanhar histórico de mudanças e organizar contribuições.'
        },
        docker: {
            habilidade: Docker,
            habilidadeAtiva: 'docker-ativo',
            titulo: 'Docker',
            descricao: 'Docker é uma plataforma de containers que permite empacotar aplicações com suas dependências, garantindo execução consistente em qualquer ambiente.'
        },
        jest: {
            habilidade: Jest,
            habilidadeAtiva: 'jest-ativo',
            titulo: 'Jest',
            descricao: 'Jest é um framework de testes para aplicações JavaScript, focado em simplicidade e velocidade. É amplamente usado para testar aplicações React e bibliotecas front-end.'
        },
        unittest: {
            habilidade: Unittest,
            habilidadeAtiva: 'unittest-ativo',
            titulo: 'Unittest',
            descricao: 'Unittest é o framework de testes padrão da biblioteca padrão do Python, permitindo criar testes unitários de forma organizada e modular.'
        },
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