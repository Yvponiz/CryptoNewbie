import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Welcome } from '..'
import { BuyBox } from '../../frontend/components/buyBox'
import Layout from '../../frontend/components/layout'
import { SearchBar } from '../../frontend/components/searchBar'
import commonProps, { UserProps } from '../../frontend/utils/commonProps'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
} 

const Transactions: NextPage<UserProps> = ({ isLoggedIn, firstName }) => {
  const router = useRouter();
  const id = String(router.query.id);
  const [showDiv, setShowDiv] = useState(false);


  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Acheter</title>
      </Head>

      <main className='main'>
        <div className='page-top'>
          <div className='welcome-section'>
            <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
          </div>
          <h1>Acheter</h1>
        </div>
        <div></div>
        <div style={{ marginTop: '50px', display: 'flex', alignSelf: 'flex-start' }} className='search-bar'>
          <SearchBar isLoggedIn={isLoggedIn} onBuy={()=>{setShowDiv(true)}} defaultCoinId={id}/>
        </div>
        <div style={{marginTop:'50px'}}>
          {showDiv ? <BuyBox isLoggedIn={isLoggedIn}/> :null}
        </div>
      </main>
    </Layout>
  )
}

export default Transactions