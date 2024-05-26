import { Button, Image } from "react-bootstrap";
import '../assets/RedesSociaisBotao.css'
import GitHub from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'

const RedesSociaisBotao = (props) => {

    const icone = props.texto === 'LinkedIn' ? LinkedIn : GitHub
    const btnRedeSocial = props.texto === 'LinkedIn' ? 'btn-linkedin' : 'btn-github'

    return(
        <Button
            className={`mx-3 px-3 py-2 ${btnRedeSocial}`}
            variant="outline-secondary">
                <Image
                    className="pe-3" src={icone}/> {props.texto} 
        </Button>
    )
}

export default RedesSociaisBotao