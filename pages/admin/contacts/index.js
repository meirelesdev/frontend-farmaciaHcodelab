import Layout from '../../../components/admin/Layout'
import HeaderTitle from '../../../components/admin/HeaderTitle'
import axios from 'axios'
import serverUrl from '../../../utils/env'
import styles from '../../../components/admin/Contacts.module.css'
import CardMessage from '../../../components/admin/CardMessage'
import { useState } from 'react'
import handleAuthSSR from '../../../utils/auth'
import { Cookies } from 'react-cookie'
import Router from 'next/router'

const cookie = new Cookies()
export default function Index(props) {
    let contacts = ""
    //função para evitar erro se o banco não estiver rodando ou não houver mensagens
    if (props.contacts == undefined) {
        contacts = ""
    } else {
        contacts = props.contacts
    }

    // const values = ""
    const [lastVisible, setLastVisible] = useState()
    const [visible, setVisible] = useState(contacts != "" ? contacts.map((contact, i) => false) : null)
    const [answered, setAnswered] = useState(contacts != "" ? contacts.map((contact, i) => contact.answered) : null)


    //função que faz a mensagem escolhida aparecer/desaparecer na tela.
    function handleClickMessage(index) {

        setVisible({ ...visible, [lastVisible]: false, [index]: !visible[index] })
        setLastVisible(index)
    }

    //função para marcar a mensagem como "lida/respondida" tanto na tela como no DB
    async function handleClickAnswered(index, id) {

        const values = { answered: !answered[index] }
        setAnswered({ ...answered, [index]: !answered[index] })
        await axios.put(`${serverUrl}/admin/contacts/${id}`, values)
    }


    return (
        <Layout>

            <HeaderTitle text="Contatos " />

            <div className={styles.contatosContent}>
                <p>Lista de Mensagems</p>
            </div>
            <main className={styles.main} >
                {/* função ternária para evitar erro de rodar um .map() em um array vazio e mostrar
            uma mensagem de erro mais amigável */}
                {contacts != "" ?
                    <>
                        <section className={styles.messageList}>
                            <ul className={styles.ulList}>
                                {contacts.map((contact, i) => (

                                    <li key={i} className={visible[i] ? styles.selected : null}>
                                        <button id={contact.id} onClick={() => handleClickMessage(i)} value="teste">
                                            <span className={styles.nameList}>{contact.name}</span>
                                            <span className={styles.dateList}>
                                                {new Date(contact.created_at).toISOString().split('T')[0]}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>

                        </section>

                        <section className={styles.messages}>

                            {contacts.map((contact, i) =>
                                <div key={i}>
                                    {visible[i] && <CardMessage id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} message={contact.message} checked={answered[i] ? 1 : 0} onChange={() => handleClickAnswered(i, contact.id)} received={contact.created_at} updated={contact.updated_at} />
                                    }
                                </div>
                            )}

                        </section>
                    </> : <h1>Você não tem mensagens no momento 😥</h1>}
            </main>


        </Layout>
    )
}
Index.getInitialProps = async (ctx) => {

    await handleAuthSSR(ctx)

    const token = cookie.get('token')

    const config = {
        header: { Authorization: `Bearer ${token}` }
    }

    let res = { data: "" }
    try {
        res = await axios.get(`${serverUrl}/admin/contacts`)
    } catch (err) {
        console.log("Erro no catch ao listar contatos", err.message)
    }

    return {
        "contacts": res.data,
        "config": config
    }
}
