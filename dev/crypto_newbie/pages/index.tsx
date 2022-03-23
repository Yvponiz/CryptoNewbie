import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import getPing from '../pages/api/coinGecko'

const Home: NextPage = () => {
  return (
    <Layout className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />      
      </Head>

      <main className='main'>
        {getPing}
      </main>

    </Layout>
  )
}

export default Home
