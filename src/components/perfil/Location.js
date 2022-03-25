import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import {useEffect, useState} from 'react'
import styles from './Bio.module.css'

function Location ({dados}) {
    
    const {location} = dados

    return(
        <div><h3><FaMapMarkerAlt className={styles.locIcone}/>{location}</h3></div>
    )
}

export default Location