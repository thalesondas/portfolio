import { Container, Image } from "react-bootstrap"
import Html from '../images/html.svg'
import Css from '../images/css.svg'
import JavaScript from '../images/javascript.svg'
import ReactJS from '../images/reactjs.svg'
import Bootstrap from '../images/bootstrap.svg'
import PostgreSql from '../images/postgresql.svg'
import MongoDB from '../images/mongodb.svg'
import Git from '../images/git.svg'
import Ingles from '../images/ingles.svg'
import Python from '../images/python.svg'
import PowerBI from '../images/powerbi.svg'
import Excel from '../images/excel.svg'
import '../assets/HabilidadesComponente.css'

const HabilidadesComponente = (props) => {

    let habilidade;

    if(props.habilidade === 'html'){
        habilidade = Html
    } else if(props.habilidade === 'css'){
        habilidade = Css
    } else if(props.habilidade === 'javascript'){
        habilidade = JavaScript
    } else if(props.habilidade === 'reactjs'){
        habilidade = ReactJS
    } else if(props.habilidade === 'bootstrap'){
        habilidade = Bootstrap
    } else if(props.habilidade === 'postgresql'){
        habilidade = PostgreSql
    } else if(props.habilidade === 'mongodb'){
        habilidade = MongoDB
    } else if(props.habilidade === 'git'){
        habilidade = Git
    } else if(props.habilidade === 'ingles'){
        habilidade = Ingles
    } else if(props.habilidade === 'python'){
        habilidade = Python
    } else if(props.habilidade === 'powerbi'){
        habilidade = PowerBI
    } else if(props.habilidade === 'excel'){
        habilidade = Excel
    }

    return(
        <Container className="container-habilidade">
            <Image className={`img-habilidade ${props.habilidade}`} src={habilidade}/>
        </Container>
    )
}

export default HabilidadesComponente