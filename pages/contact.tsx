import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import commonProps, { GreetingProps } from '../models/commonProps'
import { useTranslation } from 'react-i18next'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

type Props = GreetingProps

const Contact: NextPage<Props> = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Layout isLoggedIn={props.isLoggedIn} className='container'>

      <main className='main'>
        <div className='contact'>
          <h1>{t('contact.us')}</h1>
          <p>Yvanoski Sanon : yvanoski.s@gmail.com</p>
          <p>Nikolas Ouimet : e.nouimet@etu.cvm.qc.ca</p>
        </div>
      </main>
    </Layout>
  )
}

export default Contact