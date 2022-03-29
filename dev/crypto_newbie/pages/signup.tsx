import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
<<<<<<< HEAD
import SignupForm from '../components/signup'
=======
import SignupForm from '../components/signupForm'
>>>>>>> 75155911c1684d728e596ebb41b6d7c05d96b238

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
              <SignupForm />
            </div>

        </main>
  
      </Layout>
    )
}

export default Signup