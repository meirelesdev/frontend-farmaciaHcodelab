import Header from '../components/Header'
import FormContato from '../components/FormContato'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import styles from '../components/Home.module.css'
import Product from '../components/Product'
import axios from 'axios'
import serverUrl from '../utils/env'

export default function Index(props) {

    const products = props.products

    return (
        <>
            <Header />
            <div className={styles.banner}>
                <Slider />
            </div>
            <hr />
            <section className={styles.products}>
                {products.length >= 0 ?
                    products.map((product, index) => (
                        <Product key={index} produto={product} />
                    )) : <div>Sem Produtos Cadastrados</div>
                }
            </section>
            <hr />
            <section className={styles.mainSection}>
                <main>
                    <div>
                        <h2>Serviços</h2>
                        <img srcSet="/assets/img/injeservicos.jpg" alt="Servicos"/>
                        <p>Aplicação de injetaveis</p>
                    </div>
                    <div>
                        <h2>Manipulação</h2>
                        <img srcSet="/assets/img/manipulacao.jpg" alt="Manipulação"/>
                        <p>Farmacia de Manipulação</p>
                    </div>
                    <div>
                        <h2>Sua Saude</h2>
                        <img srcSet="/assets/img/pressao.jpg" alt="Confira sua pressão" />
                        <p>Aferição de Pressão</p>
                    </div>
                </main>
            </section>
            <section className={styles.mainSection}>
                <main>
                    <div>
                        <h2>Remedios Gratis</h2>
                        <img srcSet="/assets/img/popular.jpg"alt="Farmacia Polular" />
                        <p>Através do governo federal.</p>
                    </div>
                    <div>
                        <h2>Farmacia Popular</h2>
                        <a href="/assets/downloads/pdffarmaciapopular.pdf" target="_blank">
                            <img srcSet="/assets/img/logomarcabrasil.jpg" alt="Medicamento gratis" />
                        </a>
                        <p>Clicando na Imagem você tera acesso a lista de Medicamentos disponibilizados <strong>Gratuitamente</strong>!</p>

                        
                    </div>
                    <div>
                        <h2>Convenios</h2>
                        <img srcSet="/assets/img/parcerias.jpg" alt="convenios" />
                        <p>Temos parceria com diversos convenios!</p>
                    </div>
                </main>
            </section>
            <Footer>

                <FormContato />

            </Footer>
        </>
    )
}
Index.getInitialProps = async () => {

    let res = await axios.get(`${serverUrl}/products`)

    let produtos  = res.data.filter((produto, index)=>{
        if(index < 4){
            return produto
        }
    })    
    return { "products": produtos }

}