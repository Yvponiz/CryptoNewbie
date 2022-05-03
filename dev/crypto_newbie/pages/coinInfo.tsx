import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import commonProps, { CommonProps } from '../frontend/utils/commonProps'
import { FunctionComponent } from 'react'

type Props = CommonProps

let queryString = window.location.search.substring(1);
console.log(queryString);

const CoinInfos: NextPage<Props> = ({isLoggedIn}) => {

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="cryptonewbie.ico" />
      </Head>

      <main className='main'>
        <div className='coin-info'>
          
        </div>
      </main>
      
    </Layout>
  )
}

export default CoinInfos