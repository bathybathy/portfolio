import axios from "axios";
import {useEffect, useState} from 'react'

import styles from './Foto.module.css'

function Foto () {
    async function setup(){
        const {data} = await axios.get('https://api.github.com/users/bathybathy')
        const pegarFoto = data.avatar_url;
        setFoto(pegarFoto)
        
    }

    const [foto, setFoto] = useState('')
    useEffect( () => {
        setup()
    }, []);

    return(
        <div><img src={foto} className={styles.foto} alt="foto de perfil do git" /></div>
    )
}

export default Foto