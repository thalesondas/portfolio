import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Image } from "react-bootstrap"
import TiltComponent from '../components/TiltComponent'
import RedesSociaisBotao from "./RedesSociaisBotao"
import Email from "../images/email.svg"
import '../assets/MainSobre.css'

const MainSobre = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <Container id="sobre" className="main-sobre d-flex">
            <Row>
                <Col data-aos="fade-right" data-aos-duration="1500" md={5} className="d-flex flex-column justify-content-center align-items-center">
                    <TiltComponent />
                    <p className="p-email mt-5"> <Image className='img-email pe-2' src={Email} /> <span className="span-email">thalesondas0@gmail.com</span></p>
                </Col>
                <Col data-aos="fade-left" data-aos-duration="1500" md={7} className="main-sobre-col2 d-flex flex-column justify-content-center">
                    <h2 data-aos="fade-down" data-aos-duration="1700" className="mb-4"><span className="barra-vermelha">|</span> Sobre mim</h2>
                    <p>
                        &emsp;Olá! Sou formado em Análise e Desenvolvimento de Sistemas pela UTFPR de Cornélio Procópio,
                        onde adquiri conhecimento em várias linguagens de programação,
                        linguagens de marcação e estilização, bancos de dados, bibliotecas e frameworks, etc.
                    </p>
                    <p>
                        &emsp;Além de aprimorar alguns desses conhecimentos e aprender novas tecnologias por
                        meio de cursos online gratuitos e da plataforma Udemy.
                    </p>
                    <p className="mb-5">
                        &emsp;Estou em busca da minha primeira oportunidade de trabalho nessa área para poder continuar aprimorando 
                        minhas habilidades e poder ajudar a empresa com meus conhecimentos.
                    </p>
                    <Container className="d-flex justify-content-center">
                        <RedesSociaisBotao texto='Currículo'/>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default MainSobre