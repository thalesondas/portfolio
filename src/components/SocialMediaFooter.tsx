import { Button, Image } from "react-bootstrap";
import '../assets/styles/SocialMediaFooter.css'
import GitHub from '../assets/images/github.svg'
import LinkedIn from '../assets/images/linkedin.svg'

interface SocialMediaFooterProps {
  text: 'LinkedIn' | 'GitHub';
}

const SocialMediaFooter = ({ text }: SocialMediaFooterProps) => {

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
    }

    return(
        <Button
            className={`m-3 ${socialMediaBtn}`}
            variant="outline-secondary"
            onClick={() => window.open(externalLink, '_blank')}>
                <Image className="img-footer" src={icon} draggable="false"/>
        </Button>
    )
}

export default SocialMediaFooter