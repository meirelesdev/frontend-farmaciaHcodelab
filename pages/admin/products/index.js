import HeaderTitle from '../../../components/admin/HeaderTitle'
import styles from '../../../components/admin/Home.module.css'
import Card from '../../../components/admin/Card'
import Button from '../../../components/admin/Button'
import Layout from '../../../components/admin/Layout'
import handleAuthSSR from '../../../utils/auth'
import axios from 'axios'
import serverUrl from '../../../utils/env'

export default function Index({ products }) {
    // console.log("Aqui esta o config: ", config)
    const produtos = products


    return (
        <Layout>

            <HeaderTitle text="Produtos" />
            <Button action="adicionar" text="Cadastrar Produto"></Button>
            {produtos.length > 0 ? 
            <section className={styles.products}>

                {produtos.map((produto, i) => (

                    <Card key={i}>
                        <div className={styles.produtoAdmin}>
                            <img srcSet={`${serverUrl}/products/image/${produto.id}`} alt={produto.name} />
                            <div className={styles.dataProducts}>
                                <h2>{produto.name}</h2>
                                <p className={styles.title}>Descrição</p>
                                <p>{produto.description.substring(0, 100) + "..."}</p>
                                <p className={styles.title}>Categoria</p>
                                <p>{produto.category}</p>
                <p>de <small>{produto.oldprice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</small></p>
                <p>por<strong>{produto.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></p>
                                <div className={styles.btnProdutos}>
                                <Button action="editar" id={produto.id} text="Editar"></Button>
                                <Button action="excluir" name={produto.name} id={produto.id} text="Excluir"></Button>
                            </div>
                            </div>
                            
                        </div>



                    </Card>

                ))}
            </section> : <div>Cadastre um produto para velo aqui!</div>
            }
        </Layout>
    )
}
Index.getInitialProps = async (ctx) => {

    let products = []

    await handleAuthSSR(ctx)

    await axios.get(`${serverUrl}/products`).then(res => {

        products = res.data
    }).catch(err => {
        console.log(err.message)
        products = []
    })

    return { "products": products }
}