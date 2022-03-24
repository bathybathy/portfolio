import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import styles from './Header.module.css'

function Nav ({link, text}) {

    return(
        <li><Link to={link} className={styles.lista}>{text}</Link> </li>
    )
}

export default Nav