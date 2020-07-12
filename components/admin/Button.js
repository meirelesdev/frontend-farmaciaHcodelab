import styles from './Button.module.css'
import axios from 'axios'
import serverUrl from '../../utils/env'
import { useRouter } from 'next/router'

export default function Button(props) {

    const Router = useRouter()
    const config = props.config

    const handleClick = async e => {
        switch (props.action) {
            case "edituser":
                Router.push(`/admin/users/${props.id}`)
                break
            case "addUser":
                Router.push('/admin/users/new')
                break
            case "deluser":
                if (confirm("Tem certeza que deseja excluir?")) {
                    await axios.delete(`${serverUrl}/admin/users/${props.id}`, config).then(res => {
                        alert(`Usuario deletado com Sucesso!`)
                        Router.push(`/admin/users`)
                    }).catch(err => { alert("Deu ruim") })
                }
                break
            case "adicionar":
                Router.push(`/admin/products/new`)
                break
            case "delete":
                if (confirm("Tem certeza que deseja excluir?")) {
                    await axios.delete(`${serverUrl}/admin/contacts/${props.id}`).then(res => {
                        alert(`Contato deletado com Sucesso!`)
                        Router.push(`/admin/contacts`)
                    }).catch(err => { alert("Deu ruim") })
                }
                break
            case "excluir":
                if (confirm("Tem certeza que deseja Excluir Este Produto?")) {
                    await axios.delete(`${serverUrl}/admin/products/${props.id}`)
                    alert(`Produto ${props.name} Deletado!`)
                    Router.push('/admin/products')
                }
                break
            case "editar":
                Router.push(`/admin/products/${props.id}`)
                break

        }
    }

    return (
        <button className={styles.button} onClick={handleClick}>{props.text}</button>
    )

}