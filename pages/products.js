import Header from '../components/Header'
import Product from '../components/Product'
import Footer from '../components/Footer'
import styles from '../components/PageProducts.module.css'
import Link from 'next/link'
import FormContato from '../components/FormContato'


export default props =>{
    const produto = {id:1, name:'Nome o produtos 1', price: 10.99, oldprice: 15.99}
    return (
        <>
        <Header />
        <main className={styles.mainProducts}>
            <Product foto={3} produto={produto} />          
            <Product foto={5} produto={produto} />          
            <Product foto={2} produto={produto} />          
            <Product foto={7} produto={produto} />
        </main>
        <Footer>
            <FormContato/>
        </Footer>
        </>
    )
}