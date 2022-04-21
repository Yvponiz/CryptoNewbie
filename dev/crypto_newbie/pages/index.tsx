import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import SearchBar from '../frontend/components/searchBar'
import { BestCrypto, TrendingCrypto } from '../frontend/components/cryptoPerfomance'
import { WorstCrypto } from '../frontend/components/cryptoPerfomance'
import { CryptoList } from '../frontend/components/cryptoList'
import commonProps, { CommonProps } from '../frontend/utils/commonProps'

type Props = CommonProps

export function getServerSideProps({ req, res }){
  return commonProps({req, res})
}

const Home: NextPage<Props> = (props:Props) => {
  console.log("PROPS",props)
  {props.firstName}
  return (
    <Layout isLoggedIn={props.isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="cryptonewbie.ico" />
      </Head>

      <main className='main'>
        <div className='section-performance'>
          {props.firstName}
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
