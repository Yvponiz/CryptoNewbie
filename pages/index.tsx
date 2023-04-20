import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import { SearchBar } from '../components/searchBar'
import { BestCrypto } from '../components/cryptoPerfomance'
import { CryptoList } from '../components/cryptoList'
import commonProps, { GreetingProps } from '../models/commonProps'
import { FunctionComponent, useEffect, useState } from 'react'
import { CoinContext, getCoinState } from '../context/coinContext'
import { Coin } from '../models/coin'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

export const Welcome: FunctionComponent<GreetingProps> = ({ isLoggedIn, firstName }) => {
  const h = new Date().getHours()
  let message = ""
  if (h >= 9 && h < 18)
    message = "Bonjour"
  else if (h >= 18 && h <= 23)
    message = "Bonsoir"
  else
    message = "Bon matin"

  return isLoggedIn ? (
    <h1>{message}, {firstName}</h1>
  ) : <></>
}

const Home: NextPage<GreetingProps> = ({ isLoggedIn, firstName }) => {
  const [coinState, setCoinState] = useState<Coin[]>([]);
  const { t } = useTranslation();
  useEffect(() => {
    fetch('/api/coinList')
      .then((res) => res.json())
      .then((data) => {
        setCoinState(data as Coin[]);
      });
  }, []);

  return (

    <Layout isLoggedIn={isLoggedIn} className='container'>
      <main className='main'>
        <div className='welcome-section'>
          <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
        </div>

        <div className='index-intro'>
          <Image
            src={'/bitcoin-logo.png'}
            height={80}
            width={80}
            alt='bitcoin logo'
            className='coin-logo bitcoin'
          />
          <h1>
            {t('index.introtrack')}
            <br/>
            <span>{t('index.introcrypto')}</span>
          </h1>
          <Image
            src={'/ethereum-logo.png'}
            height={80}
            width={80}
            alt='ethereum logo'
            className='coin-logo ethereum'
          />
        </div>

        <div className='section-performance'>
          <BestCrypto coins={coinState} />
        </div>

        <div className='link-crypto'>
          <Link
            target='_blank'
            href='https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit#gid=0' rel="noreferrer">
            {t('index.list')}
          </Link>
        </div>

        <div className='search-bar'>
          <SearchBar />
        </div>

        <div className='section-list'>
          <CryptoList coins={coinState} />
        </div>
      </main>

    </Layout>
  )
}

export default Home
