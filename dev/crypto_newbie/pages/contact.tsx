import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../frontend/components/footer'
import Layout from '../frontend/components/layout'
import commonProps, { CommonProps } from '../frontend/utils/commonProps'

export function getServerSideProps({ req, res }){
  return commonProps({req, res})
}

type Props = CommonProps

const Contact: NextPage<Props> = (props:Props) => {
    return (
        <Layout isLoggedIn={props.isLoggedIn} className='container'>
        <Head>
          <title>Crypto Newbie | Contactez-Nous</title>
          <meta name="description" content="" />
          <link rel="icon" href="cryptonewbie.ico" />                 
        </Head>
  
        <main className='main'>
          <div className='contact'>
            <h1>Contactez-nous !</h1>
            <p>
              Le projet de Crypto-Newbie a été conçu par deux étudiants du DEC informatique au cegep du Vieux Montréal.
            </p>
            <p>
              Yvanoski Sanon et Nikolas Ouimet
            </p>
          </div>
        </main>
      </Layout>
    )
}

export default Contact