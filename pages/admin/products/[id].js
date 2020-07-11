import Layout from '../../../components/admin/Layout'
import HeaderTitle from '../../../components/admin/HeaderTitle'
import React from 'react'
import handleAuthSSR from '../../../utils/auth'
import Card from '../../../components/admin/Card'
import serverUrl from '../../../utils/env'
import axios from 'axios'
import EditProduct from '../../../components/admin/editProduct'

export default function editProduct({ product }) {
    let produto = product
    return (
        <Layout>

            <HeaderTitle text="Editar Produto" />
            <Card>
            
                <EditProduct produto={produto}/>
            </Card>

        </Layout>
    )

}

editProduct.getInitialProps = async ({ query }) => {

    const { id } = query
    const res = await axios.get(`${serverUrl}/products/${id}`)

    return {
        "product": res.data
    }


}