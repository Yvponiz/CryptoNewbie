import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../frontend/components/footer'
import Layout from '../frontend/components/layout'
import SignupForm from '../frontend/components/signupForm'
import commonProps, { CommonProps } from '../frontend/utils/commonProps'

export function getServerSideProps({ req, res }){
  return commonProps({req, res})
}

type Props = CommonProps

const Signup: NextPage<Props> = (props:Props) => {
    return (
        <Layout isLoggedIn={props.isLoggedIn} className='container'>
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
      </Layout>
    )
}

export default Signup