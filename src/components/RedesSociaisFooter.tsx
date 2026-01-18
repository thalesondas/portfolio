import { Button, Image } from "react-bootstrap";
import '../assets/styles/RedesSociaisFooter.css'
import GitHub from '../assets/images/github.svg'
import LinkedIn from '../assets/images/linkedin.svg'

interface RedesSociaisFooterProps {
  texto: 'LinkedIn' | 'GitHub';
}

const RedesSociaisFooter = ({ texto }: RedesSociaisFooterProps) => {

    let icone: string = ''
    let btnRedeSocial: string = ''
    let linkExterno: string = ''

    if(texto === 'LinkedIn'){
        icone = LinkedIn
        btnRedeSocial = 'btn-linkedin'
        linkExterno = 'https://www.linkedin.com/in/thales-ondas/'
    } else if(texto === 'GitHub'){
        icone = GitHub
        btnRedeSocial = 'btn-github'
        linkExterno = 'https://github.com/thalesondas/'
    }

    return(
        <Button
            className={`m-3 ${btnRedeSocial}`}
            variant="outline-secondary"
            onClick={() => window.open(linkExterno, '_blank')}>
                <Image className="img-footer" src={icone} draggable="false"/>
        </Button>
    )
}

export default RedesSociaisFooter