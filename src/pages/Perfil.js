import Foto from '../components/perfil/Foto'
import Bio from '../components/perfil/Bio'
import styles from './Perfil.module.css'

function Perfil (){

    return(
        <main>
            <div className={styles.container}>
            <Foto />
            <div>
                <h1>Olá! Meu nome é Nathalia.</h1>
                <Bio />
            </div>
            </div>
        </main>
    )
}

export default Perfil