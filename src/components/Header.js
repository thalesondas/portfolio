import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import '../assets/Header.css';

const Header = () => {
    return (
        <header>
            <Container className='py-3'>
                <Row className='d-flex align-items-center'>
                    <Col>
                        <h1>Imagem de alguma coisa</h1>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-end'>
                        <Navbar>
                            <Nav>
                                <Nav.Link href="#">Algo 1</Nav.Link>
                                <Nav.Link href="#">Algo 2</Nav.Link>
                                <Nav.Link href="#">Algo 3</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header