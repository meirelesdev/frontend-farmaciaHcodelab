import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import styles from '../components/FormContato.module.css'
import serverUrl from '../utils/env'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'


export default function Login(){
    const cookie = new Cookies()
    const Router = useRouter()

    const [values, setValues ] = useState({username:'', email:'',password:''})

    const handleInputChange = e => {
        const { name, value }= e.target
        setValues({...values, [name]:value})
        
    }
    

    const handleInputLogin = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        
    }

    const handleLogin =  e => {
        e.preventDefault()
        
         axios.post(`${serverUrl}/sessions`, values).then(res=>
            {
                cookie.set('token',res.data.token.token)
                cookie.set('user', res.data.user.username)
                cookie.set('email',res.data.user.email)
                Router.push('/admin')
                
            }).catch(err => {
                console.log('Erro ', err.message)
                Router.push('/')
         })
    }


    const handleRegister = e => {
        e.preventDefault()
        
        axios.post(`${serverUrl}/users/new`, values)
            .then( res => {
            alert(`Olá ${res.data.username} seus dados foram cadastrados ID: ${res.data.id}`)
            if(res.data){
                let auth = { email: values.email, password: values.password }
                axios.post(`${serverUrl}/sessions`, auth).then(res=>
                    {
                        cookie.set('token',res.data.token.token)
                        cookie.set('user', res.data.user.username)
                        cookie.set('email',res.data.user.email)

                        Router.push('/admin')
                        
                    }).catch(err => {
                        console.log('Erro ', err.message)
                        Router.push('/')
                 })
            }            
            }).catch( err => {
                alert("Não foi possivel cadastrar. Tente Novamente!")
                Router.push('/login')
            })
    }

    return(
        <>
        <Header/>
        <Banner title="Login / Registre-se!" nomeClasse="loginRegisterBanner" />
        <main className={styles.mainLogin}>
            <section className={styles.login} >
                <h1>Login</h1>
                <form>
                    <div className={styles.inputgroup}>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" onChange={handleInputLogin} onFocus={handleInputLogin} name="email" placeholder="Seu E-mail..."/>                
                    </div>
                    <div className={styles.inputgroup}>
                    <label htmlFor="password">Senha:</label>
                            <input type="password" onChange={handleInputLogin} onFocus={handleInputLogin} name="password" placeholder="Sua senha..."/>
                    </div>
                    <button type="submit" onClick={handleLogin} >Entrar</button>
                </form>
            </section>            
            <section className={styles.register} >
                <h1> Registro</h1>
                <form>
                    <div className={styles.inputgroup}>
                            <label htmlFor="username">Nome Completo:</label>
                            <input type="text" onChange={handleInputChange} required={true} onFocus={handleInputChange} name="username" id="username" placeholder="Seu Nome Completo..."/>                
                    </div>
                    <div className={styles.inputgroup}>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" onChange={handleInputChange} required={true} onFocus={handleInputChange} name="email" id="email" placeholder="Cadastre um E-mail..."/>                
                    </div>
                    <div className={styles.inputgroup}>
                    <label htmlFor="password">Senha:</label>
                            <input type="password" onChange={handleInputChange} required={true} onFocus={handleInputChange} name="password" id="password" placeholder="Cadastre uma senha..."/>
                    </div>
                    <button type="submit" onClick={handleRegister} >Cadastrar</button>
                </form>
            </section>
        </main>
        <Footer/>
        </>
    )
}