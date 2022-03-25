import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';

import Contato from './pages/Contato'
import Repositorios from './pages/Repositorios'
import Perfil from './pages/Perfil'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useEffect, useState } from "react";
import axios from "axios";
import { TratamentoErro } from "./components/TratamentoErro";

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'




function App() {

  const [dados, setDados] = useState({})
  
  const getDados = async () =>{
    try{
      const {data} = await axios.get('https://api.github.com/users/bathybathy')
      
      setDados(data)}
    catch(erro){
         console.log(erro)
    }
  }
  useEffect(() =>{
    getDados();
  }, [])

  const verificarObjeto = () =>{

    if(Object.keys(dados).length){
      return true;
    }else{
      return false;
    }
    
  }

  return (
    <div className="App">
      {verificarObjeto () ? (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Perfil dados={dados} />} />
        <Route path='/repositorios' element={<Repositorios />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    ) : ( <TratamentoErro />)}
    </div>
  );
}

export default App;
