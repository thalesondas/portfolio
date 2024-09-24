import { Container, Row } from 'react-bootstrap';
import '../assets/MainProjetos.css'
import ProjetoLista from './ProjetoLista';

const MainProjetos = () => {
    return(
        <Container id='projetos' className='main-projetos d-flex flex-column mt-5 mt-md-1 justify-content-center align-items-center'>
            <Row>
                <h1 data-aos='zoom-out-up' className='d-flex justify-content-center align-items-center mb-5'><span className="barra-vermelha">|&nbsp;</span>Projetos</h1>
            </Row>
            <Row className='mx-3'>
                <ProjetoLista />
            </Row>
        </Container>
    )
}

export default MainProjetos;