import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import SignupForm from '../components/signupForm'
import commonProps, { GreetingProps } from '../models/commonProps'
import { useTranslation } from 'react-i18next'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

type Props = GreetingProps

const Signup: NextPage<Props> = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Layout isLoggedIn={props.isLoggedIn} className='container'>
      <main className='main'>
        <h1>{t('signup.signup')}</h1>
        <div className='content-form'>
          <SignupForm />
        </div>

      </main>
    </Layout>
  )
}

export default Signup