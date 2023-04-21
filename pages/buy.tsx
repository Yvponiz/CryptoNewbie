import type { NextPage } from 'next'
import Head from 'next/head'
import { Welcome } from '.'
import Layout from '../components/layout'
import { SearchBar } from '../components/searchBar'
import commonProps, { UserProps } from '../models/commonProps'
import { useTranslation } from 'react-i18next'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const Transactions: NextPage<UserProps> = ({ isLoggedIn, firstName, lastName }) => {
  const { t } = useTranslation();
  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <main className='main'>
        <div className='page-top'>
          <div className='welcome-section'>
            <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
          </div>
          <h1>{t('transaction.buy')}</h1>
        </div>
        <div style={{ marginTop: '50px' }} className='search-bar'>
          <SearchBar />
        </div>
      </main>
    </Layout>
  )
}

export default Transactions