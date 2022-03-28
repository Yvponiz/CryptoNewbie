import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SearchBar from '../components/searchBar'
import Layout from '../components/layout'
import Image from 'next/image'


const Home: NextPage = () => {

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
      <div>
        <SearchBar />
      </div>
      <div>
      <ul>{handlerState.slice(0,20).map((coin) => <li key={coin.id}>{coin.symbol} {coin.name} {coin.market_data.current_price.cad+'$'} <Image src={coin.image.small} width="30px" height="30px" alt='coin image'></Image> </li>)}</ul>
      </div>
      </main>

    </Layout>
  )
}

export default Home