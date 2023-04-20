import type { NextPage } from 'next'
import Head from 'next/head'
import { Welcome } from '..'
import { BuyBox } from '../../components/buyBox'
import Layout from '../../components/layout'
import { SearchBar } from '../../components/searchBar'
import { CoinContext, getCoinState, updateCoin } from '../../context/coinContext'
import { Coin } from '../../models/coin'
import commonProps, { UserProps } from '../../models/commonProps'
import { useTranslation } from 'react-i18next'

export async function getServerSideProps({ req, res }) {
  const regEx = new RegExp(".+/(.+)$"); // Expression regulìère pour prendre l'URL après le buy/
  const regId = req.url.match(regEx); // Url de la page, fonctionnalité de NextJS (NextRequest)
  const id = regId[1] // Retourne un array, index 1 est le retour de l'expression régulière
  const common = await commonProps({ req, res })
  const props = { id, ...common.props } as InitialProps // object contenant props

  return { props }
}

type InitialProps = UserProps & {
  id: string;
}

const Buy: NextPage<InitialProps> = ({ isLoggedIn, firstName, id, accountAmount }) => {
  const [coinState, setCoinState] = getCoinState(id)
  const { t } = useTranslation();

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <main className='main'>
        <CoinContext.Provider value={coinState as Coin}>
          <div className='page-top'>
            <div className='welcome-section'>
              <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
            </div>
            <h1> {t('transaction.buy')} </h1>
          </div>
          <div className='buy-account-amount'>
            <h2>{t('transaction.balance')} :</h2>
            <h2 style={{ color: 'gold' }}>{`${accountAmount.toLocaleString()}$`}</h2>
          </div>
          <div style={{ marginTop: '50px', display: 'flex' }} className='search-bar'>
            <SearchBar />
          </div>
          <div style={{ marginTop: '50px' }}>
            <BuyBox coinId={id} />
          </div>
        </CoinContext.Provider>
      </main>
    </Layout>
  )
}

export default Buy

// Code pour expression régulière inspiré de :
// https://stackoverflow.com/a/57295875