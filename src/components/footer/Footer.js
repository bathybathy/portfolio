import styles from './Footer.module.css'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import NavFooter from './NavFooter';

function Footer () {

    
    return(
        <nav>
            <ul>
            <div className={styles.containerFooter}>
                <NavFooter link='https://www.instagram.com/nathybathy/' text={<FaInstagram />} />
                <NavFooter link='https://www.facebook.com/unavailableurl' text={<FaFacebook />} />
                <NavFooter link='https://www.linkedin.com/in/nathalia-duarte-a12076231/' text={<FaLinkedinIn />} />
                <NavFooter link='https://github.com/bathybathy' text={<FaGithub />} />
            </div>
            </ul>
        </nav>
    )
}

export default Footer