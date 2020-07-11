import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/PageHistoria.module.css'
import FormContato from '../components/FormContato'
import Banner from '../components/Banner'

export default function Register(){
    return(
        <>
        <Header/>
        <Banner title="Nossa Historia!" nomeClasse="historiaBanner" />
        <main className={styles.mainHistoria}>
            <div className={styles.divImg}>
                <img src="/assets/img/farmaciahcode.jpg" alt="Nossa Loja"/>
            </div>
            <div>
                <p>
            Desde a primeira Farmácia Hcode inaugurada na cidade de Florianopolis, em Santa Catarina, no ano de 2020, sua história já alcança números memoráveis de reconhecimento e de expansão.</p>
            <p>São mais de 10 lojas no estado de Santa Catarina, que atendem centenas de pessoas diariamente.</p>
            <p>
            Seus preceitos, qualidade, confiança e economia fazem da rede de farmácias Hcode uma empresa ética que oferece todos os produtos com procedência garantida. Tem como maior diferencial o preço, procurando sempre oferecer aos seus clientes os melhores descontos do mercado.</p>
            </div>
        </main>
        <Footer>
             <FormContato />
        </Footer>
        </>
    )
}