import type { NextPage } from 'next'
import Layout from '../components/layout'
import { CryptoInfos } from '../components/cryptoInfos'
import commonProps, { GreetingProps } from '../models/commonProps'
import { Welcome } from '.'
import { useRouter } from 'next/router'
import { CoinContext, getCoinState, updateCoin } from '../context/coinContext'
import { Coin } from '../models/coin'
import { SearchProps } from '../components/searchBar'
import { CoinChart } from '../components/coinChart'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}


const CoinInfos: NextPage<SearchProps & GreetingProps> = ({ isLoggedIn, firstName }) => {
  const [coinState, setCoinState] = getCoinState()
  const router = useRouter();
  
  const setCoinName = () => {
    const {coinName} = router.query;
    return coinName;
  }

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
       <main className='main'>
        <CoinContext.Provider value={coinState as Coin} >
          <div className='welcome-section'>
            <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
          </div>
          <div className='crypto-infos'>
            <CryptoInfos
              isLoggedIn={isLoggedIn}
              onSearch={(id) => updateCoin(id, setCoinState)}
              onBuy={(coin) => { router.push(`/buy/${coin.id}`) }}
            />
            <CoinChart />
          </div>
        </CoinContext.Provider>
      </main>

    </Layout>
  )
}

export default CoinInfos