import Nav from './Nav'
import styles from './Header.module.css'

function Header (styles){

    return(
    <header>
        <nav>
            <ul>
               <Nav link='/' text='Perfil' /> 
               <Nav link='/contato' text='Contato' /> 
               <Nav link='/repostiorios' text='Repositórios'/> 
            </ul>
        </nav>
    </header> )
}

export default Header