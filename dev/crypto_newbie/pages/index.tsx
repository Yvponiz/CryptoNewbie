import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import MainList from '../components/mainList'
import SearchBar from '../components/searchBar'

const Home: NextPage = () => {


  return (
    <Layout className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />      
      </Head>

      <main className='main'>
        <div className='search-section'>
          <form action="#" method="post">
            <input type="text" id="search" name="search" placeholder="Rechercher" />
            <button type='submit'>Rechercher</button>
          </form>
        </div>
        
      </main>

    </Layout>
  )
}

export default Home
