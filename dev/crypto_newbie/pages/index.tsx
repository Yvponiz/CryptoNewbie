import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'


const Home: NextPage = () => {

  const [handlerState, setHandler] = useState([])
  const [pingState, setPing] = useState("Ping?"); //[données du state | par défaut "Ping?", fonction utilisée pour mettre à jour valeur]

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
        <div>{pingState}</div>
        <ul>{handlerState.slice(0,10).map((coin) => <li>{coin.id} {coin.symbol} {coin.name}</li>)}</ul>
      </main>

    </Layout>
  )
}

export default Home
