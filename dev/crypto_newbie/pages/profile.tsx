import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import { FormEvent, FunctionComponent, useState } from 'react'
import commonProps, { UserProps } from '../frontend/utils/commonProps'
import { EmailField } from '../frontend/components/profile/emailField'

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const UserProfile: FunctionComponent<UserProps> = ({ isLoggedIn, lastName, firstName, email, dateOfBirth, accountType, accountAmount }) => {

  return isLoggedIn ? (
    <div className='profile-account'>
      <li id='account-type'>Compte {accountType}</li>
      <li id='account-amount'>{accountAmount.toFixed(2)} $</li>
      <div className='personnal-section'>
        <h2>Informations personnelles</h2>
        <li>Nom : {lastName}</li>
        <li>Prénom : {firstName}</li>
        <li>Date de naissance : {dateOfBirth}</li>
        <EmailField
          isLoggedIn={isLoggedIn}
          email={email}
        />
      </div>
    </div>
  ) : <></>
}

const Profile: NextPage<UserProps> = ({ isLoggedIn, lastName, firstName, email, dateOfBirth, accountType, accountAmount }) =>
(<Layout isLoggedIn={isLoggedIn} className='container'>
  <Head> <title>Crypto Newbie | Profil</title> </Head>

  <main className='main'>
    <h1 style={{alignSelf:'flex-end'}} >Profil</h1>
    <div className='profile'>
      <div className='profile-top'>
        <h1 style={{ color: 'gold' }} >{firstName} {lastName}</h1>
        <li>Compte {accountType}</li>
        <li>Montant dans le compte : {accountAmount?.toLocaleString()}$</li>
      </div>
      <div>
        <UserProfile
          isLoggedIn={isLoggedIn}
          firstName={firstName}
          lastName={lastName}
          accountType={accountType}
          accountAmount={accountAmount}
          email={email}
          dateOfBirth={dateOfBirth}
        />
      </div>
      <button className='submit-button'>
        <a className='signup' href="password"> Modifier Mot de Passe</a>
      </button>
    </div>
  </main>
</Layout>
)

export default Profile
