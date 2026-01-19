import { Col, Image } from "react-bootstrap";
import SocialMediaFooter from "../components/SocialMediaFooter";
import Email from '../assets/images/email.svg'
import '../assets/styles/Footer.css'

const Footer = () => {
    return(
        <footer className="d-flex justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center">
                <p><Image className='img-email pe-2' src={Email} draggable="false" /> <span className="span-email">thalesondas0@gmail.com</span></p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <SocialMediaFooter text='LinkedIn'/>
                <SocialMediaFooter text='GitHub'/>
            </Col>
        </footer>
    )
}

export default Footer;