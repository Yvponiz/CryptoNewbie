import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

const Home: NextPage = () => {

  const CoinGecko = require('coingecko-api');
  const CoinGeckoClient = new CoinGecko();

  var func = async() => {
    let data = await CoinGeckoClient.ping();
  };
  // en attendant, juste pour tester

  return (
    <Layout className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />      
      </Head>

      <main className='main'>
        <div className='search-section'>
          <form action="/api/search" method="post">
            <input type="text" id="search" name="search" placeholder="Rechercher" />
            <button type='submit'>Rechercher</button>
          </form>
        </div>
        
      </main>

    </Layout>
  )
}

export default Home
