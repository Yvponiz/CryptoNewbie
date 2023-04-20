import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import { FunctionComponent } from 'react'
import commonProps, { UserProps } from '../models/commonProps'
import { EmailField } from '../components/profile/emailField'
import { useTranslation } from 'react-i18next'
import i18n from '../utils/i18n'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const UserProfile: FunctionComponent<UserProps> = ({ isLoggedIn, lastName, firstName, email, dateOfBirth, accountType, accountAmount }) => {
  const { t } = useTranslation();
  const defaultLang: string = i18n.resolvedLanguage === 'en' ? 'fr' : 'en'

  return isLoggedIn ? (
    <div className='profile-account'>
      <li id='account-type'>
        {!defaultLang ?
          `${t('profile.account')} ${accountType}`
          :
          `${accountType} ${t('profile.account')}`
        }
      </li>
      <li id='account-amount'>{accountAmount.toFixed(2)} $</li>
      <div className='personnal-section'>
        <h2>{t('profile.info')}</h2>
        <li>{t('profile.lastname')} : {lastName}</li>
        <li>{t('profile.firstname')} : {firstName}</li>
        <li>{t('profile.birth')} : {dateOfBirth}</li>
        <EmailField
          isLoggedIn={isLoggedIn}
          email={email}
        />
      </div>
    </div>
  ) : <></>
}

const Profile: NextPage<UserProps> = ({ isLoggedIn, lastName, firstName, email, dateOfBirth, accountType, accountAmount }) => {
  const { t } = useTranslation();
  
  return (
    <Layout isLoggedIn={isLoggedIn} className='container'>
      <main className='main'>
        <h1 style={{ alignSelf: 'flex-end' }}>Profil</h1>
        <div className='profile'>
          <div className='profile-top'>
            <h1>{firstName} {lastName}</h1>
          </div>
          <UserProfile
            isLoggedIn={isLoggedIn}
            firstName={firstName}
            lastName={lastName}
            accountType={accountType}
            accountAmount={accountAmount}
            email={email}
            dateOfBirth={dateOfBirth} />
          <div className='password-reset-section'>
            <h2>{t('profile.modifypass')}</h2>
            <button className='submit-button' onClick={() => { window.location.href = "/password" }}>{t('profile.modifypass')}</button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Profile
