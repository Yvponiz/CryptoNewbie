import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import SignupForm from '../components/signupForm'
import commonProps, { GreetingProps } from '../models/commonProps'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

type Props = GreetingProps

const Signup: NextPage<Props> = (props: Props) => {
  return (
    <Layout isLoggedIn={props.isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Inscription</title>
      </Head>

      <main className='main'>
        <h1>Inscription</h1>
        <div className='content-form'>
          <SignupForm />
        </div>

      </main>
    </Layout>
  )
}

export default Signup