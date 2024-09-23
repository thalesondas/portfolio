import { Container, Row, Col } from 'react-bootstrap';
import Placeholder from '../images/placeholder.png'
import ProjetoCard from './ProjetoCard';

const projetos = [
  {
    titulo: 'Projeto 1',
    descricao: 'Descrição do projeto 1',
    imagem: Placeholder,
    tecnologias: ['Tecnologia 1', 'Tecnologia 2', 'Tecnologia 3'],
  },
  {
    titulo: 'Projeto 2',
    descricao: 'Descrição do projeto 2',
    imagem: Placeholder,
    tecnologias: ['Tecnologia 4', 'Tecnologia 5', 'Tecnologia 6'],
  },
  {
    titulo: 'Projeto 3',
    descricao: 'Descrição do projeto 3',
    imagem: Placeholder,
    tecnologias: ['Tecnologia 7', 'Tecnologia 8', 'Tecnologia 9'],
  }
];

const ProjetoLista = () => {
  return (
    <Container className="projeto-lista">
      <Row>
        {projetos.map((projeto, index) => (
          <Col key={index} md={4} className="mb-4">
            <ProjetoCard projeto={projeto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjetoLista;
