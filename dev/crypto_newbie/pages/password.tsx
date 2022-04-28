import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../frontend/components/footer'
import Layout from '../frontend/components/layout'
import ChangePasswordForm from '../frontend/components/passwordForm'
import commonProps, { GreetingProps } from '../frontend/utils/commonProps'


export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

type Props = GreetingProps

const Password: NextPage<Props> = ({ isLoggedIn, firstName, lastName }) => {

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <Head>
        <title>Crypto Newbie | Connexion</title>
      </Head>

      <main className='main'>
        <div className='profile'>
          <div className='profile-top'>
            <h1 style={{ color: 'gold' }} >{firstName} {lastName}</h1>
          </div>
          <h1>Modification Mot de Passe</h1>

          <ChangePasswordForm />
        </div>
      </main>
    </Layout>
  )
}

export default Password