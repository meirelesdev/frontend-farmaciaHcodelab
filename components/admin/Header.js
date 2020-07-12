import styles from './Header.module.css'
import IconFarmacia from './IconFarmacia'
import Link from 'next/link'
import Head from  'next/head'
import HeadInfo from '../HeadInfo'
import { useState, useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useRouter } from 'next/router'



export default function Header({ onMenuToggle }) {
    const Router = useRouter()
    const cookies = new Cookies()
    
    const [menuOpened, setMenuOpened] = useState(false)
    function logout(e) {
        e.preventDefault()
        
        cookies.remove('user')
        cookies.remove('token')
        cookies.remove('email')
        
        Router.push('/login')
    }

    const toggleMenu = () => {

        setMenuOpened(!menuOpened)

    }

    useEffect(() => {

        if (typeof onMenuToggle === 'function') onMenuToggle(menuOpened)

    }, [menuOpened])

    return (
        <>
        <Head>
            <HeadInfo/>
            <title>Painel | Admin </title>
        </Head>
        <header id={styles.header} className={menuOpened ? styles.open : ''}>

            <div className={styles.logo}>
                <Link href="/admin">
                    <a>
                    <IconFarmacia />
                    </a>
                </Link>                

                <button type="button" id={styles['btn-open']} onClick={toggleMenu}>
                    <svg id="menu-black-18dp" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path data-name="Caminho 215" d="M0,0H32V32H0Z" fill="none"/>
                        <path  data-name="Caminho 216" d="M3,18H29V16H3Zm0-5H29V11H3ZM3,6V8H29V6Z" transform="translate(0 4)" fill="#000" />
                    </svg>
                </button>

            </div>

            <div className={styles.menu}>
                
                <nav className={styles['header-top']}>

                    <div className={styles.header}>

                        <button type="button" className={styles.btnClose} onClick={() => setMenuOpened(false)}>
                            <svg id="close-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path id="Caminho_244" data-name="Caminho 244" d="M0,0H24V24H0Z" fill="none"/>
                                <path id="Caminho_245" data-name="Caminho 245" d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z" fill="#fff"/>
                            </svg>
                        </button>

                    </div>

                    <div className={styles['user-info']}>

                        <img srcSet="/assets/icons/user-default.svg" className={styles['user-photo']} />

                        <h2>{cookies.get('user')}</h2>

                        <p>{cookies.get('email')}</p>
                    </div>

                    <ul className={styles.links}>

                        <li className={styles.link}>
                            <Link href="/admin/products">
                                <a title="Produtos">
                                    <img src="/assets/icons/products.svg" />
                                    Produtos
                                </a>
                            </Link>
                        </li>
                        <li className={styles.link}>
                            <Link href="/admin/users"><a title="Usuarios"><img  src="/assets/icons/user-default.svg" />Usuarios</a></Link>
                        </li>

                        <li className={styles.link}>
                            <Link href="/admin/contacts"><a title="Contatos"><img src="/assets/icons/contacts.svg" />Contatos</a></Link>
                        </li>

                        <li className={styles.link}>
                            <a onClick={logout} title="Sair" ><img src="/assets/icons/logout.svg" />Sair</a>
                        </li>

                    </ul>
                
                </nav>

            </div>

        </header>
        </>
    )

}