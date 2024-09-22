import { Button, Image } from "react-bootstrap";
import '../assets/RedesSociaisFooter.css'
import GitHub from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'

const RedesSociaisFooter = (props) => {

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
    }

    return(
        <Button
            className={`m-3 ${btnRedeSocial}`}
            variant="outline-secondary"
            onClick={() => window.open(linkExterno, '_blank')}>
                <Image
                    className="img-footer" src={icone}/>
        </Button>
    )
}

export default RedesSociaisFooter