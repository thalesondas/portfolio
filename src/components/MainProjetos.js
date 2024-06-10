import { Container, Row, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-bootstrap/Carousel';
import TelaPokemon from '../images/TelaPokemon.png'
import '../assets/MainProjetos.css'

const MainProjetos = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return(
        <Container id='projetos' className='main-projetos d-flex flex-column justify-content-center align-items-center'>
            <Row>
                <h1 data-aos='zoom-out-down' className='d-flex justify-content-center align-items-center mb-5'><span className="barra-vermelha">|&nbsp;</span>Projetos</h1>
            </Row>
            <Row data-aos='zoom-out-down' data-aos-duration='1500' className='d-flex justify-content-center align-items-center'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Image className='w-100' src={TelaPokemon} />
                        <Carousel.Caption className='text-black'>
                        <h3>Projeto 1</h3>
                        <p>Descrição do projeto 1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className='w-100' src={TelaPokemon} />
                        <Carousel.Caption className='text-black'>
                        <h3>Projeto 2</h3>
                        <p>Descrição do projeto 2</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}

export default MainProjetos;