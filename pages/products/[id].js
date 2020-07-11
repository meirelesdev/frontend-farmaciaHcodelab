import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../components/ProductSingle.module.css'
import FormContato from '../../components/FormContato'
import axios from 'axios'
import serverUrl from '../../utils/env'
import Router from 'next/router'

export default function PageProduct(props) {

    const produto = props.product
    produto.desc = (produto.price * 3 ) - ((produto.price *3 / 100) * 10 )

    const handleEuquero = e =>{
        e.preventDefault()
        Router.push("/contact" )
    }
    return (
        <>
            <Header />
            <main className={styles.mainProductSingle}>
                <small>Produto >> {produto.category} >> {produto.name}</small>
                <div className={styles.mainProduct} >
                    <h1>{produto.name}</h1>
                    <div className={styles.productContent}>
                        <img srcSet={`${serverUrl}/products/image/${produto.id}`} alt={produto.name} />
                        <div className={styles.promo}>
                            <h3>Promoção</h3>
                            <p>Leve 3 com 10% de <strong>Desconto</strong></p>
                            <p>3 por Apenas <strong>{produto.desc.toLocaleString('pt-br', {style : 'currency', currency: 'BRL'})}</strong> </p>
                        </div>
                        <div className={styles.prices}>
                            <p>de <small>{ produto.oldprice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</small></p>
                            <strong>Por {produto.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>
                        </div>
                        <div className={styles.btnEuquero}>
                            <button onClick={handleEuquero}>Eu quero!</button>
                        </div>
                        <p>{produto.description}</p>
                        
                        

                    </div>
                </div>
            </main>

            <Footer>
                <FormContato />
            </Footer>
        </>
    )
}

PageProduct.getInitialProps = async ({ query }) => {

    const { id } = query
    const res = await axios.get(`${serverUrl}/products/${id}`)

    return {
        "product": res.data
    }
}