import { Button, Image } from "react-bootstrap";
import '../assets/RedesSociaisBotao.css'
import GitHub from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'
import Curriculo from '../images/curriculo.svg'

const RedesSociaisBotao = (props) => {

    let icone
    let btnRedeSocial
    let customWidth = ''

    if(props.texto === 'LinkedIn'){
        icone = LinkedIn
        btnRedeSocial = 'btn-linkedin'
    } else if(props.texto === 'GitHub'){
        icone = GitHub
        btnRedeSocial = 'btn-github'
    } else if(props.texto === 'Currículo'){
        icone = Curriculo
        btnRedeSocial = 'btn-curriculo'
        customWidth = 'custom-width'
    }

    return(
        <Button
            className={`mx-3 px-3 py-2 ${btnRedeSocial} ${customWidth}`}
            variant="outline-secondary">
                <Image
                    className="pe-3" src={icone}/> {props.texto} 
        </Button>
    )
}

export default RedesSociaisBotao