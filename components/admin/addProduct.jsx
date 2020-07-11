import styles from './addProduct.module.css'
import Axios from 'axios'
import serverUrl from '../../utils/env'
import { useRouter } from 'next/router'


const config = {
    header: "Content-Type: multipart/form-data"
}

export default function addProduct({res}) {
    
    const Router = useRouter()
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        let formulario = new FormData(e.target)
        
        await Axios.post(`${serverUrl}/admin/products`, formulario, config)
        
        alert("Novo produto Cadastrado com Sucesso!")
        Router.push("/admin/products")
    }
    
    return (
        <form className={styles.formAdd} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <img />
            </div>
            <input type="file" name="file" />
            <div className={styles.inputGroup}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Nome do produto" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="cat">Categoria</label>
                <input type="text" id="cat" name="category" placeholder="Categoria do produto" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="desc">Descrição</label>
                <textarea cols="30" rows="10" name="description" placeholder="Descrição do produto" ></textarea>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="oldprice">Antigo Preço</label>
                <input type="number" min="0" step=".01" className={styles.price} name="oldprice" id="oldprice" placeholder="R$ 100.00" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="price">Valor</label>
                <input type="number" min="0" step=".01" className={styles.price} name="price" id="price"  placeholder="R$ 100.00"/>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

