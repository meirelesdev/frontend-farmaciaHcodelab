import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Product from '../../components/Product'
import styles from '../../components/ProductSingle.module.css'
import FormContato from '../../components/FormContato'
import Link from 'next/link'


export default props =>{
    const produto = {id:5, name:'Nome o produtos 1', price: 10.99, oldprice: 15.99}
    return (
        <>
        <Header />
        <main className={styles.mainProductSingle}>
            <div >
                
            </div>
        </main>
            
        <Footer>
            <FormContato/>
        </Footer>
        </>
    )
}