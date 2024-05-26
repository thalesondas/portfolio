import { Container, Row, Col } from "react-bootstrap"
import '../assets/MainSobre.css'

const MainSobre = () => {
    return(
        <Container className="main-sobre d-flex">
            <Row>
                <Col md={5} className="d-flex justify-content-center align-items-center">
                    <h1>*Imagem que será inserida*</h1>
                </Col>
                <Col md={7} className="main-sobre-col2 d-flex flex-column justify-content-center">
                    <h2 className="mb-4"><span className="barra-vermelha">|</span> Sobre mim</h2>
                    <p>
                        &emsp;Olá! Sou formado em Análise e Desenvolvimento de Sistemas pela UTFPR de Cornélio Procópio,
                        onde adquiri conhecimento em várias linguagens de programação,
                        linguagens de marcação e estilização, bancos de dados, bibliotecas e frameworks, etc.
                    </p>
                    <p>
                        &emsp;Além de aprimorar alguns desses conhecimentos e aprender novas tecnologias por
                        meio de cursos online gratuitos e da plataforma Udemy.
                    </p>
                    <p>
                        &emsp;Estou em busca da minha primeira oportunidade de trabalho nessa área para poder continuat aprimorando 
                        minhas habilidades e poder ajudar a empresa com meus conhecimentos.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default MainSobre