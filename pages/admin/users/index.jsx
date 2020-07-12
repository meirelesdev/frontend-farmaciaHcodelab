import HeaderTitle from '../../../components/admin/HeaderTitle'
import styles from '../../../components/admin/Home.module.css'
import Card from '../../../components/admin/Card'
import Button from '../../../components/admin/Button'
import Layout from '../../../components/admin/Layout'
import handleAuthSSR from '../../../utils/auth'
import axios from 'axios'
import serverUrl from '../../../utils/env'

export default function Index({ users, config }) {
    // console.log("Aqui esta o config: ", config)
    const usuarios = users


    return (
        <Layout>

            <HeaderTitle text="Usuarios" />
            <Button action="addUser" text="Cadastrar Usuario"></Button>
            {usuarios.length > 0 ?
                <section className={styles.products}>

                    {usuarios.map((usuario, i) => (

                        <Card key={i}>
                            <div className={styles.userAdmin}>
                                {/* <img srcSet={`${serverUrl}/products/image/${produto.id}`} alt={produto.name} /> */}
                                <div className={styles.dataUser}>
                                    <p className={styles.title}>Nome: </p>
                                    <p>{usuario.username}</p>
                                    <p className={styles.title}>Email</p>
                                    <p>{usuario.email}</p>
                                    <div className={styles.btnProdutos}>
                                        <Button action="edituser" id={usuario.id} text="Editar"></Button>
                                        <Button action="deluser" name={usuario.username} id={usuario.id} config={config} text="Excluir"></Button>
                                    </div>
                                </div>
                            </div>



                        </Card>

                    ))}
                </section> : <div>Sem Usuarios cadastrados!</div>
            }
        </Layout>
    )
}
Index.getInitialProps = async (ctx) => {

    let users = []

    let config = await handleAuthSSR(ctx)

    await axios.get(`${serverUrl}/admin/users`, config).then(res => {

        users = res.data
    }).catch(err => {
        console.log(err.message)
        users = []
    })

    return { 
        "users": users,
        "config": config
    }
}