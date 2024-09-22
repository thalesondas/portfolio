import { Container, Row, Col, Nav, Navbar, Image } from 'react-bootstrap';
import ProgrammerLogo from '../images/ProgrammerLogo.png';
import '../assets/Header.css';

const Header = () => {
    return (
        <header>
            <Container className='py-2 px-4 px-md-5'>
                <Row className='d-flex align-items-center'>
                    <Col xs={10} md={5} lg={4} xl={3} className='header-col-1 d-flex align-items-start'>
                        <Row>
                            <Col className='d-flex justify-content-end'>
                                <Image className='img-header' src={ProgrammerLogo}></Image>
                            </Col>
                            <Col className='d-flex align-items-end'>
                                <h1 className='cormorant'>Thales.dev</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} md={7} lg={8} xl={9} className='d-flex align-items-center justify-content-end justify-content-md-center'>
                        <Navbar expand="md">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link className='mx-2 mx-lg-4 mx-xl-5' href="#home">Home</Nav.Link>
                                <Nav.Link className='mx-2 mx-lg-4 mx-xl-5' href="#sobre">Sobre mim</Nav.Link>
                                <Nav.Link className='mx-2 mx-lg-4 mx-xl-5' href="#habilidades">Habilidades</Nav.Link>
                                <Nav.Link className='mx-2 mx-lg-4 mx-xl-5' href="#projetos">Projetos</Nav.Link>
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