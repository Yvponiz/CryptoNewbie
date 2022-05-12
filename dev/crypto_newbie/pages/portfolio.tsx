import type { NextPage } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Welcome } from '.'
import Layout from '../frontend/components/layout'
import commonProps, { GreetingProps, UserProps } from '../frontend/utils/commonProps'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

export const getUserCryptos : FunctionComponent<GreetingProps> = ({isLoggedIn}) => {

  return (
    <h1>Bonsoir</h1>
  )
}

const Portfolio: NextPage<UserProps> = ({ isLoggedIn, firstName, lastName }) => {

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
          <h1>Portfolio</h1>
        </div>
      </main>
    </Layout>
  )
}

export default Portfolio