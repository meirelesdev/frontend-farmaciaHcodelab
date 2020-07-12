import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Error.module.css'

export default function Custom404(){
    return(
        <>
        <Header/>
        <section className={styles.content}>
            
            <h1>Ops! Não encontramos o que você Procura</h1>
            <p>Mas continue cuidando de você e das pessoas que você Ama!</p>
            <h2>Use mascara e alcool gel!</h2>
            <img srcSet="/assets/img/erro404.jpg" alt="Pagina nao encontrada"/>
        </section>
        <Footer />
        </>
    )
}