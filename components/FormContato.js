import { useRouter } from 'next/router'
import styles from './FormContato.module.css'
import serverUrl from '../utils/env'
import axios from 'axios'
import { useState } from 'react'

const initState = {name:'',email:'', phone:'', message:''}

export default function FormContato(){
    
    const Router = useRouter()
    
    const [values, setValues ] = useState(initState)

    const handleInputChange = e => {
        const { name, value }= e.target
        setValues({...values, [name]:value})
        
    }
    const handleSubmitForm = e => {
        e.preventDefault()
        axios.post(`${serverUrl}/admin/contacts`, values).then(res=>{
            alert(`Obrigado, ${values.name}. Em breve responderemos sua Mensagem!`)
            setValues(initState)
        }).catch(err=>{
            alert("Erro ao enviar")
        })
    }
    
    return(
    <form className={styles.formRodape}>
        <div className={styles.inputgroup}>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" onChange={handleInputChange} value={values.name} onFocus={handleInputChange} required placeholder="Nome Completo..."/>    
        </div>
        <div className={styles.inputgroup}>
            <label htmlFor="phone">Telefone ou WhatsApp:</label>
            <input type="tel" name="phone" id="phone" onChange={handleInputChange} value={values.phone} onFocus={handleInputChange} placeholder="(DDD) 9999-9999"/>
        </div>
        <div className={styles.inputgroup}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" onChange={handleInputChange} value={values.email} onFocus={handleInputChange} required placeholder="Seu email..."/>
        </div>
        <div className={styles.inputgroup}>
            <label htmlFor="message">Mensagem:</label>
            <textarea cols="30" rows="10" id="message" required name="message"  onChange={handleInputChange} value={values.message} onFocus={handleInputChange} ></textarea>
        </div>
        <button type="submit" onClick={handleSubmitForm}>Enviar</button>
    </form> 
    )
}