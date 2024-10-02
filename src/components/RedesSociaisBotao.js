import { Button, Image } from "react-bootstrap";
import '../assets/RedesSociaisBotao.css'
import GitHub from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'
import Curriculo from '../images/curriculo.svg'

const RedesSociaisBotao = (props) => {

    let icone
    let btnRedeSocial
    let linkExterno

    if(props.texto === 'LinkedIn'){
        icone = LinkedIn
        btnRedeSocial = 'btn-linkedin'
        linkExterno = 'https://www.linkedin.com/in/thales-ondas/'
    } else if(props.texto === 'GitHub'){
        icone = GitHub
        btnRedeSocial = 'btn-github'
        linkExterno = 'https://github.com/thalesondas/'
    } else if(props.texto === 'Currículo'){
        icone = Curriculo
        btnRedeSocial = 'btn-curriculo custom-width'
        linkExterno = 'https://thalesondas-curriculum.netlify.app'
    }

    return(
        <Button
            className={`mx-3 px-3 py-2 ${btnRedeSocial}`}
            variant="outline-secondary"
            onClick={() => window.open(linkExterno, '_blank')}>
                <Image className="pe-3" src={icone} draggable="false"/>
                {props.texto} 
        </Button>
    )
}

export default RedesSociaisBotao