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
        </Card.Body>
      </Card>     
    )
}

export default ProjetoCard;