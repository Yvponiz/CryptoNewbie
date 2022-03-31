import type { NextPage } from 'next'
import Head from 'next/head'
<<<<<<< HEAD
import Link from 'next/link'
import SearchBar from '../components/searchBar'
import Layout from '../components/layout'
=======
import Layout from '../frontend/components/layout'
>>>>>>> d6a85a6c40ca775514f61dc9f7d098adf2efe685
import Image from 'next/image'
import SearchBar from '../frontend/components/searchBar'
import { useState, useEffect } from 'react'
import BestCrypto from '../frontend/components/cryptoPerfomance'
import { getSession } from '../common/getSession'


export async function getServerSideProps({ req, res }) {
  const session = await getSession(req, res);

  return {
    props: {
      userid: session.userid ?? null,
    },
  };
}

interface Props{
  userid: number; 
}

const Home: NextPage<Props> = (props:{userid:number | null}) => {

  const [handlerState, setHandler] = useState([])
  //const [pingState, setPing] = useState("Ping?"); //[données du state | par défaut "Ping?", fonction utilisée pour mettre à jour valeur]

  /* Facon de faire avant le Hook (useEffect + fetch)
  const [listState, setList] = useState("List?");
  getPing().then((data) => {
    console.log(data.data.gecko_says)
    setPing(data.data.gecko_says)
  })
  getList().then((data) => {
    console.log(data)
  })*/

  useEffect(() => { // Fetch les data coté client, empêche le data d'être constament fetch
    fetch('/api/coinGecko') // Appelle la fonction exporté par défaut dans coinGecko, fonctionne même si en rouge
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setHandler(data)
      })
  }, [])

  return (
    <Layout className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <div className='search-bar'>
          <SearchBar />
        </div>
        <div className='section-list'>
          <div className='titles-list'> 
            <p>#</p>
            <p>Logo</p>
            <p>Nom</p>
            <p>Symbol</p>
            <p>Prix</p>
            <p>Market cap</p>
            <p>24 heures</p>
          </div>
          <div>{handlerState.slice(0,25).map((coin) => <div className='coin' key={coin.id}> 
            <li>{coin.market_data.market_cap_rank}</li> 
            <li><Image src={coin.image.small} width="30px" height="30px" alt='coin image'></Image></li>
            <li>{coin.name}</li> 
            <li>{coin.symbol}</li> 
            <li>{coin.market_data.current_price.cad.toLocaleString()+' $'}</li> 
            <li>{coin.market_data.market_cap.cad.toLocaleString()+' $'}</li> 
            <li>{coin.market_data.price_change_percentage_24h.toFixed(2)+' %'}</li> 
          </div>)}</div>
        </div>
      </main>

    </Layout>
  )
}

export default Home