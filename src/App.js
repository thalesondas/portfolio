import { Provider } from 'react-redux'
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MainHome from './components/MainHome'
import MainSobre from './components/MainSobre'
import MainHabilidades from './components/MainHabilidades';
import MainProjetos from './components/MainProjetos';
import Footer from './components/Footer';
import ParticlesComponent from './particles';
import './App.css';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main>
          <MainHome />
          <MainSobre />
          <MainHabilidades />
          <MainProjetos />
        </main>
        <Footer />
      </Provider>
      <ParticlesComponent id='particles' />
    </>
  )
}

export default App