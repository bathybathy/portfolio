import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';

import Contato from './pages/Contato'
import Repositorios from './pages/Repositorios'
import Perfil from './pages/Perfil'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Perfil />} />
        <Route path='/repositorios' element={<Repositorios />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
