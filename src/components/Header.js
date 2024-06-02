import { Container, Row, Col, Nav, Navbar, Image } from 'react-bootstrap';
import ProgrammerLogo from '../images/ProgrammerLogo.png';
import '../assets/Header.css';

const Header = () => {
    return (
        <header>
            <Container className='py-2 px-5'>
                <Row className='d-flex align-items-center'>
                    <Col sm={7} className='d-flex align-items-start'>
                        <Row>
                            <Col className='d-flex justify-content-end'>
                                <Image className='img-header' src={ProgrammerLogo}></Image>
                            </Col>
                            <Col className='d-flex align-items-end'>
                                <h1 className='cormorant'>Thales.dev</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5} className='d-flex align-items-center justify-content-end'>
                        <Navbar expand="md">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className='ms-auto nav-gap'>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#sobre">Sobre mim</Nav.Link>
                                <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                                <Nav.Link href="#projetos">Projetos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header