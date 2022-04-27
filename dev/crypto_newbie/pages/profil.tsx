import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import { FormEvent, FunctionComponent, useState } from 'react'
import commonProps, { CommonProps, ProfilProps } from '../frontend/utils/commonProps'
import { readFileSync } from 'fs'

type UserProps = ProfilProps

function onSubmit(event: FormEvent, state) {
  event.preventDefault()
  fetch("/api/changeEmail",
    {
      body: JSON.stringify(state),
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((response) => response.json())
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        window.location.href = "profil"
      }
      else if (data.status === "erreur") {
        window.alert(data.errors.join("\n"))
      }
      console.log(data)
    })
  console.log(state)
}

export function getServerSideProps({ req, res }) {
  return commonProps({ req, res })
}

const UserProfile: FunctionComponent<UserProps> = ({ isLoggedIn, lastName, firstName, email, dateOfBirth }) => {

  const [state, changeState] = useState({
    editable: false,
    email: null
  })

  return isLoggedIn ? (
    <div className='profil-box'>
      <li>Nom : {lastName}</li>
      <li>Prénom : {firstName}</li>

      <form className='change-email' onSubmit={(event) => onSubmit(event, state)}>
        Courriel : 
        <blockquote contentEditable={true} onInput={(event) => changeState({ ...state, email: event.currentTarget.textContent })}>
          {email}
        </blockquote>
        <button style={{ padding: '2px' }}> Modifier courriel</button>
      </form>

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
      <button style={{ padding: '10px', marginTop: '30px', fontSize: '1em' }}>
        <a className='signup' href="password"> Modifier Mot de Passe</a>
      </button>
    </div>
  </main>
</Layout>
)

export default Profil
