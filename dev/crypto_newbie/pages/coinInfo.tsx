import type { NextPage } from 'next'
import Layout from '../frontend/components/layout'
import {CryptoInfos} from '../frontend/components/cryptoInfos'
import commonProps, { GreetingProps } from '../frontend/utils/commonProps'
import { Welcome } from '.'
import { useEffect, useState } from 'react'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const setCoinName = () =>{
  if(typeof window!== 'undefined'){
    let coinName = sessionStorage.getItem('coinName');
    console.log("coinInfo/coin: ",coinName);
    return coinName;
  }
}

const CoinInfos: NextPage<GreetingProps> = ({isLoggedIn, firstName}) => {

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <title>Crypto Newbie | {setCoinName()}  </title>
      <main className='main'>
        <div className='welcome-section'>
          <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
        </div>
        <div className='coin-infos'>
          <CryptoInfos />
          {isLoggedIn ? <button className='button-buy' onClick={function () {
          location.href = "buy"}}>Acheter</button> : null}
        </div>
      </main>
      
    </Layout>
  )
}

export default CoinInfos