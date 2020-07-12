import Layout from '../../../components/admin/Layout'
import HeaderTitle from '../../../components/admin/HeaderTitle'
import React from 'react'
import handleAuthSSR from '../../../utils/auth'
import Card from '../../../components/admin/Card'
import serverUrl from '../../../utils/env'
import axios from 'axios'
import EditUser from '../../../components/admin/EditUser'

export default function editUser({ user }) {
    
    return (
        <Layout>

            <HeaderTitle text="Editar Usuario" />
            <Card>
            
                <EditUser user={user} />
            </Card>

        </Layout>
    )

}

editUser.getInitialProps = async (ctx) => {

    const { id } = ctx.query
    
    const config = await handleAuthSSR(ctx)

    const res = await axios.get(`${serverUrl}/users/${id}`)

    return {
        "user": res.data
    }


}