import { Col, Image } from "react-bootstrap";
import RedesSociaisFooter from "./RedesSociaisFooter";
import Email from '../images/email.svg'
import '../assets/Footer.css'

const Footer = () => {
    return(
        <footer className="d-flex justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center">
                <p><Image className='img-email pe-2' src={Email} /> <span className="span-email">thalesondas0@gmail.com</span></p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <RedesSociaisFooter texto='LinkedIn'/>
                <RedesSociaisFooter texto='GitHub'/>
            </Col>
        </footer>
    )
}

export default Footer;