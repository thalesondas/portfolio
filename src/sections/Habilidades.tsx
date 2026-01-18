import { Container, Row, Col } from "react-bootstrap"
import HabilidadesComponente from "../components/HabilidadesComponente"
import { useSelector } from 'react-redux' 
import '../assets/styles/MainHabilidades.css'

interface RootState {
  descricao: {
    descricao: string;
    titulo: string;
  }
}

const Habilidades = () => {

    const descricao = useSelector((state: RootState) => state.descricao.descricao)
    const titulo = useSelector((state: RootState) => state.descricao.titulo)

    return(
        <Container id="habilidades" className="main-habilidades d-flex flex-column justify-content-center align-items-center">
            <Row>
                <h1 data-aos="flip-down" data-aos-duration='1300' className="mb-5 mt-5"><span className="barra-vermelha">|&nbsp;</span>Principais Habilidades</h1>
            </Row>
            <Row className="row-habilidades">
                <Col className="main-habilidades-col1 d-flex justify-content-center align-items-center">
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='2000' habilidade='html'/>
                        <HabilidadesComponente duracaoAnimacao='2300' habilidade='nodejs'/>
                        <HabilidadesComponente duracaoAnimacao='2500' habilidade='java'/>
                        <HabilidadesComponente duracaoAnimacao='900' habilidade='mongodb'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='2200' habilidade='css'/>
                        <HabilidadesComponente duracaoAnimacao='1500' habilidade='bootstrap'/>
                        <HabilidadesComponente duracaoAnimacao='1000' habilidade='springboot'/>
                        <HabilidadesComponente duracaoAnimacao='1600' habilidade='postgresql'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='1700' habilidade='javascript'/>
                        <HabilidadesComponente duracaoAnimacao='1000' habilidade='redux'/>
                        <HabilidadesComponente duracaoAnimacao='1300' habilidade='hibernate'/>
                        <Container style={{ width: '109px', height: '136px' }} />
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='1100' habilidade='reactjs'/>
                        <HabilidadesComponente duracaoAnimacao='1900' habilidade='git'/>
                        <HabilidadesComponente duracaoAnimacao='800' habilidade='ingles'/>
                        <Container style={{ width: '109px', height: '136px' }} />
                    </Row>
                </Col>
                <Col className="main-habilidades-col2 d-flex flex-column justify-content-center align-items-center">
                    {descricao &&
                        <>
                            <h3 data-aos="flip-left" data-aos-duration="1000" className="mb-4">{titulo}</h3>
                            <p data-aos="flip-left" data-aos-duration="1000" className="justify">&emsp;{descricao}</p>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Habilidades