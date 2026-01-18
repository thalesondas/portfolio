import { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './sections/Header'
import Home from './sections/Home'
import Sobre from './sections/Sobre'
import Habilidades from './sections/Habilidades';
import Projetos from './sections/Projetos';
import Footer from './sections/Footer';
import ParticlesComponent from './particles';
import './assets/styles/App.css';

const App = () => {

  useEffect(() => {
    document.title = 'Meu Portfólio - Thales Ondas';
  }, []);

  return (
    <>
      <Provider store={store}>
        <Header />
        <main>
          <Home />
          <Sobre />
          <Habilidades />
          <Projetos />
        </main>
        <Footer />
      </Provider>
      <ParticlesComponent id='particles' />
    </>
  )
}

export default App