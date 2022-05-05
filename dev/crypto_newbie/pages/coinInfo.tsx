import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import CryptoInfos from '../frontend/components/cryptoInfos'
import commonProps, { CommonProps } from '../frontend/utils/commonProps'

type Props = CommonProps


const CoinInfos: NextPage<Props> = ({isLoggedIn}) => {

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="cryptonewbie.ico" />
      </Head>

      <main className='main'>
        <div className='coin-infos'>
          <CryptoInfos />
        </div>
      </main>
      
    </Layout>
  )
}

export default CoinInfos