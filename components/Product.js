import styles from './Product.module.css'
import Link from 'next/link'
import serverUrl from '../utils/env'

export default function Product(props) {

    const produto = props.produto

    return (
        <div className={styles.product}>
            <Link href={`/products/${produto.id}`} >
                <a>
                    <img srcSet={`${serverUrl}/products/image/${produto.id}`} alt={produto.name} />
                </a>
            </Link>
            <Link href={`/products/${produto.id}`}>
                <a>
                    <p className={styles.title}>{produto.name}</p>
                </a>
            </Link>
            <small className={styles.oldPrice}>{produto.oldprice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</small>
            <p>{produto.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            <small className={styles.priceParcel}> ou 3x R$ {(produto.price / 3).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</small>
            <div className={styles.btnProducts}>
                <Link href={`/products/${produto.id}`}>
                    <a>
                        <img srcSet="/assets/icons/readme.svg" alt="Detalhes do produto" title="detalhes" />
                    </a>
                </Link>
                <Link href={`/products/${produto.id}`}>
                    <a>
                        <img srcSet="/assets/icons/cart.svg" alt="Adicionar no carrinho" title="Adicionar" />
                    </a>
                </Link>
                <Link href={`/products/${produto.id}`}>
                    <a>
                        <img srcSet="/assets/icons/heard.svg" alt="Marcar como favorito" title="Marcar Favorito" />
                    </a>
                </Link>
            </div>
        </div>
    )
}
