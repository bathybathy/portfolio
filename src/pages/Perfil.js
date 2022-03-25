import Foto from '../components/perfil/Foto'
import Bio from '../components/perfil/Bio'
import styles from './Perfil.module.css'
import Location from '../components/perfil/Location'
import Workplace from '../components/perfil/Workplace'

function Perfil ({dados}){

    return(
        <main>
            <div className={styles.containerPerfil}>
            <Foto dados={dados}/>
            <div className={styles.containerBio}>
                <h1>Olá! Meu nome é Nathalia.</h1>
                <Bio dados={dados}/>
                <div className={styles.containerIcones}>
                <Location dados={dados} />
                <Workplace dados={dados} />
                </div>
                
            </div>
            </div>
        </main>
    )
}

export default Perfil