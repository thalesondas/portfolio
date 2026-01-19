import { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'aos/dist/aos.css';
import SocialMediaButton from '../components/SocialMediaButton';
import '../assets/styles/MainHome.css'
import FotoPerfil from '../assets/images/FotoPerfil.jpeg';

const Home = () => {

    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingCursor, setTypingCursor] = useState('')
    const finalText = 'Thales Ondas '

    const insertCharacters = useCallback(() => {
        if (index < finalText.length) {
            setTimeout(() => {
                setText(finalText.substring(0, index + 1));
                setIndex(index + 1);
            }, 300);
        } else if (index === finalText.length) {
            setTypingCursor('typing-cursor');
            setTimeout(() => {
                setTypingCursor('');
                setIsDeleting(true);
            }, 5000);
        }
    }, [index, finalText]);

    const removeCharacters = useCallback(() => {
        if (index > 0) {
            setTimeout(() => {
                setText(finalText.substring(0, index - 1));
                setIndex(index - 1);
            }, 300);
        } else if (index === 0) {
            setTypingCursor('typing-cursor');
            setTimeout(() => {
                setTypingCursor('');
                setIsDeleting(false);
            }, 2000);
        }
    }, [index, finalText]);

    useEffect(() => {
        if (!isDeleting) {
            insertCharacters();
        } else {
            removeCharacters();
        }
    }, [text, isDeleting, insertCharacters, removeCharacters]);

    return(
        <Container id='home' className="main-home-container d-flex flex-column justify-content-center align-items-center">
            <Row className='w-100'>
                <Col data-aos="fade-right" data-aos-duration="1500" md={7} className='main-home-col1 d-flex flex-column justify-content-center align-items-center'>
                    <h1>
                        Olá, eu sou<br />
                        <span className='text-span'>{text}</span><span className={`cursor-span ${typingCursor}`}>|</span><br />
                        <div className='mt-4'><span className='circle-span'>•</span> Desenvolvedor Full Stack<br /></div>
                    </h1>
                    <div className='mt-4 mt-md-5'>
                        <SocialMediaButton text='LinkedIn' />
                        <SocialMediaButton text='GitHub' />
                    </div>
                </Col>
                <Col data-aos="fade-left" data-aos-duration="1500" md={5} className='main-home-col2 d-flex justify-content-center justify-content-xl-start align-items-center'>
                    <Image className='bubble' src={FotoPerfil} draggable="false"></Image>
                </Col>
            </Row>
        </Container>
    )
}

export default Home