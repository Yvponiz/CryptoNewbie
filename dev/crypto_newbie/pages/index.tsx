import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import SearchBar from '../frontend/components/searchBar'
import Footer from '../frontend/components/footer'
// import { getSession } from '../common/getSession'
import { BestCrypto, TrendingCrypto } from '../frontend/components/cryptoPerfomance'
import { WorstCrypto } from '../frontend/components/cryptoPerfomance'
import { CryptoList } from '../frontend/components/cryptoList'


// export async function getServerSideProps({ req, res }) {
//   const session = await getSession(req, res);
//   session.views = session.views ? session.views + 1 : 1;
//   console.log("Session ID",session.id)
//   console.log(req.cookies)
//   return {
//     props: {
//       userid: session.views ?? 0,
//     },
//   };
// }

interface Props {
  userid: number;
}

const Home: NextPage<Props> = (props:Props) => {

  return (
    <Layout className='container'>
      <Head>
        <title>Crypto Newbie | Accueil</title>
        <meta name="description" content="" />
        <link rel="icon" href="cryptonewbie.ico" />
      </Head>
      
      <main className='main'>
        <div className='section-performance'>
          {props.userid}
          <TrendingCrypto />
          <BestCrypto />
          <WorstCrypto />
        </div>

        <div className='search-bar'>
          <SearchBar />
        </div>

        <div className='section-list'>
          <CryptoList />
        </div>
      </main>
      <Footer></Footer>
    </Layout>
  )
}

export default Home
