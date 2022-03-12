import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Form from '../components/signup'

const Signup: NextPage = () => {
    return (
        <Layout className='container'>
        <Head>
          <title>Crypto Newbie | Signup</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />                  
        </Head>
  
        <main className='main'>
            <div className='content-form'>
                {Form()}
            </div>

        </main>
  
      </Layout>
    )
}

export default Signup