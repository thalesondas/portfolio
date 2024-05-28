import { Container, Row, Col, Nav, Navbar, Image } from 'react-bootstrap';
import ProgrammerLogo from '../images/ProgrammerLogo.png';

import '../assets/Header.css';

const Header = () => {
    return (
        <header>
            <Container className='py-2 px-5'>
                <Row className='d-flex align-items-center'>
                    <Col className='d-flex align-items-start'>
                        <Row>
                            <Col className='d-flex justify-content-end'>
                                <Image src={ProgrammerLogo} style={{ height: '60px' }}></Image>
                            </Col>
                            <Col className='d-flex align-items-end'>
                                <h1 className='cormorant'>Thales.dev</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-end'>
                        <Navbar>
                            <Nav>
                                <Nav.Link className='me-4' href="#home">Home</Nav.Link>
                                <Nav.Link className='mx-4' href="#sobre">Sobre mim</Nav.Link>
                                <Nav.Link className='mx-4' href="#habilidades">Habilidades</Nav.Link>
                                <Nav.Link className='ms-4' href="#">Projetos</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header