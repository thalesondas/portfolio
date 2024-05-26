import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MainHome from './components/MainHome'
import MainSobre from './components/MainSobre'

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MainHome />
        <MainSobre />
      </main>
    </>
  )
}

export default App