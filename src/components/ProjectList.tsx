import { Container, Row, Col } from 'react-bootstrap';
import TelaBurger from '../assets/images/TelaBurger.png'
import TelaPokemon from '../assets/images/TelaPokemon.png'
import TelaMobile from '../assets/images/TelaMobile.jpeg'
import TelaDota2 from '../assets/images/TelaDota2.png'
import ProjectCard from './ProjectCard';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  siteLink: string;
  githubLink: string;
  delay: number;
}

const projects: Project[] = [
  {
    title: "Rock 'n' Roll Burger",
    description: "Rock 'n' Roll Burger é um site interativo de uma hamburgueria fictícia, onde os usuários podem explorar o cardápio, adicionar itens ao carrinho e fazer pedidos de forma prática. O projeto combina tecnologias de front-end e back-end para oferecer uma experiência completa de navegação e gerenciamento de pedidos.",
    image: TelaBurger,
    technologies: ['JavaScript', 'React.js', 'React Bootstrap', 'Bootstrap', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Fetch API', 'JWT', 'Redis'],
    siteLink: 'https://rocknrollburger.vercel.app/',
    githubLink: 'https://github.com/thalesondas/burger',
    delay: 250
  },
  {
    title: 'PokéDex',
    description: 'Este projeto é uma PokéDex digital, desenvolvida utilizando React.js, que permite aos usuários visualizar e explorar diferentes Pokémon de forma intuitiva e interativa. A aplicação se conecta à PokéAPI, consumindo dados em tempo real para exibir informações detalhadas sobre cada Pokémon, como nome, tipo, habilidades e imagem.',
    image: TelaPokemon,
    technologies: ['JavaScript', 'React.js', 'React Bootstrap', 'Bootstrap', 'Redux Toolkit', 'Fetch API' ],
    siteLink: 'https://pokedex-pkmapi.netlify.app/',
    githubLink: 'https://github.com/thalesondas/reactjs-api-pokemon',
    delay: 400
  },
  {
    title: 'Satisfying.you',
    description: 'O Satisfying.you é um aplicativo móvel para Android e iOS, criado para coletar feedback de clientes por meio de pesquisas de satisfação. Com uma interface simples e intuitiva, permite que as empresas identifiquem pontos de melhoria em seus produtos, serviços e processos. As pesquisas podem ser personalizadas, e os resultados são fornecidos em tempo real, auxiliando na tomada de decisões e no aprimoramento contínuo da experiência do cliente. (O aplicativo não está publicado)',
    image: TelaMobile,
    technologies: ['JavaScript', 'React Native', 'Redux Toolkit', 'Firebase'],
    siteLink: '',
    githubLink: 'https://github.com/thalesondas/projetomobile',
    delay: 550
  },
  {
    title: 'Dota 2',
    description: 'Este projeto foi desenvolvido para buscar e exibir informações dos heróis de Dota 2 utilizando dados da API OpenDota. A aplicação acessa a API para obter os nomes e tipos de ataque (corpo a corpo ou à distância) de cada herói do jogo. Os dados são organizados e retornados ao usuário em forma de uma tabela clara e fácil de visualizar, permitindo uma consulta rápida e eficiente sobre as características básicas dos heróis.',
    image: TelaDota2,
    technologies: ['JavaScript', 'React.js', 'React Bootstrap', 'Bootstrap', 'Context API', 'Fetch API' ],
    siteLink: 'https://dota2-api.netlify.app/',
    githubLink: 'https://github.com/thalesondas/versao-api-dota2',
    delay: 250
  }
];

const ProjectList = () => {
  return (
    <Container className="project-list">
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectList;
