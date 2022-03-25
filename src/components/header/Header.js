import Nav from './Nav'
import styles from './Header.module.css'

function Header (){

    return(
    <header>
        <nav>
            <ul className={styles.ulHeader}>
               <Nav link='/' text='Perfil' /> 
               <Nav link='/contato' text='Contato' /> 
               <Nav link='/repositorios' text='Repositórios'/> 
            </ul>
        </nav>
    </header> )
}

export default Header