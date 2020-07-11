import Layout from '../../../components/admin/Layout'
import HeaderTitle from '../../../components/admin/HeaderTitle'
import React from 'react'
import handleAuthSSR from '../../../utils/auth'
import Card from '../../../components/admin/Card'
import serverUrl from '../../../utils/env'
import axios from 'axios'
import AddProduct from '../../../components/admin/addProduct'

export default function newProduct({res}) {
    
    return (
        <Layout>

            <HeaderTitle text="Novo Produto" />
            <Card>
            
                <AddProduct token={res}/>
            </Card>

        </Layout>
    )

}

newProduct.getInitialProps = async (ctx) => {
    
    const res = await handleAuthSSR(ctx)

    return {"res" : res }
}