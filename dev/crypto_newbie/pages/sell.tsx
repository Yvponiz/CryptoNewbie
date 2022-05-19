import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Welcome } from '.';
import { BuyBox } from '../frontend/components/buyBox';
import Layout from '../frontend/components/layout';
import { SearchBar } from '../frontend/components/searchBar';
import { UserCoinList } from '../frontend/components/userCoinList';
import { CoinContext, getCoinState, updateCoin } from '../frontend/context/coinContext';
import { Coin } from '../frontend/utils/coin';
import commonProps, { UserProps } from '../frontend/utils/commonProps';

export async function getServerSideProps({ req, res }) {
  // const regEx = new RegExp(".+/(.+)$"); // Expression regulìère pour prendre l'URL après le buy/
  // const regId = req.url.match(regEx); // Url de la page, fonctionnalité de NextJS (NextRequest)
  // const id = regId[1] // Retourne un array, index 1 est le retour de l'expression régulière
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
          <div style={{ marginTop: '50px' }}>
            <UserCoinList/>
          </div>
        </CoinContext.Provider>
      </main>
    </Layout>
  )
}

export default Sell