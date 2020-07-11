import Header from '../components/Header'
import Product from '../components/Product'
import Footer from '../components/Footer'
import styles from '../components/PageProducts.module.css'
import Link from 'next/link'
import FormContato from '../components/FormContato'
import axios from 'axios'
import serverUrl from '../utils/env'

export default function Products(props){

    const produtos = props.products
    
    return (
        <>
        <Header />
        <main className={styles.mainProducts}>
        { produtos.length >= 0 ? 
                            produtos.map((product, index) => (                            
                                <Product key={index} produto={product} />
                            )) : <div>Sem Produtos Cadastrados</div>
                }
        
            
        </main>
        <Footer>
            <FormContato/>
        </Footer>
        </>
    )
}
Products.getInitialProps = async ()=>{

    const res = await axios.get(`${serverUrl}/products`)

    return { "products" : res.data }
}