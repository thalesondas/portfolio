import { Button, Image } from "react-bootstrap";
import '../assets/styles/RedesSociaisBotao.css'
import GitHub from '../assets/images/github.svg'
import LinkedIn from '../assets/images/linkedin.svg'
import Curriculo from '../assets/images/curriculo.svg'

interface RedesSociaisBotaoProps {
  texto: 'LinkedIn' | 'GitHub' | 'Currículo';
}

const RedesSociaisBotao = ({ texto }: RedesSociaisBotaoProps) => {

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
    } else if(texto === 'Currículo'){
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
                {texto} 
        </Button>
    )
}

export default RedesSociaisBotao