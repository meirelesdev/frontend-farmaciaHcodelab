import styles from './Header.module.css'
import Sidebar from './Sidebar'
import Nav from './Nav'
import HeadInfo from './HeadInfo'
import Logo from './Logo'

import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Header(props){
    const [sidebarShow, setSidebar] = useState(false)

    function toogleSidebar(e) {
        setSidebar(!sidebarShow)
    }
    return(
        <>
        <Head>           
            <HeadInfo />
            <title>Farmacia Hcode</title>
        </Head>
        <header className={styles.mainHeader}>
            <Logo />
            <button onClick={toogleSidebar} className={styles.openMenu}>
                     <img srcSet="/assets/icons/open.svg" className={styles.icon} />
            </button>
                <Sidebar show={sidebarShow} toogleSidebar={toogleSidebar}/>
            <div className={styles.search}>
                    <input type="search" placeholder="O que você procura"/>
                    <img srcSet="/assets/icons/lupa.svg" alt="busca" />
            </div>
            <Nav />
        </header>
        </>
    )
}