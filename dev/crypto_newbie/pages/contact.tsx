import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

const Contact: NextPage = () => {
    return (
        <Layout className='container'>
        <Head>
          <title>Crypto Newbie | Contact</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />                  
        </Head>
  
        <main className='main'>
            <h1>Contactez-nous !</h1>
            <p>
              Le projet de Crypto-Newbie a été conçu par deux étudiants du DEC informatique au cegep du Vieux Montréal.
            </p>
            <p>
              Yvanoski Sanon et Nikolas Ouimet
            </p>

        </main>
  
      </Layout>
    )
}

export default Contact