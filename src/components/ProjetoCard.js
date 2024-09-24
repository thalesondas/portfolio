import { Card, Badge } from 'react-bootstrap';
import '../assets/ProjetoCard.css'

const ProjetoCard = ({ projeto }) => {
    return(
        <Card className="projeto-card my-1">
        <Card.Img variant="top" src={projeto.imagem} alt={projeto.titulo} className="projeto-imagem" />
        <Card.Body>
          <Card.Title className="projeto-titulo">{projeto.titulo}</Card.Title>
          <Card.Text className="projeto-descricao">{projeto.descricao}</Card.Text>
          <div className="projeto-tecnologias">
            {projeto.tecnologias.map((tec, index) => (
              <Badge key={index} pill className="tec-badge">{tec}</Badge>
            ))}
          </div>
          <div>
            <Badge className="px-3 mt-2 mb-1 me-2 link-badge" bg="secondary" pill><a href={projeto.linkSite} target="_blank" rel="noopener noreferrer">Ir para o site</a></Badge>
            <Badge className="px-3 link-badge" bg="secondary" pill><a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">Ir para o código no GitHub</a></Badge>
          </div>
        </Card.Body>
      </Card>     
    )
}

export default ProjetoCard;