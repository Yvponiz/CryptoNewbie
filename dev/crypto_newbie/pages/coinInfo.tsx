import type { NextPage } from 'next'
import Layout from '../frontend/components/layout'
import { CryptoInfos } from '../frontend/components/cryptoInfos'
import commonProps, { GreetingProps } from '../frontend/utils/commonProps'
import { Welcome } from '.'
import { useRouter } from 'next/router'

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

const CoinInfos: NextPage<GreetingProps> = ({ isLoggedIn, firstName }) => {
  const router = useRouter();
  
  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <title>Crypto Newbie | {setCoinName()}  </title>
      <main className='main'>
        <div className='welcome-section'>
          <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
        </div>
        <CryptoInfos isLoggedIn={isLoggedIn} onBuy={(coin)=> {router.push(`/buy/${coin.id}`)}} />
      </main>

    </Layout>
  )
}

export default CoinInfos