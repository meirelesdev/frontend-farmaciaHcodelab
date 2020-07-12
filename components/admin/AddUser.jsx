import styles from './addProduct.module.css'
import Axios from 'axios'
import serverUrl from '../../utils/env'
import Router from 'next/router'
import { useState } from 'react'


export default function AddUser({res}) {
    
    const [values, setValues ] = useState({username:'', email:'',password:''})

    const handleInputChange = e => {
        const { name, value }= e.target
        setValues({...values, [name]:value})
        
    }
    const handleSubmit = e =>{
        e.preventDefault()

        Axios.post(`${serverUrl}/users/new`, values)
        .then(res=>{
            alert(`Usuario ${res.data.username} com id ${res.data.id} Cadastrado com Sucesso!`)
            Router.push("/admin/users")
        })
        .catch(err=>{
            alert("Nao foi possivel cadastrar!")
        })



    }
    
    return (
        <form className={styles.formAdd} onSubmit={handleSubmit}>
            
            <div className={styles.inputGroup}>
                <label htmlFor="username">Nome</label>
                <input type="text" id="suername" name="username" onChange={handleInputChange} onFocus={handleInputChange} placeholder="Nome do usuario..." />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="E-mail do usuario..." onChange={handleInputChange} onFocus={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="pass">Senha</label>
                <input type="password" id="pass" name="password" placeholder="Senha para o usuario..." onChange={handleInputChange} onFocus={handleInputChange} />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

