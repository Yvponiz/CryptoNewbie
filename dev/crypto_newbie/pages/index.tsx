import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SearchBar from '../frontend/components/searchBar'
import Layout from '../frontend/components/layout'
import SearchBar from '../frontend/components/searchBar'
import Footer from '../frontend/components/footer'
// import { getSession } from '../common/getSession'
import { BestCrypto, TrendingCrypto } from '../frontend/components/cryptoPerfomance'
import { WorstCrypto } from '../frontend/components/cryptoPerfomance'
import { CryptoList } from '../frontend/components/cryptoList'



interface Props {
  userid: number;
}

const Home: NextPage<Props> = (props: { userid: number | null }) => {

  return (
    <Layout className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="cryptonewbie.ico" />
      </Head>
      
      <main className='main'>
        <div className='section-performance'>
          {props.userid}
          <TrendingCrypto />
          <BestCrypto />
          <WorstCrypto />
        </div>

        <div className='search-bar'>
          <SearchBar />
          
        </div>

        <div className='section-list'>
          <CryptoList />
        </div>
      </main>
    </Layout>
  )
}

export default Home