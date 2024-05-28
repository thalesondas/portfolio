import { Provider } from 'react-redux'
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MainHome from './components/MainHome'
import MainSobre from './components/MainSobre'
import MainHabilidades from './components/MainHabilidades';

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
        </main>
      </Provider>
    </>
  )
}

export default App