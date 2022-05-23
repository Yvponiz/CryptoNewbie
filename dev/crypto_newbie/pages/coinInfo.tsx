import type { NextPage } from 'next'
import Layout from '../frontend/components/layout'
import { CryptoInfos } from '../frontend/components/cryptoInfos'
import commonProps, { GreetingProps } from '../frontend/utils/commonProps'
import { Welcome } from '.'
import { useRouter } from 'next/router'
import { CoinContext, getCoinState, updateCoin } from '../frontend/context/coinContext'
import { Coin } from '../frontend/utils/coin'
import { CoinChart } from '../frontend/components/coinChart'


export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const setCoinName = () => {
  if (typeof window !== 'undefined') {
    let coinName = sessionStorage.getItem('coinName');
    console.log("coinInfo/coin: ", coinName);
    return coinName;
  }
}

const CoinInfos: NextPage<SearchProps & GreetingProps> = ({ isLoggedIn, onBuy, firstName }) => {
  const router = useRouter();
  const [coinState, setCoinState] = getCoinState()

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <title>Crypto Newbie | {setCoinName()}  </title>

      <main className='main'>
        <CoinContext.Provider value={coinState as Coin} >
          <div className='welcome-section'>
            <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
          </div>

          <CryptoInfos
            isLoggedIn={isLoggedIn}
            onSearch={(id) => updateCoin(id, setCoinState)}
            onBuy={(coin) => { router.push(`/buy/${coin.id}`) }}
          />
          <CoinChart />
          
        </CoinContext.Provider>
      </main>

    </Layout>
  )
}

export default CoinInfos