import { Col } from "react-bootstrap";
import RedesSociaisFooter from "./RedesSociaisFooter";
import '../assets/Footer.css'

const Footer = () => {
    return(
        <footer className="d-flex justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center">
                <p>E-mail para contato: <span className="span-email">thalesondas0@gmail.com</span></p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <RedesSociaisFooter texto='LinkedIn'/>
                <RedesSociaisFooter texto='GitHub'/>
            </Col>
        </footer>
    )
}

export default Footer;