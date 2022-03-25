import { FaBriefcase } from "react-icons/fa";
import axios from "axios";
import {useEffect, useState} from 'react'
import styles from './Bio.module.css'

function Workplace ({dados}) {
    
    const {company} = dados

    return(
        <div><h3><FaBriefcase className={styles.locIcone}/>{company}</h3></div>
    )
}

export default Workplace