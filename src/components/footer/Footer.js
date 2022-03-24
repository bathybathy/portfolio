import styles from './Footer.module.css'
import Nav from '../header/Nav'
// import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'



function Footer () {

    // const insta = <FontAwesomeObject icon={['fab', 'instagram']} />
    return(
        <ul>
        <Nav link='https://www.instagram.com/nathybathy/' text='Insta' />
        </ul>
    )
}

export default Footer