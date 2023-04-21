import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Welcome } from '.';
import Layout from '../components/layout';
import { SellComponent } from '../components/sellComponent';
import { CoinContext, getCoinState } from '../context/coinContext';
import { Coin } from '../models/coin';
import commonProps, { UserProps } from '../models/commonProps';
import { useTranslation } from 'react-i18next';

export async function getServerSideProps({ req, res }) {
  const common = await commonProps({ req, res })
  const props = {  ...common.props } as InitialProps // object contenant props

  return { props }
}

type InitialProps = UserProps & {
  id: string;
}

const Sell: NextPage<InitialProps> = ({ isLoggedIn, firstName, id, accountAmount }) => {
  const [coinState, setCoinState] = getCoinState(id)
  const router = useRouter();
  const { t } = useTranslation();
  
  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <main className='main'>
        <CoinContext.Provider value={coinState as Coin}>
          <div className='page-top'>
            <div className='welcome-section'>
              <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
            </div>
            <h1>{t('transaction.sell')}</h1>
          </div>
          <div className='buy-account-amount'>
            <h2>{t('transaction.balance')}</h2>
            <h2 style={{color:'gold'}}>{`${accountAmount.toLocaleString()}$`}</h2>
          </div>
          <div className='sell-component'>
            <SellComponent/>
          </div>
        </CoinContext.Provider>
      </main>
    </Layout>
  )
}

export default Sell