import Input from "./Input"
import { useEffect, useState } from "react";
import styles from "./Form.module.css"

function Form () {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const CadastrarContato = (e) =>{
        e.preventDefault();
        console.log(`A pessoa de nome ${nome} entrou em contato. Deixou a mensagem: ${mensagem}. O e-mail para retorno é ${email}.`)

    }


    return(
        <div className={styles.containerForm}>
        <form onSubmit={CadastrarContato}>
        <Input typeInput='text' 
        text='Nome Completo' 
        label='nomeContato'
        textoLabel='Digite seu nome completo:' 
        onChange={(e) => setNome(e.target.value)}/>
        
        <Input typeInput='text' 
        text='E-mail' label='emailContato' 
        textoLabel='Digite seu e-mail:' 
        onChange={(e) => setEmail(e.target.value)}/>
        <div><label htmlFor="mensagem">Escreva o motivo para contato:</label></div>
        <div><textarea id="mensagem" cols="30" rows="10" placeholder='Mensagem' onChange={(e) => setMensagem(e.target.value)}></textarea></div>
        <button type="Submit" className={styles.botao}>Enviar</button>
        </form>
        </div>
    )
}

export default Form