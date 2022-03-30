import styles from './Header.module.css'
import Sidebar from './Sidebar'
import Nav from './Nav'
import HeadInfo from './HeadInfo.js'
import Logo from './Logo'

import { useState } from 'react'

export default function Header(props){
    const [sidebarShow, setSidebar] = useState(false)

    function toogleSidebar(e) {
        setSidebar(!sidebarShow)
    }
    return(
        <>
        <HeadInfo/>
        <header className={styles.mainHeader}>
            <Logo />
            <button onClick={toogleSidebar} className={styles.openMenu}>
                     <img srcSet="/assets/icons/open.svg" className={styles.icon} alt="Abrir Menu"/>
            </button>
                <Sidebar show={sidebarShow} toogleSidebar={toogleSidebar}/>
            <div className={styles.search}>
                    
            </div>
            <Nav />
        </header>
        </>
    )
}