import { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'aos/dist/aos.css';
import RedesSociaisBotao from './RedesSociaisBotao';
import '../assets/MainHome.css'
import FotoPerfil from '../images/FotoPerfil.jpeg';

const MainHome = () => {

    const [texto, setTexto] = useState('')
    const [index, setIndex] = useState(0)
    const [sendoDeletado, setSendoDeletado] = useState(false)
    const [cursorDigitacao, setCursorDigitacao] = useState('')
    const textoFinal = 'Thales Ondas '

    const inserirCaracteres = useCallback(() => {
        if (index < textoFinal.length) {
            setTimeout(() => {
                setTexto(textoFinal.substring(0, index + 1));
                setIndex(index + 1);
            }, 300);
        } else if (index === textoFinal.length) {
            setCursorDigitacao('cursor-digitacao');
            setTimeout(() => {
                setCursorDigitacao('');
                setSendoDeletado(true);
            }, 5000);
        }
    }, [index, textoFinal]);

    const retirarCaracteres = useCallback(() => {
        if (index > 0) {
            setTimeout(() => {
                setTexto(textoFinal.substring(0, index - 1));
                setIndex(index - 1);
            }, 300);
        } else if (index === 0) {
            setCursorDigitacao('cursor-digitacao');
            setTimeout(() => {
                setCursorDigitacao('');
                setSendoDeletado(false);
            }, 2000);
        }
    }, [index, textoFinal]);

    useEffect(() => {
        if (!sendoDeletado) {
            inserirCaracteres();
        } else {
            retirarCaracteres();
        }
    }, [texto, sendoDeletado, inserirCaracteres, retirarCaracteres]);

    return(
        <Container id='home' className="main-home-container d-flex flex-column justify-content-center align-items-center">
            <Row className='w-100'>
                <Col data-aos="fade-right" data-aos-duration="1500" md={7} className='main-home-col1 d-flex flex-column justify-content-center align-items-center'>
                    <h1>
                        Olá, eu sou<br />
                        <span className='span-texto'>{texto}</span><span className={`span-cursor ${cursorDigitacao}`}>|</span><br />
                        <div className='mt-4'><span className='span-circulo'>•</span> Desenvolvedor Full Stack<br /></div>
                    </h1>
                    <div className='mt-4 mt-md-5'>
                        <RedesSociaisBotao texto='LinkedIn' />
                        <RedesSociaisBotao texto='GitHub' />
                    </div>
                </Col>
                <Col data-aos="fade-left" data-aos-duration="1500" md={5} className='main-home-col2 d-flex justify-content-center justify-content-xl-start align-items-center'>
                    <Image className='bolha' src={FotoPerfil} draggable="false"></Image>
                </Col>
            </Row>
        </Container>
    )
}

export default MainHome