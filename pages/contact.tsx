import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import commonProps, { GreetingProps } from '../models/commonProps'

export function getServerSideProps({ req, res }){
  return commonProps({req, res})
}

type Props = GreetingProps

const Contact: NextPage<Props> = (props:Props) => {
    return (
        <Layout isLoggedIn={props.isLoggedIn} className='container'>
        <Head> <title>Crypto Newbie | Contactez-Nous</title> </Head>
  
        <main className='main'>
          <div className='contact'>
          <h1>Pour nous contacter</h1>
            <p>Yvanoski Sanon : e.ysanon@etu.cvm.qc.ca</p>
            <p>Nikolas Ouimet : e.nouimet@etu.cvm.qc.ca</p>
          </div>
        </main>
      </Layout>
    )
}

export default Contact