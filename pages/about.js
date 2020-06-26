import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/PageHistoria.module.css'
import FormContato from '../components/FormContato'

export default function Register(){
    return(
        <>
        <Header/>
        <div className={styles.historiaBanner}>
            <h1>Nossa Historia!</h1>
        </div>
        <main className={styles.mainHistoria}>
            <div>
                <p>
            Desde a primeira Farmácia Preço Popular inaugurada na cidade de Brusque, em Santa Catarina, no ano de 2006, sua história já alcança números memoráveis de reconhecimento e de expansão.</p>
            <p>São mais de 450 lojas nos estados do Rio Grande do Sul, Santa Catarina, Paraná, Mato Grosso do Sul, São Paulo e Bahia, que atendem milhares de pessoas diariamente.</p>
            <p>
            Seus preceitos, qualidade, confiança e economia fazem da rede de farmácias Preço Popular uma empresa ética que oferece todos os produtos com procedência garantida. Tem como maior diferencial o preço, procurando sempre oferecer aos seus clientes os melhores descontos do mercado.</p>
            </div>
        </main>
        <Footer>
             <FormContato />
        </Footer>
        </>
    )
}