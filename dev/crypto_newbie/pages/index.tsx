import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import { SearchBar } from '../frontend/components/searchBar'
import { BestCrypto, TrendingCrypto } from '../frontend/components/cryptoPerfomance'
import { WorstCrypto } from '../frontend/components/cryptoPerfomance'
import { CryptoList } from '../frontend/components/cryptoList'
import commonProps, { GreetingProps } from '../frontend/utils/commonProps'
import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

export const Welcome: FunctionComponent<GreetingProps> = ({ isLoggedIn, firstName }) => {
  const h = new Date().getHours()
  let message = ""
  if (h >= 9 && h < 18)
    message = "Bonjour"
  else if (h >= 18 && h < 23)
    message = "Bonsoir"
  else
    message = "Bon matin"

  return isLoggedIn ? (
    <h1>{message}, {firstName}</h1>
  ) : <></>
}

const Home: NextPage<GreetingProps> = ({ isLoggedIn, firstName }) => {

  const router = useRouter(); // Redirection vers url avec next

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="cryptonewbie.ico" />
      </Head>

      <main className='main'>
        <div className='welcome-section'>
          <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
        </div>
        <div className='section-performance'>
          <TrendingCrypto />
          <BestCrypto />
          <WorstCrypto />
        </div>

        <div style={{ alignSelf: 'flex-start' }} className='search-bar'>
          <SearchBar isLoggedIn={isLoggedIn} onBuy={(coin)=> {router.push(`/buy/${coin.id}`)}}/>
        </div>

        <div className='section-list'>
          <CryptoList />
        </div>
      </main>

    </Layout>
  )
}

export default Home
