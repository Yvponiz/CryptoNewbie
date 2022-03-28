import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Login from '../components/login'

const Connexion: NextPage = () => {

    return (
      <Layout className='container'>
        <Head>
          <title>Crypto Newbie | Connexion</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />                  
        </Head>
  
        <main className='main'>
            <div className='content-form'>
              <Login />
            </div>

        </main>
  
      </Layout>
    )
}
  
export default Connexion