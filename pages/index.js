import Header from '../components/Header'
import FormContato from '../components/FormContato'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import styles from '../components/Home.module.css'
import Product from '../components/Product'

export default function Index() {
    const produto = {id:1, name:'Nome o produtos 1', price: 10.99, oldprice: 15.99}
    return(
        <>
                <Header/>
                <div className={styles.banner}>
                    <Slider />
                </div>
                <section className={styles.products}>
                    <Product foto={1} produto={produto} />
                    <Product foto={2} produto={produto} />
                    <Product foto={3} produto={produto}/>
                    <Product foto={4} produto={produto} />
                    <Product foto={5} produto={produto} />
                    
                </section>
                
                <Footer>
                    
                    <FormContato />
                    
                </Footer>
        </>
    )
}
