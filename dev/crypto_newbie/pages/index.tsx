import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
<<<<<<< HEAD
import MainList from '../components/mainList'
import SearchBar from '../components/searchBar'
=======
import getPing from '../pages/api/coinGecko'
>>>>>>> 83365120d41bb87f473d6808fb93fb3c20f22240

const Home: NextPage = () => {


  return (
    <Layout className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />      
      </Head>

      <main className='main'>
<<<<<<< HEAD
        <div className='search-section'>
          <form action="#" method="post">
            <input type="text" id="search" name="search" placeholder="Rechercher" />
            <button type='submit'>Rechercher</button>
          </form>
        </div>
        
=======
        {getPing}
>>>>>>> 83365120d41bb87f473d6808fb93fb3c20f22240
      </main>

    </Layout>
  )
}

export default Home
