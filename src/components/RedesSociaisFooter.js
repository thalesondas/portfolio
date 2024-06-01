import { Button, Image } from "react-bootstrap";
import '../assets/RedesSociaisFooter.css'
import GitHub from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'

const RedesSociaisFooter = (props) => {

    let icone
    let btnRedeSocial

    if(props.texto === 'LinkedIn'){
        icone = LinkedIn
        btnRedeSocial = 'btn-linkedin'
    } else if(props.texto === 'GitHub'){
        icone = GitHub
        btnRedeSocial = 'btn-github'
    }

    return(
        <Button
            className={`m-3 ${btnRedeSocial}`}
            variant="outline-secondary">
                <Image
                    className="img-footer" src={icone}/>
        </Button>
    )
}

export default RedesSociaisFooter