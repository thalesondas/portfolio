import { Container, Row, Col } from 'react-bootstrap';
import Placeholder from '../images/placeholder.png'
import ProjetoCard from './ProjetoCard';

const projetos = [
  {
    titulo: 'Placeholder 1',
    descricao: 'Descrição placeholder (a imagem também é placeholder)',
    imagem: Placeholder,
    tecnologias: ['Tecnologia 1', 'Tecnologia 2', 'Tecnologia 3'],
    linkSite: 'https://www.google.com/',
    linkGithub: 'https://www.google.com/'
  },
  {
    titulo: 'Placeholder 2',
    descricao: 'Descrição placeholder (a imagem também é placeholder)',
    imagem: Placeholder,
    tecnologias: ['Tecnologia 4', 'Tecnologia 5', 'Tecnologia 6'],
    linkSite: 'https://www.google.com/',
    linkGithub: 'https://www.google.com/'
  },
  {
    titulo: 'Placeholder 3',
    descricao: 'Descrição placeholder (a imagem também é placeholder) blablablablabla blablablablabla blablablablabla blablablablabla',
    imagem: Placeholder,
    tecnologias: ['Tecnologia 7', 'Tecnologia 8', 'Tecnologia 9'],
    linkSite: 'https://www.google.com/',
    linkGithub: 'https://www.google.com/'
  },
  {
    titulo: 'Placeholder 4',
    descricao: 'Descrição placeholder (a imagem também é placeholder)',
    imagem: Placeholder,
    tecnologias: ['Tecnologia 10', 'Tecnologia 11', 'Tecnologia 12'],
    linkSite: 'https://www.google.com/',
    linkGithub: 'https://www.google.com/'
  },
  {
    titulo: 'Placeholder 5',
    descricao: 'Descrição placeholder (a imagem também é placeholder)',
    imagem: Placeholder,
    tecnologias: ['Tecnologia 13', 'Tecnologia 14', 'Tecnologia 15'],
    linkSite: 'https://www.google.com/',
    linkGithub: 'https://www.google.com/'
  }
];

const ProjetoLista = () => {
  return (
    <Container className="projeto-lista">
      <Row>
        {projetos.map((projeto, index) => (
          <Col key={index} md={4} className="mb-4">
            <ProjetoCard i={index} projeto={projeto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjetoLista;
