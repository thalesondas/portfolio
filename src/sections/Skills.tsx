import { Container, Row, Col } from "react-bootstrap"
import SkillsComponent from "../components/SkillsComponent"
import { useSelector } from 'react-redux' 
import '../assets/styles/MainSkills.css'

interface RootState {
  description: {
    description: string;
    title: string;
  }
}

const Skills = () => {

    const description = useSelector((state: RootState) => state.description.description)
    const title = useSelector((state: RootState) => state.description.title)

    return(
        <Container id="skills" className="main-skills d-flex flex-column justify-content-center align-items-center">
            <Row>
                <h1 data-aos="flip-down" data-aos-duration='1300' className="mb-5 mt-5"><span className="barra-vermelha">|&nbsp;</span>Principais Habilidades</h1>
            </Row>
            <Row className="row-skills">
                <Col className="main-skills-col1 d-flex justify-content-center align-items-center">
                    <Row>
                        <SkillsComponent animationDuration='2000' skill='python'/>
                        <SkillsComponent animationDuration='2300' skill='django'/>
                        <SkillsComponent animationDuration='2500' skill='postgresql'/>
                        <SkillsComponent animationDuration='900' skill='git'/>
                    </Row>
                    <Row>
                        <SkillsComponent animationDuration='2200' skill='typescript'/>
                        <SkillsComponent animationDuration='1500' skill='reactjs'/>
                        <SkillsComponent animationDuration='1000' skill='mongodb'/>
                        <SkillsComponent animationDuration='1600' skill='docker'/>
                    </Row>
                    <Row>
                        <SkillsComponent animationDuration='1700' skill='nestjs'/>
                        <SkillsComponent animationDuration='1000' skill='vuejs'/>
                        <SkillsComponent animationDuration='1300' skill='redux'/>
                        <SkillsComponent animationDuration='2000' skill='jest'/>
                    </Row>
                    <Row>
                        <SkillsComponent animationDuration='1100' skill='nodejs'/>
                        <SkillsComponent animationDuration='1900' skill='bootstrap'/>
                        <SkillsComponent animationDuration='800' skill='ingles'/>
                        <SkillsComponent animationDuration='1500' skill='unittest'/>
                    </Row>
                </Col>
                <Col className="main-skills-col2 d-flex flex-column justify-content-center align-items-center">
                    {description &&
                        <>
                            <h3 data-aos="flip-left" data-aos-duration="1000" className="mb-4">{title}</h3>
                            <p data-aos="flip-left" data-aos-duration="1000" className="justify">&emsp;{description}</p>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Skills
