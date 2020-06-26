import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Contact.module.css'
import FormContato from '../components/FormContato'
import Logo from '../components/Logo'

export default function Contact(){
    return(
        <>
        <Header/>
        <div className={styles.contactBanner}>
            <h1>Entre em Contato!</h1>
        </div>
        <main className={styles.mainContact}>
            <FormContato />
        </main>
            

        <Footer />
        </>
    )
}