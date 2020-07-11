import Layout from '../../components/admin/Layout'
import HeaderTitle from '../../components/admin/HeaderTitle'
import React from 'react'
import handleAuthSSR from '../../utils/auth'


export default function Index() {

    return (
        <Layout>

            <HeaderTitle text="Bem Vindo" />

        </Layout>
    )

}

Index.getInitialProps = async (ctx) => {
    
    const res = await handleAuthSSR(ctx)

    return {"res" : res }
}