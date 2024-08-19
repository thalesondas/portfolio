import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import HabilidadesComponente from "./HabilidadesComponente"
import { useSelector } from 'react-redux' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/MainHabilidades.css'

const MainHabilidades = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const descricao = useSelector(state => state.descricao.descricao)
    const titulo = useSelector(state => state.descricao.titulo)

    return(
        <Container id="habilidades" className="main-habilidades d-flex flex-column justify-content-center align-items-center">
            <Row>
                <h1 data-aos="flip-down" data-aos-duration='1300' className="mb-5 mt-5"><span className="barra-vermelha">|&nbsp;</span>Habilidades</h1>
            </Row>
            <Row className="row-habilidades">
                <Col className="main-habilidades-col1 d-flex justify-content-center align-items-center">
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='2000' habilidade='html'/>
                        <HabilidadesComponente duracaoAnimacao='1500' habilidade='bootstrap'/>
                        <HabilidadesComponente duracaoAnimacao='800' habilidade='ingles'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='2200' habilidade='css'/>
                        <HabilidadesComponente duracaoAnimacao='1600' habilidade='postgresql'/>
                        <HabilidadesComponente duracaoAnimacao='1000' habilidade='python'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='1700' habilidade='javascript'/>
                        <HabilidadesComponente duracaoAnimacao='900' habilidade='mongodb'/>
                        <HabilidadesComponente duracaoAnimacao='2300' habilidade='powerbi'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente duracaoAnimacao='1100' habilidade='reactjs'/>
                        <HabilidadesComponente duracaoAnimacao='1900' habilidade='git'/>
                        <HabilidadesComponente duracaoAnimacao='2500' habilidade='excel'/>
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

export default MainHabilidades