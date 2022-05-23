import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Welcome } from '.';
import Layout from '../frontend/components/layout';
import { SellComponent } from '../frontend/components/sellComponent';
import { CoinContext, getCoinState } from '../frontend/context/coinContext';
import { Coin } from '../frontend/utils/coin';
import commonProps, { UserProps } from '../frontend/utils/commonProps';

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

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Vendre</title>
      </Head>

      <main className='main'>
        <CoinContext.Provider value={coinState as Coin}>
          <div className='page-top'>
            <div className='welcome-section'>
              <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
            </div>
            <h1>Vendre</h1>
          </div>
          <div className='buy-account-amount'>
            <h2>Montant dans le compte :</h2>
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