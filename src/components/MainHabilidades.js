import { Container, Row, Col } from "react-bootstrap"
import HabilidadesComponente from "./HabilidadesComponente"
import '../assets/MainHabilidades.css'

const MainHabilidades = () => {
    return(
        <Container className="main-habilidades d-flex flex-column justify-content-center align-items-center">
            <Row>
                <h1 className="mb-5"><span className="barra-vermelha">|&nbsp;</span>Habilidades</h1>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center mt-5">
                    <Row>
                        <HabilidadesComponente habilidade='html'/>
                        <HabilidadesComponente habilidade='bootstrap'/>
                        <HabilidadesComponente habilidade='ingles'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente habilidade='css'/>
                        <HabilidadesComponente habilidade='postgresql'/>
                        <HabilidadesComponente habilidade='python'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente habilidade='javascript'/>
                        <HabilidadesComponente habilidade='mongodb'/>
                        <HabilidadesComponente habilidade='powerbi'/>
                    </Row>
                    <Row>
                        <HabilidadesComponente habilidade='reactjs'/>
                        <HabilidadesComponente habilidade='git'/>
                        <HabilidadesComponente habilidade='excel'/>
                    </Row>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default MainHabilidades