import { Container, Row, Col, Image } from "react-bootstrap"
import TiltComponent from '../components/TiltComponent'
import SocialMediaButton from "../components/SocialMediaButton"
import Email from "../assets/images/email.svg"
import '../assets/styles/MainAbout.css'

const About = () => {

    return(
        <Container id="about" className="main-about d-flex">
            <Row>
                <Col data-aos="fade-right" data-aos-duration="1500" md={6} lg={5} className="main-about-col1 d-flex flex-column justify-content-center align-items-start align-items-sm-center align-items-md-start align-items-xl-center mt-5 mt-md-0 ms-4 ms-sm-0">
                    <TiltComponent />
                    <p className="mt-5 ms-3 ms-lg-5"> <Image className='img-email pe-2' src={Email} draggable="false" /> <span className="span-email">thalesondas0@gmail.com</span></p>
                </Col>
                <Col data-aos="fade-left" data-aos-duration="1500" md={6} lg={7} className="main-about-col2 d-flex flex-column justify-content-center mt-5 mt-md-0">
                    <h2 data-aos="fade-down" data-aos-duration="1700" className="mb-4"><span className="barra-vermelha">|</span> Sobre mim</h2>
                    <p>
                        &emsp;Sou desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas pela UTFPR de Cornélio Procópio, 
                        com experiência no desenvolvimento de aplicações web e APIs em ambientes produtivos.
                    </p>
                    <p>
                        &emsp;Atuo principalmente com JavaScript e TypeScript, 
                        desenvolvendo soluções front-end com Next.js/React e Vue.js e back-end com NestJS e Django (Django REST Framework), 
                        com persistência de dados em PostgreSQL, utilizando TypeORM.
                    </p>
                    <p>
                        &emsp;Tenho experiência com testes automatizados (Jest, Unittest e BDD com Gherkin) e noções de DevOps, 
                        utilizando Docker, Kubernetes e pipelines de CI/CD com GitHub Actions, além de deploy na DigitalOcean.
                    </p>
                    <p className="mb-5">
                        &emsp;Possuo inglês intermediário/avançado (B2-C1) e valorizo código limpo, boas práticas e aprendizado contínuo.
                    </p>
                    <Container className="d-flex justify-content-center">
                        <SocialMediaButton text='Currículo'/>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default About
