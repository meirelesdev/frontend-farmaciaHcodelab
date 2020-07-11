import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav(){
    return(
    <nav className={styles.menu}>
            <ul>
        
                <li>
                    <Link href="/" >
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/products" >
                        <a>Produtos</a>
                    </Link>
                </li>
                
                <li>
                    <Link href="/about" >
                        <a>Sobre nos</a>
                    </Link>
                </li>
                
                <li>
                    <Link href="/contact" >
                        <a>Contato</a>
                    </Link>
                </li>
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
