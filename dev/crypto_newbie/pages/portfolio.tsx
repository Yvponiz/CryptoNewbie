import type { NextPage } from 'next'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Welcome } from '.'
import Layout from '../frontend/components/layout'
import * as utils from "../../crypto_newbie/backend/DButils";
import { Portfolio } from '../backend/entity/Portfolio'

import { PortfolioInfo } from '../frontend/components/portfolioInfos'
import commonProps, { UserProps } from '../frontend/utils/commonProps'
 
export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

export const getUserCryptos : FunctionComponent<GreetingProps> = ({isLoggedIn}) => {
  utils.getConnection().then(async (connection) => {

    const { , password} = req.body
    const cryptoRepo = connection.getRepository<Portfolio>("User");
    const user = await userRepo.findOne({email, password:btoa(password)}) 
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
          <PortfolioInfo />
      </main>
    </Layout>
  )
}

export default Portfolio