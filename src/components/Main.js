import { Container, Row, Col, Image } from 'react-bootstrap'
import '../assets/Main.css'
import ProgrammerLogo from '../images/ProgrammerLogo.png';

const Main = () => {
    return(
        <main>
            <Container style={{paddingTop: '100px'}}>
                <Row style={{ height: '629px'}}>
                    <Col className='main-home-col1 d-flex justify-content-center align-items-center'>
                        <h1>Olá, eu sou<br />
                            <span>Thales Ondas </span><span>|</span><br />
                            <br />
                            Desenvolvedor Full Stack<br />
                            Analista de Dados
                        </h1>
                    </Col>
                    <Col className='main-home-col2 d-flex justify-content-center align-items-center'>
                        <Image src={ProgrammerLogo}></Image>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Main