
import styles from './FormContato.module.css'

export default function FormContato(){
    return(
    <form className={styles.formRodape}>
        <div className={styles.inputgroup}>
            <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" placeholder="Nome Completo..."/>
    
        </div>
        <div className={styles.inputgroup}>
                <label htmlFor="email">E-mail:</label>
                <input type="email" email="email" id="email" placeholder="Seu email..."/>                
        </div>
        <div className={styles.inputgroup}>
            <label htmlFor="message">Mensagem:</label>
            <textarea cols="30" rows="10" id="message"></textarea>

        </div>
        <button>Enviar</button>
    </form> 
    )
}