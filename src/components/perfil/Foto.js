import axios from "axios";
import {useEffect, useState} from 'react'

import styles from './Foto.module.css'

function Foto ({dados}) {
    
    console.log(dados, "aqui")

    const {avatar_url} = dados 

    return(
        <div><img src={avatar_url} className={styles.foto} alt="foto de perfil do git" /></div>
    )
}

export default Foto