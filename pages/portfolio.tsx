import type { NextPage } from 'next'
import Head from 'next/head'
import { Welcome } from '.'
import Layout from '../components/layout'
import { PortfolioInfo } from '../components/portfolioInfos'
import commonProps, { UserProps } from '../models/commonProps'
import { useTranslation } from 'react-i18next'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const Portfolio: NextPage<UserProps> = ({ isLoggedIn, firstName }) => {
  const { t } = useTranslation();

  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <main className='main'>
        <div className='page-top'>
          <div className='welcome-section'>
            <Welcome isLoggedIn={isLoggedIn} firstName={firstName} />
          </div>
          <h1>{t('portfolio.portfolio')}</h1>
        </div>
        <div className='portfolio-info'>
          <PortfolioInfo />
        </div>

      </main>
    </Layout>
  )
}

export default Portfolio