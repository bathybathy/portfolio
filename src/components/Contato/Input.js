import styles from "./Input.module.css"

function Input ({typeInput, text, label, textoLabel, onChange}) {

    
    return(
        <div className={styles.inputDiv}>
            <div>
                <label htmlFor={label}>{textoLabel}</label>
            </div>
            <div>
                <input type={typeInput} placeholder={text} id={label} className={styles.inputForm} onChange={onChange} />
            </div>
        </div>
    )
}

export default Input