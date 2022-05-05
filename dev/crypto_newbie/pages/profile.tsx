import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../frontend/components/layout'
import { FormEvent, FunctionComponent, useState } from 'react'
import commonProps, { UserProps } from '../frontend/utils/commonProps'

type EmailProps = {
  isLoggedIn: boolean;
  email: string;
};

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
        window.location.href = "profile"
      }
      else if (data.status === "erreur") {
        window.alert(data.errors.join("\n"))
      }
      console.log(data)
    })
  console.log(state)
}

export async function getServerSideProps({ req, res }) {
  return await commonProps({ req, res })
}

const EmailField: FunctionComponent<EmailProps> = ({ email }) => {
  const [editable, setEditable] = useState(false);
  const handleClick = () => setEditable((editable) => !editable);
  const [state, changeState] = useState({
    email: null
  })

  if (!editable) {
    return (
      <>
        <div className='change-email'>
          Courriel :
          <blockquote contentEditable={editable} onInput={(event) => changeState({ ...state, email: event.currentTarget.textContent })}>
            {email}
          </blockquote>
          <button style={{ padding: '2px' }} onClick={handleClick}>Modifier courriel</button>
        </div>
      </>
    );
  }
  else {
    return (
      <form className='change-email' onSubmit={(event) => onSubmit(event, state)}>
        Courriel :
        <blockquote style={{ backgroundColor: '#00008b' }} contentEditable={editable} onInput={(event) => changeState({ ...state, email: event.currentTarget.textContent })}>
          {email}
        </blockquote>
        <button style={{ padding: '2px' }}> Modifier courriel</button>
      </form>
    )
  }
}

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
