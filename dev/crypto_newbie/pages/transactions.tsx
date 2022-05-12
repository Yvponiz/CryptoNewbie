import type { NextPage } from 'next'
import Head from 'next/head'
import { Welcome } from '.'
import Layout from '../frontend/components/layout'
import commonProps, { UserProps } from '../frontend/utils/commonProps'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const Transactions: NextPage<UserProps> = ({ isLoggedIn, firstName }) => {

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Portfolio</title>
      </Head>

      <main className='main'>
        <div className='page-top'>
          <div className='welcome-section'>
            <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
          </div>
          <h1>Transactions</h1>
        </div>
        <div className='buy-sell'>
          <a href="">Acheter</a>
          <a href="sell">Vendre</a>
        </div>
      </main>
    </Layout>
  )
}

export default Transactions