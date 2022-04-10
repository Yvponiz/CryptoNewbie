import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import SearchBar from '../frontend/components/searchBar'
import Layout from '../frontend/components/layout'
import Image from 'next/image'
import Footer from '../frontend/components/footer'
import { useState, useEffect } from 'react'
import { getSession } from '../common/getSession'
import { BestCrypto } from '../frontend/components/cryptoPerfomance'
import { WorstCrypto } from '../frontend/components/cryptoPerfomance'



export async function getServerSideProps({ req, res }) {
  const session = await getSession(req, res);

  return {
    props: {
      userid: session.userid ?? null,
    },
  };
}

interface Props {
  userid: number;
}

const Home: NextPage<Props> = (props: { userid: number | null }) => {

  const [handlerState, setHandler] = useState([])
  //const [search, setSearch] = useState('');
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
    fetch('/api/coinList') // Appelle la fonction exporté par défaut dans coinGecko, fonctionne même si en rouge
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
        <link rel="icon" href="cryptonewbie.ico" />
      </Head>

      <main className='main'>
        <div className='section-performance'>
          <BestCrypto />
          <WorstCrypto />

        </div>
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
            <p>Capitalisation de marché</p>
            <p>24 heures</p>
          </div>
          <div>{handlerState.slice(0, 25).map((coin) =>
           <div className='coin' key={coin.id}>
              <li>{coin.market_data.market_cap_rank}</li>
              <li><Image src={coin.image.small} width="30px" height="30px" alt='coin image'></Image></li>
              <li>{coin.name}</li>
              <li>{coin.symbol}</li>
              <li>{coin.market_data.current_price.cad.toLocaleString() + ' $'}</li>
              <li>{coin.market_data.market_cap.cad.toLocaleString() + ' $'}</li>
              <li style={{ color: Math.sign(coin.market_data.price_change_percentage_24h) === -1 ? 'red' : 'green' }}>{coin.market_data.price_change_percentage_24h.toFixed(2) + ' %'}</li>
            </div>)
          }</div>
        </div>
      </main>
    </Layout>
  )
}

export default Home