import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Contact.module.css'
import FormContato from '../components/FormContato'
import Banner from '../components/Banner'

export default function Contact(){
    
    return(
        <>
        <Header/>
        <Banner title="Entre em Contato!" nomeClasse="contactBanner" />
        <main className={styles.mainContact}>
            <FormContato />
            <div className={styles.contactLinks}>
                <h2>Como nos Encontrar:</h2>
                <address>                    
                    <p>Av: Mauro Ramos 4110, </p>
                        <p>florianopolis - SC</p>
                </address>
                <div className={styles.address}>
                    
                    <a href="tel:(48) 3244-2424" target="_blank">
                            <img src="/assets/icons/telefone.svg" alt="Telefone" title="Telefone" />
                    (48) 3244-2424
                    </a>
                    <a href="http://wa.me/48998087316" target="_blank">
                        <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" title="WhatsApp" />
                        (48) 48 99808-7316
                    </a>
                </div>
            </div>
        </main>
            

        <Footer />
        </>
    )
}
 