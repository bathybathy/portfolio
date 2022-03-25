import axios from "axios";
import {useEffect, useState} from 'react'
import styles from './GridRepositorios.module.css'
import { TratamentoErro } from "../TratamentoErro";
import { FaGithub } from "react-icons/fa";

function GridRepositorios() {
    const [titulo, setTitulo] = useState([])
    const [link, setLink] = useState([])

    async function setup(){
        const {data} = await axios.get('https://api.github.com/users/bathybathy/repos')
        console.log(data)
        let nomesData = data.map(e => e.name)
        setTitulo(nomesData)  
        let linksData = data.map(e => e.html_url) 
        setLink(linksData) 
        console.log(nomesData, 'titulo')
        console.log(linksData, 'link')  
    }

    useEffect( () => {
        setup()
    }, []);
    const verificarObjeto = () =>{

        if(titulo.length && link.length){
          return true;
        }else{
          return false;
        }
        
     }
    
    return(
        <div>
        {verificarObjeto () ? 
        (<div className={styles.containerRepo}>
            <h2>Repositórios</h2>
            <div className={styles.listaRepo}>
                <ul className={styles.ulRepo}>
                {titulo.map((titulo, index, link) => <li key={index}> <div key={index} className={styles.liRepo}>
                    <h4 className={styles.h4Repo}>Projeto:</h4><span>{titulo}</span> 
                    <h4 className={styles.h4Repo}>Link:</h4> <span><a key={index} href={link} className={styles.pRepoLink}><FaGithub /></a></span></div></li>)} 
                </ul>
            </div>
            </div>
        ): ( <TratamentoErro />)}
        </div>
    )
}

export default GridRepositorios;