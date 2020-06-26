import HeaderTitle from '../../../components/admin/HeaderTitle'
import styles from '../../../components/admin/Home.module.css'
import Card from '../../../components/admin/Card'
import Button from '../../../components/admin/Button'
import Product from '../../../components/Product'
import Layout from '../../../components/admin/Layout'

export default function Index() {

    const Produtos = [
        {id:1, name:'Nome o produtos 1', price: 10.99, oldprice: 15.99},
        {id:2, name:'Nome o produtos 2', price: 10.99, oldprice: 15.99},
        {id:3, name:'Nome o produtos 3', price: 10.99, oldprice: 15.99},
        {id:4, name:'Nome o produtos 4', price: 10.99, oldprice: 15.99},
        {id:5, name:'Nome o produtos 5', price: 10.99, oldprice: 15.99},
        {id:6, name:'Nome o produtos 6', price: 10.99, oldprice: 15.99},
];
console.log(Produtos[0])

    return (
        <Layout>

            <HeaderTitle text="Produtos" />

            <section className={styles.products}>

                {Produtos.map((produto, i )=> (

                    <Card actions={<Button>Editar</Button>} key={i}> {/* Poderemos fazer essa refatoração depois */}

                        <Product produto={produto} foto={produto.id} />
                    </Card>

                ))}

            </section>
        </Layout>
    )
}