import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Welcome } from '.'
import Layout from '../components/layout'
import { TransactionsInfo } from '../components/transactionsInfo'
import commonProps, { UserProps } from '../models/commonProps'

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
          <Link href="/buy">Acheter</Link>
          <Link href="/sell">Vendre</Link>
        </div>
        <div>
          <TransactionsInfo/>
        </div>
      </main>
    </Layout>
  )
}

export default Transactions