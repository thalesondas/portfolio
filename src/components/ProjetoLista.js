import { Container, Row, Col } from 'react-bootstrap';
import TelaBurger from '../images/TelaBurger.png'
import TelaPokemon from '../images/TelaPokemon.png'
import TelaMobile from '../images/TelaMobile.jpeg'
import TelaDota2 from '../images/TelaDota2.png'
import ProjetoCard from './ProjetoCard';

const projetos = [
  {
    titulo: "Rock 'n' Roll Burger",
    descricao: "Rock 'n' Roll Burger é um site interativo de uma hamburgueria fictícia, onde os usuários podem explorar o cardápio, adicionar itens ao carrinho e fazer pedidos de forma prática. O projeto combina tecnologias de front-end e back-end para oferecer uma experiência completa de navegação e gerenciamento de pedidos.",
    imagem: TelaBurger,
    tecnologias: ['JavaScript', 'React.js', 'React Bootstrap', 'Bootstrap', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Fetch API'],
    linkSite: 'https://rocknrollburger.vercel.app/',
    linkGithub: 'https://github.com/thalesondas/burger',
    delay: 250
  },
  {
    titulo: 'PokéDex',
    descricao: 'Este projeto é uma PokéDex digital, desenvolvida utilizando React.js, que permite aos usuários visualizar e explorar diferentes Pokémon de forma intuitiva e interativa. A aplicação se conecta à PokéAPI, consumindo dados em tempo real para exibir informações detalhadas sobre cada Pokémon, como nome, tipo, habilidades e imagem.',
    imagem: TelaPokemon,
    tecnologias: ['JavaScript', 'React.js', 'React Bootstrap', 'Bootstrap', 'Redux Toolkit', 'Fetch API' ],
    linkSite: 'https://pokedex-pkmapi.netlify.app/',
    linkGithub: 'https://github.com/thalesondas/reactjs-api-pokemon',
    delay: 400
  },
  {
    titulo: 'Satisfying.you',
    descricao: 'O Satisfying.you é um aplicativo móvel para Android e iOS, criado para coletar feedback de clientes por meio de pesquisas de satisfação. Com uma interface simples e intuitiva, permite que as empresas identifiquem pontos de melhoria em seus produtos, serviços e processos. As pesquisas podem ser personalizadas, e os resultados são fornecidos em tempo real, auxiliando na tomada de decisões e no aprimoramento contínuo da experiência do cliente. (O aplicativo não está publicado)',
    imagem: TelaMobile,
    tecnologias: ['JavaScript', 'React Native', 'Redux Toolkit', 'Firebase'],
    linkSite: '',
    linkGithub: 'https://github.com/thalesondas/projetomobile',
    delay: 550
  },
  {
    titulo: 'Dota 2',
    descricao: 'Este projeto foi desenvolvido para buscar e exibir informações dos heróis de Dota 2 utilizando dados da API OpenDota. A aplicação acessa a API para obter os nomes e tipos de ataque (corpo a corpo ou à distância) de cada herói do jogo. Os dados são organizados e retornados ao usuário em forma de uma tabela clara e fácil de visualizar, permitindo uma consulta rápida e eficiente sobre as características básicas dos heróis.',
    imagem: TelaDota2,
    tecnologias: ['JavaScript', 'React.js', 'React Bootstrap', 'Bootstrap', 'Context API', 'Fetch API' ],
    linkSite: 'https://dota2-api.netlify.app/',
    linkGithub: 'https://github.com/thalesondas/versao-api-dota2',
    delay: 250
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
