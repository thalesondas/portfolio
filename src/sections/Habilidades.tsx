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
                        <HabilidadesComponente duracaoAnimacao='2000' habilidade='python'/>
                        <HabilidadesComponente duracaoAnimacao='2300' habilidade='django'/>
                        <HabilidadesComponente duracaoAnimacao='2500' habilidade='postgresql'/>
                        <HabilidadesComponente duracaoAnimacao='900' habilidade='git'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='2200' habilidade='typescript'/>
                        <HabilidadesComponente duracaoAnimacao='1500' habilidade='reactjs'/>
                        <HabilidadesComponente duracaoAnimacao='1000' habilidade='mongodb'/>
                        <HabilidadesComponente duracaoAnimacao='1600' habilidade='docker'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='1700' habilidade='nestjs'/>
                        <HabilidadesComponente duracaoAnimacao='1000' habilidade='vuejs'/>
                        <HabilidadesComponente duracaoAnimacao='1300' habilidade='redux'/>
                        <HabilidadesComponente duracaoAnimacao='2000' habilidade='jest'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='1100' habilidade='nodejs'/>
                        <HabilidadesComponente duracaoAnimacao='1900' habilidade='bootstrap'/>
                        <HabilidadesComponente duracaoAnimacao='800' habilidade='ingles'/>
                        <HabilidadesComponente duracaoAnimacao='1500' habilidade='unittest'/>
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