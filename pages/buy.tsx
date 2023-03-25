import type { NextPage } from 'next'
import Head from 'next/head'
import { Welcome } from '.'
import Layout from '../components/layout'
import {SearchBar} from '../components/searchBar'
import commonProps, { UserProps } from '../models/commonProps'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const Transactions: NextPage<UserProps> = ({ isLoggedIn, firstName, lastName }) => {

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Acheter</title>
      </Head>

      <main className='main'>
        <div className='page-top'>
          <div className='welcome-section'>
            <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
          </div>
          <h1>Acheter</h1>
        </div>
        <div style={{marginTop:'50px'}} className='search-bar'>
            <SearchBar/>
        </div>
      </main>
    </Layout>
  )
}

export default Transactions