import styles from './addProduct.module.css'
import Axios from 'axios'
import serverUrl from '../../utils/env'
import { useRouter } from 'next/router'
import { useState } from 'react'

const config = {
    header: "Content-Type: multipart/form-data"
}

export default function editProduct({ produto }) {
    const initialState = {
                id: produto.id,
                name: produto.name,
                category: produto.category,
                description:produto.description,
                price:produto.price,
                oldprice: produto.oldprice
            }    
    const Router = useRouter()

    const [values, setValues ] = useState(initialState)
    
    const handleInputChange = e => {
        const { name, value }= e.target
        setValues({...values, [name]:value})
        
    }
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        let formulario = new FormData(e.target)
        
        await Axios.put(`${serverUrl}/admin/products/${values.id}`, formulario, config)
        
        alert("Alteração Feita com Sucesso!")
        Router.push("/admin")
    }
    
    return (
        <form className={styles.formAdd} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <img srcSet={`${serverUrl}/products/image/${produto.id}`} />
            </div>
            <input type="file" name="file" />
            <div className={styles.inputGroup}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" value={values.name} onChange={handleInputChange} onFocus={handleInputChange} placeholder="Nome do produto" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="cat">Categoria</label>
                <input type="text" id="cat" name="category"  value={values.category} onChange={handleInputChange} onFocus={handleInputChange} placeholder="Categoria do produto" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="desc">Descrição</label>
                <textarea cols="30" rows="10" name="description" value={values.description} onChange={handleInputChange} onFocus={handleInputChange} placeholder="Descrição do produto" ></textarea>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="oldprice">Antigo Preço</label>
                <input type="number" min="0" step=".01" className={styles.price} name="oldprice" value={values.oldprice} onChange={handleInputChange} onFocus={handleInputChange} id="oldprice" placeholder="R$ 100.00" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="price">Valor</label>
                <input type="number" min="0" step=".01" className={styles.price} name="price"  value={values.price} onChange={handleInputChange} onFocus={handleInputChange}id="price"  placeholder="R$ 100.00"/>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

