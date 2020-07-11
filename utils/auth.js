import axios from 'axios'
import { Cookies } from 'react-cookie'
import serverUrl from './env'

const cookies = new Cookies()


export default async function handleAuthSSR(ctx) {
    
    let token = null
    let user = null

    if(ctx?.req?.headers?.cookie) {
        token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    } else {
        token = cookies.get('token')
    }
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const resp = await axios.get(serverUrl + '/admin/users', config)
        
        return config
    } catch (err) {
        
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res.end()
        } 
    }
}