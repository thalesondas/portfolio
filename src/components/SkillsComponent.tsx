import { useState, useEffect } from "react"
import { Container, Image } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { setDescription, setActiveSkill, setTitle, resetActiveSkill } from "../redux/reducer"
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
import '../assets/styles/SkillsComponent.css'

interface RootState {
  description: {
    activeSkill: string;
  }
}

interface SkillInfo {
  icon: string;
  activeClassName: string;
  title: string;
  description: string;
}

interface SkillsComponentProps {
  skill: string;
  animationDuration: string;
}

const SkillsComponent = ({ skill, animationDuration }: SkillsComponentProps) => {

    const dispatch = useDispatch();
    const activeSkillGlobal = useSelector((state: RootState) => state.description.activeSkill);

    const [isActive, setIsActive] = useState(false)
    const [isActiveContainer, setIsActiveContainer] = useState(false)

    const skillsMap: Record<string, SkillInfo> = {
        python: {
            icon: Python,
            activeClassName: 'python-active',
            title: 'Python',
            description: 'Python é uma linguagem de programação de alto nível, simples e versátil. É muito utilizada em áreas como ciência de dados, automação, back-end, machine learning e desenvolvimento web (com frameworks como Django e Flask).'
        },
        typescript: {
            icon: TypeScript,
            activeClassName: 'typescript-active',
            title: 'TypeScript',
            description: 'TypeScript adiciona tipos estáticos e recursos avançados ao JavaScript, ajudando a melhorar a legibilidade, a qualidade e a escalabilidade do código, especialmente em projetos grandes.'
        },
        nestjs: {
            icon: NestJS,
            activeClassName: 'nestjs-active',
            title: 'NestJS',
            description: 'NestJS é um framework back-end para Node.js que utiliza TypeScript e uma arquitetura modular. Ele facilita a criação de APIs e micro serviços escaláveis e bem estruturados.'
        },
        nodejs: {
            icon: NodeJS,
            activeClassName: 'nodejs-active',
            title: 'Node.js',
            description: 'Node.js é um ambiente de execução JavaScript voltado para o back-end. Ele se destaca por sua performance e pelo modelo assíncrono e orientado a eventos, sendo ideal para aplicações em tempo real e APIs escaláveis.'
        },
        django: {
            icon: Django,
            activeClassName: 'django-active',
            title: 'Django',
            description: 'Django é um framework web para Python focado em produtividade e segurança. Ele segue o padrão MVC e oferece ferramentas integradas como ORM, autenticação, administração e gerenciamento de rotas.'
        },
        reactjs: {
            icon: ReactJS,
            activeClassName: 'reactjs-active',
            title: 'React.js',
            description: 'React é uma biblioteca JavaScript para construção de interfaces usando uma abordagem baseada em componentes. Ele é amplamente utilizado para criar aplicações dinâmicas, rápidas e reutilizáveis.'
        },
        vuejs: {
            icon: Vue,
            activeClassName: 'vuejs-active',
            title: 'Vue.js',
            description: 'Vue.js é um framework JavaScript focado na construção de interfaces reativas. Ele combina simplicidade com boa performance e uma curva de aprendizado suave, sendo muito usado em SPAs.'
        },
        bootstrap: {
            icon: Bootstrap,
            activeClassName: 'bootstrap-active',
            title: 'Bootstrap',
            description: 'Bootstrap é um framework front-end com componentes pré-construídos e grid responsivo. Ele ajuda a criar interfaces consistentes e adaptáveis com menos esforço de estilização.'
        },
        postgresql: {
            icon: PostgreSql,
            activeClassName: 'postgresql-active',
            title: 'PostgreSQL',
            description: 'PostgreSQL é um banco de dados relacional open-source, conhecido pela robustez, segurança e suporte a recursos avançados. Ele é amplamente utilizado em sistemas corporativos e aplicações que exigem confiabilidade.'
        },
        mongodb: {
            icon: MongoDB,
            activeClassName: 'mongodb-active',
            title: 'MongoDB',
            description: 'MongoDB é um banco de dados NoSQL orientado a documentos, ideal para sistemas que lidam com dados dinâmicos e em grande volume, oferecendo flexibilidade e alta escalabilidade.'
        },
        redux: {
            icon: Redux,
            activeClassName: 'redux-active',
            title: 'Redux Toolkit',
            description: 'Redux Toolkit é uma ferramenta para gerenciamento de estado previsível, simplificando a configuração do Redux e reduzindo código repetitivo, especialmente em aplicações React.'
        },
        ingles: {
            icon: Ingles,
            activeClassName: 'ingles-active',
            title: 'Inglês',
            description: 'O inglês é a principal língua utilizada em tecnologia, negócios e ciência, sendo essencial para o acesso ao conhecimento e oportunidades globais.'
        },
        git: {
            icon: Git,
            activeClassName: 'git-active',
            title: 'Git',
            description: 'Git é um sistema de controle de version distribuído que facilita a colaboração entre desenvolvedores, permitindo acompanhar histórico de mudanças e organizar contribuições.'
        },
        docker: {
            icon: Docker,
            activeClassName: 'docker-active',
            title: 'Docker',
            description: 'Docker é uma plataforma de containers que permite empacotar aplicações com suas dependências, garantindo execução consistente em qualquer ambiente.'
        },
        jest: {
            icon: Jest,
            activeClassName: 'jest-active',
            title: 'Jest',
            description: 'Jest é um framework de testes para aplicações JavaScript, focado em simplicidade e velocidade. É amplamente usado para testar aplicações React e bibliotecas front-end.'
        },
        unittest: {
            icon: Unittest,
            activeClassName: 'unittest-active',
            title: 'Unittest',
            description: 'Unittest é o framework de testes padrão da biblioteca padrão do Python, permitindo criar testes unitários de forma organizada e modular.'
        },
    };

    const currentSkillInfo = skillsMap[skill] || ({} as SkillInfo)

    // Reseta o estado local se a habilidade ativa global mudar
    useEffect(() => {
        if (activeSkillGlobal !== currentSkillInfo.activeClassName) {
            setIsActive(false);  // Desativa localmente se outra habilidade for clicada
            setIsActiveContainer(false);
        }
    }, [activeSkillGlobal, currentSkillInfo.activeClassName]);

    const handleOnClick = () => {
        if(window.innerWidth > 946.98){
            setIsActive(false);
            setIsActiveContainer(false);
        } else {
            // Verifica se a habilidade ativa global é diferente da habilidade atual
            if(activeSkillGlobal !== currentSkillInfo.activeClassName) {
                dispatch(resetActiveSkill());
                dispatch(setActiveSkill(currentSkillInfo.activeClassName));
                dispatch(setDescription(currentSkillInfo.description));
                dispatch(setTitle(currentSkillInfo.title));
                setIsActive(true);
                setIsActiveContainer(true);
            }

            document.getElementById('habilidades')?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                window.scrollBy({ top: -40, left: 0, behavior: 'smooth' });
            }, 400);
        }
    };

    const handleMouseOver = () => {
        if(window.innerWidth > 946.98){
            dispatch(setActiveSkill(currentSkillInfo.activeClassName))
            dispatch(setDescription(currentSkillInfo.description));
            dispatch(setTitle(currentSkillInfo.title));
            setIsActive(true);
            setIsActiveContainer(true);
        }
    }

    const handleMouseOut = () => {
        if(window.innerWidth > 946.98){
            dispatch(setActiveSkill(''))
            dispatch(setDescription('Passe o mouse (em dispositivos maiores) ou clique (em dispositivos menores) no ícone para saber sobre a tecnologia específica.'));
            dispatch(setTitle('Saiba sobre a tecnologia'));
            setIsActive(false);
            setIsActiveContainer(false);
        }
    }

    return(
        <Container
            data-aos="flip-left"
            data-aos-duration={animationDuration}
            className='static-skill-container'
            onClick={handleOnClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>

            <Container className={`dynamic-skill-container ${isActiveContainer ? 'active-container' : ''}`}>

                <Image className={`skill-icon ${skill} ${isActive ? currentSkillInfo.activeClassName : ''}`}
                src={currentSkillInfo.icon}
                draggable="false"/>

            </Container>
        </Container>
    )
}

export default SkillsComponent