import axios from "axios";
import {useEffect, useState} from 'react'
import styles from './Bio.module.css'

function Bio ({dados}) {
    
    const {bio} = dados

    return(
        <div><h3>{bio}</h3></div>
    )
}

export default Bio