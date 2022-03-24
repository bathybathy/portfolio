import axios from "axios";
import {useEffect, useState} from 'react'
import styles from './Bio.module.css'

function Bio () {
    async function setup(){
        const {data} = await axios.get('https://api.github.com/users/bathybathy')
        const pegarBio = data.bio;
        setBio(pegarBio)
        
    }

    const [bio, setBio] = useState('')
    useEffect( () => {
        setup()
    }, []);

    return(
        <div><h3>{bio}</h3></div>
    )
}

export default Bio