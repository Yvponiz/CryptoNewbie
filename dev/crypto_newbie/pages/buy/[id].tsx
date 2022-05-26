import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Welcome } from '..'
import { BuyBox } from '../../frontend/components/buyBox'
import Layout from '../../frontend/components/layout'
import { SearchBar } from '../../frontend/components/searchBar'
import { CoinContext, getCoinState, updateCoin } from '../../frontend/context/coinContext'
import { Coin } from '../../frontend/utils/coin'
import commonProps, { UserProps } from '../../frontend/utils/commonProps'

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
  const router = useRouter();

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Acheter</title>
      </Head>

      <main className='main'>
        <CoinContext.Provider value={coinState as Coin}>
          <div className='page-top'>
            <div className='welcome-section'>
              <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
            </div>
            <h1>Acheter</h1>
          </div>
          <div className='buy-account-amount'>
            <h2>Montant dans le compte :</h2>
            <h2 style={{color:'gold'}}>{`${accountAmount.toLocaleString()}$`}</h2>
          </div>
          <div style={{ marginTop: '50px', display: 'flex', alignSelf: 'flex-start' }} className='search-bar'>
            <SearchBar/>
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