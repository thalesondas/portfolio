import { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../assets/Main.css'
import ProgrammerLogo from '../images/ProgrammerLogo.png';

const Main = () => {

    const [texto, setTexto] = useState('')
    const [index, setindex] = useState(0)
    const [sendoDeletado, setSendoDeletado] = useState(false)
    const [cursorDigitacao, setCursorDigitacao] = useState('')
    const textoFinal = 'Thales Ondas '

    useEffect(() => {
        if(sendoDeletado === false){
            inserirCaracteres()
        } else if(sendoDeletado === true){
            retirarCaracteres()
        }
    }, [texto, sendoDeletado]);

    const inserirCaracteres = () => {
        if(index < textoFinal.length){
            setTimeout(() => {
                setTexto(textoFinal.substring(0, index + 1))
                setindex(index + 1)    
            }, 400);
        } else if(index === textoFinal.length) {
            setCursorDigitacao('cursor-digitacao')
            setTimeout(() => {
                setCursorDigitacao('')
                setSendoDeletado(true)
            }, 11000)
        }
    }

    const retirarCaracteres = () => {
        if(index > 0){
            setTimeout(() => {
                setTexto(textoFinal.substring(0, index - 1))
                setindex(index - 1)  
            }, 400);
        } else if(index === 0){
            setCursorDigitacao('cursor-digitacao')
            setTimeout(() => {
                setCursorDigitacao('')
                setSendoDeletado(false)
            }, 3000)
        }
    }

    return(
        <main>
            <Container style={{paddingTop: '100px'}}>
                <Row style={{ height: '629px'}}>
                    <Col className='main-home-col1 d-flex justify-content-center align-items-center'>
                        <h1>
                            Olá, eu sou<br />
                            <span>{texto}</span><span className={cursorDigitacao}>|</span><br />
                            <br />
                            Desenvolvedor Full Stack<br />
                            Analista de Dados
                        </h1>
                    </Col>
                    <Col className='main-home-col2 d-flex justify-content-center align-items-center'>
                        <Image src={ProgrammerLogo}></Image>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Main