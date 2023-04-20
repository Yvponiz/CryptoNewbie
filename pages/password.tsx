import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import ChangePasswordForm from '../components/passwordForm'
import commonProps, { GreetingProps } from '../models/commonProps'


export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

type Props = GreetingProps

const Password: NextPage<Props> = ({ isLoggedIn, firstName, lastName }) => {

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <main className='main'>
        <div className='profile'>
          <div className='profile-top'>
            <h1 style={{ color: 'gold' }} >{firstName} {lastName}</h1>
          </div>
          <h1>Réinitialisation du mot de passe</h1>

          <ChangePasswordForm />
        </div>
      </main>
    </Layout>
  )
}

export default Password