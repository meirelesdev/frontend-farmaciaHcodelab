import Head from 'next/head'

export default function HeadInfo(){
    return(
        <Head>           
            <meta name="theme-color" content="#337fed" />
            <meta name="description" content="Site desenvolvido para a fase 7 do curso HcodeLab" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/manifest.json" />  
            <title>Farmacia Hcode</title>
        </Head>
    )
}