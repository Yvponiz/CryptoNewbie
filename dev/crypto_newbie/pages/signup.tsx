import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../frontend/components/footer'
import Layout from '../frontend/components/layout'
import SignupForm from '../frontend/components/signupForm'

const Signup: NextPage = () => {
    return (
        <Layout className='container'>
        <Head>
          <title>Crypto Newbie | Signup</title>
          <meta name="description" content="" />
          <link rel="icon" href="cryptonewbie.ico" />                  
        </Head>
  
        <main className='main'>
            <div className='content-form'>
              <SignupForm />
            </div>

        </main>
        <Footer></Footer>
      </Layout>
    )
}

export default Signup