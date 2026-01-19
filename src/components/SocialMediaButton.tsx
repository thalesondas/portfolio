import { Button, Image } from "react-bootstrap";
import '../assets/styles/SocialMediaButton.css'
import GitHub from '../assets/images/github.svg'
import LinkedIn from '../assets/images/linkedin.svg'
import Curriculo from '../assets/images/curriculo.svg'

interface SocialMediaButtonProps {
  text: 'LinkedIn' | 'GitHub' | 'Currículo';
}

const SocialMediaButton = ({ text }: SocialMediaButtonProps) => {

    let icon: string = ''
    let socialMediaBtn: string = ''
    let externalLink: string = ''

    if(text === 'LinkedIn'){
        icon = LinkedIn
        socialMediaBtn = 'btn-linkedin'
        externalLink = 'https://www.linkedin.com/in/thales-ondas/'
    } else if(text === 'GitHub'){
        icon = GitHub
        socialMediaBtn = 'btn-github'
        externalLink = 'https://github.com/thalesondas/'
    } else if(text === 'Currículo'){
        icon = Curriculo
        socialMediaBtn = 'btn-resume custom-width'
        externalLink = 'https://thalesondas-curriculum.netlify.app'
    }

    return(
        <Button
            className={`mx-3 px-3 py-2 ${socialMediaBtn}`}
            variant="outline-secondary"
            onClick={() => window.open(externalLink, '_blank')}>
                <Image className="pe-3" src={icon} draggable="false"/>
                {text} 
        </Button>
    )
}

export default SocialMediaButton