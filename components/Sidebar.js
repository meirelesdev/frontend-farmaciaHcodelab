import styles from './Sidebar.module.css'
import Link from 'next/link' 

export default function sideBar (props) {
    return (
        <nav className={styles.sidebar + ' ' + (props.show ? styles.show : '')}>
            <ul>
                <button onClick={props.toogleSidebar} className={styles.closeMenu}><img srcSet="/assets/icons/close.svg" className={styles.icon} /></button>
                <li><Link href="/" ><a>Home</a></Link></li>
                <li>
                    <Link href="/products" >
                        <a>Produtos</a>
                    </Link>
                </li>
                
                <li><Link href="/about" ><a>Sobre nos</a></Link></li>
                
                <li><Link href="/contact" ><a>Contato</a></Link></li>
                <li>
                    <Link href="/login" >
                        <a className={styles.btnLogin}>
                            Login / Registre-se
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}