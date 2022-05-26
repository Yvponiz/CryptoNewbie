import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import LoginForm from '../frontend/components/loginForm'
import commonProps, { GreetingProps } from '../frontend/utils/commonProps'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

type Props = GreetingProps

const Login: NextPage<Props> = (props: Props) => {

  return (
    <Layout isLoggedIn={props.isLoggedIn} className='container'>
      <Head> <title>Crypto Newbie | Connexion</title> </Head>

      <main className='main'>
        <h1>Connexion</h1>
        <div className='content-form'>
          <LoginForm />
        </div>
      </main>
    </Layout>
  )
}

export default Login