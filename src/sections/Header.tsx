import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Image } from 'react-bootstrap';
import ProgrammerLogo from '../assets/images/ProgrammerLogo.png';
import '../assets/styles/Header.css';

const Header = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    const handleNavClick = () => {
        setIsExpanded(false)
    }

    return (
        <header>
            <Container className='py-2 px-4 px-md-5'>
                <Row className='d-flex align-items-center'>
                    <Col xs={10} md={5} lg={4} xl={3} className='header-col-1 d-flex align-items-start'>
                        <Row>
                            <Col className='d-flex justify-content-end'>
                                <Image className='img-header' src={ProgrammerLogo} draggable="false" />
                            </Col>
                            <Col className='d-flex align-items-end'>
                                <h1 className='cormorant'>Thales.dev</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} md={7} lg={8} xl={9} className='d-flex align-items-center justify-content-end justify-content-md-center'>
                        <Navbar expanded={isExpanded} expand="md">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsExpanded(isExpanded ? false : true)}/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link className='mx-2 mx-lg-4 mx-xl-5' href="#home" onClick={handleNavClick}>Home</Nav.Link>
                                <Nav.Link className='mx-2 mx-lg-4 mx-xl-5' href="#about" onClick={handleNavClick}>Sobre mim</Nav.Link>
                                <Nav.Link className='mx-2 mx-lg-4 mx-xl-5' href="#skills" onClick={handleNavClick}>Habilidades</Nav.Link>
                                <Nav.Link className='mx-2 mx-lg-4 mx-xl-5' href="#projects" onClick={handleNavClick}>Projetos</Nav.Link>
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