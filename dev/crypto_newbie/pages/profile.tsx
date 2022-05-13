import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import { FormEvent, FunctionComponent, useState } from 'react'
import commonProps, { UserProps } from '../frontend/utils/commonProps'
import { EmailField } from '../frontend/components/profile/emailField'


const UserProfile: FunctionComponent<UserProps> = ({ isLoggedIn, lastName, firstName, email, dateOfBirth }) => {

  return isLoggedIn ? (
    <div className='profile-box'>
      <li>Nom : {lastName}</li>
      <li>Prénom : {firstName}</li>
      <EmailField
        isLoggedIn={isLoggedIn}
        email={email}
      />
      <li>Date de naissance : {dateOfBirth} </li>
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
        <li>Montant dans le compte : {accountAmount.toLocaleString()}$</li>
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
      <button style={{ padding: '10px', marginTop: '30px', fontSize: '1em' }}>
        <a className='signup' href="password"> Modifier Mot de Passe</a>
      </button>
    </div>
  </main>
</Layout>
)

export default Profile
