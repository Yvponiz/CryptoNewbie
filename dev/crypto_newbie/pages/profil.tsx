import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import { FunctionComponent } from 'react'
import commonProps, { CommonProps, ProfilProps } from '../frontend/utils/commonProps'

type UserProps = ProfilProps

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const UserProfile: FunctionComponent<UserProps> = ({ isLoggedIn, lastName, firstName, email, dateOfBirth }) => {
  return isLoggedIn ? (
    <div className='profil-box'>
      <li>Nom : {lastName}</li>
      <li>Prénom : {firstName}</li>
      <li>Courriel : {email}</li>
      <li>Date de naissance : {dateOfBirth} </li>
    </div>
  ) : <></>
}

const Profil: NextPage<UserProps> = ({ isLoggedIn, lastName, firstName, email, dateOfBirth, accountType, accountAmount }) =>
(<Layout isLoggedIn={isLoggedIn} className='container'>
  <Head> <title>Crypto Newbie | Profil</title> </Head>

  <main className='main'>
    <div className='profil'>
      <div className='profil-top'>
        <h1>{firstName} {lastName}</h1>
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
     <button style={{ padding: '10px' }}> <a className='signup' href="password"> Modifier Mot de Passe</a> </button>
    </div>
  </main>
</Layout>
)

export default Profil
