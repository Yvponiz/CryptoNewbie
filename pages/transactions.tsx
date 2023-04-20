import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Welcome } from '.'
import Layout from '../components/layout'
import { TransactionsInfo } from '../components/transactionsInfo'
import commonProps, { UserProps } from '../models/commonProps'
import { useTranslation } from 'react-i18next'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const Transactions: NextPage<UserProps> = ({ isLoggedIn, firstName }) => {
  const { t } = useTranslation();

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <main className='main'>
        <div className='page-top'>
          <div className='welcome-section'>
            <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
          </div>
          <h1>{t('transaction.transaction')}</h1>
        </div>
        <div className='buy-sell'>
          <Link href="/buy">{t('transaction.buy')}</Link>
          <Link href="/sell">{t('transaction.sell')}</Link>
        </div>
        <div>
          <TransactionsInfo />
        </div>
      </main>
    </Layout>
  )
}

export default Transactions