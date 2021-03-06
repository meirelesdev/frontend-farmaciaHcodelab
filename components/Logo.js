import styles from './Logo.module.css'
import Link from 'next/link'
export default function Logo(){
    return(
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <img srcSet="/assets/icons/logo.svg" alt="Logo Farmacia hcode"/>
                    <p>Farmacia Hcode</p>
                </a>
            </Link>
        </div>
    )
}