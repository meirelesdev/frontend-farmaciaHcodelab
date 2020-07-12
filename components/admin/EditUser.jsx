import styles from './UserEdit.module.css'
import Button from './Button'
import Axios from 'axios'
import serverUrl from '../../utils/env'
import Router from 'next/router'
import { useState } from 'react'
import { Cookies } from 'react-cookie'

export default function AddUser({ user }) {

    const cookie = new Cookies()

    let token = cookie.get('token')
    let [inputPass, setInputPass] = useState('')
    let [inputAtPass, setInputAtPass] = useState('')

    const [values, setValues] = useState({
        username: user.username,
        email: user.email,
        password: '',
        newpassword: '',
        confpassword: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })

    }
    const checkPassword = (e) => {
        const dataUser = {
            email: values.email,
            password: e.target.value
        }
        Axios.post(`${serverUrl}/sessions`, dataUser).then(res => {

            token = res.token
            inputAtPass.style.border = "2px solid #3d94f6"
        }).catch(err => {
            inputAtPass.style.border = "2px solid red"
            inputAtPass.focus()
        })

    }
    const checkNewPassword = () => {

        if (values.newpassword !== values.confpassword) {

            alert("Nova senha nao confere!\nDigite Novamente.")
            
            inputPass.focus()
        }
    }
    const handleSubmit = e => {
        e.preventDefault()

        const config = { headers: { Authorization: `Bearer ${token}` } }

        const newData = {
            username: values.username,
            email: values.email,
            password: values.newpassword
        }

        Axios.put(`${serverUrl}/admin/users/${user.id}`, newData, config)
            .then(res => {
                alert(`Usuario ${res.data.username} com id ${res.data.id} Alterado com Sucesso!`)
                Router.push("/admin/users")
            })
            .catch(err => {
                alert("Erro para alterar Usuario!")
            })
    }

    return (
        <form className={styles.formAdd} onSubmit={handleSubmit}>

            <div className={styles.inputGroup}>
                <label htmlFor="username">Nome</label>
                <input type="text" id="username" name="username" value={values.username} onChange={handleInputChange} onFocus={handleInputChange} placeholder="Nome do usuario..." />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" value={values.email} placeholder="E-mail do usuario..." onChange={handleInputChange} onFocus={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="pass">Senha Atual</label>
                <input type="password" id="pass" name="password" value={values.password} placeholder="Senha Atual..." onChange={handleInputChange} onFocus={handleInputChange} onBlur={checkPassword} ref={inputAtPass => setInputAtPass(inputAtPass)} />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="newpass">Nova Senha</label>
                <input type="password" id="newpass" name="newpassword" value={values.newpassword} placeholder="Nova Senha..." onChange={handleInputChange} onFocus={handleInputChange} ref={inputPass => setInputPass(inputPass)} />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="confpass">Confirmar Nova Senha</label>
                <input type="password" id="confpass" name="confpassword" value={values.confpassword} onBlur={checkNewPassword} placeholder="Confirme a Senha..." onChange={handleInputChange} onFocus={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
                <Button text="Salvar Alterações" />
            </div>
        </form>
    )
}

