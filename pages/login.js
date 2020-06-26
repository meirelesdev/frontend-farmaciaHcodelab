import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/FormContato.module.css'

export default function Login(){
    return(
        <>
        <Header/>
        
        <main className={styles.mainLogin}>
            <section className={styles.login} >
                <h1>Login</h1>
                <div className={styles.inputgroup}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" placeholder="seu email"/>                
                </div>
                <div className={styles.inputgroup}>
                <label htmlFor="password">Passoword:</label>
                        <input type="password" name="password" placeholder="Sua senha"/>                
                    

                </div>
                <button>Entrar</button>
            </section>            
            <section className={styles.register} >
                <h1> Registro</h1>
                <div className={styles.inputgroup}>
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" name="name" id="name" placeholder="Nome Completo..."/>                
                </div>
                <div className={styles.inputgroup}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" id="email" placeholder="Seu email..."/>                
                </div>
                <div className={styles.inputgroup}>
                <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Cadastre uma senha..."/>
                </div>
                <button>Cadastrar</button>
            </section>
        </main>
        <Footer/>
        </>
    )
}