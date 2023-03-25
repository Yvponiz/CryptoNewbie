import type { NextPage } from 'next'
import Head from 'next/head'
import { Welcome } from '.'
import Layout from '../components/layout'
import { PortfolioInfo } from '../components/portfolioInfos'
import commonProps, { UserProps } from '../models/commonProps'
 
export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const Portfolio: NextPage<UserProps> = ({ isLoggedIn, firstName }) => {

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
        <div className='portfolio-info'>
          <PortfolioInfo />
        </div>
        
      </main>
    </Layout>
  )
}

export default Portfolio