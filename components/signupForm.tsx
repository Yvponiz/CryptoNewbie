import { FormEvent, useState } from "react"
import { AccountType } from "../common/typecompte"

function onSubmit(event: FormEvent, state) {
  event.preventDefault()
  fetch("/api/signup",
    {
      body: JSON.stringify(state),
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((response) => response.json())
      .then((response) => response.json())
      .then((data) => {
        if(data.status === "success"){
          window.location.href = "/login"
        }
        else if (data.status === "erreur") {
          window.alert(data.errors.join("\n"))
        }
        console.log(data)
      })
  console.log(state)
}

export default function SignupForm() {

  const [state, changeState] = useState({
    firstName: null,
    lastName: null,
    email: null,
    dateOfBirth: null,
    accountType: 1,
    password: null,
    confPassword: null,
  })

  return (
    <form className="form" method="POST" onSubmit={(event) => onSubmit(event, state)}>
      <label htmlFor="prenom">Prénom</label>
      <input onChange={(event) => changeState({ ...state, firstName: event.target.value })} type="text" id="prenom" name="prenom" required />

      <label htmlFor="nom">Nom</label>
      <input onChange={(event) => changeState({ ...state, lastName: event.target.value })} type="text" id="nom" name="nom" required />

      <label htmlFor="courriel">Courriel</label>
      <input onChange={(event) => changeState({ ...state, email: event.target.value })} type="text" id="courriel" name="courriel" required />

      <label htmlFor="date_naissance">Date de naissance</label>
      <input onChange={(event) => changeState({ ...state, dateOfBirth: event.target.value })} type="date" id="date_naissance" name="date_naissance" required />

      <label htmlFor="type_compte">Le type de compte</label>
      <select onChange={(event) => changeState({ ...state, accountType: parseInt(event.target.value, 10) })} id="type_compte" name="type_compte" required>
        {Object.values(AccountType).map((compte) => <option defaultValue={1} key={compte.Value} value={compte.Value}>{compte.Type}</option>)}
      </select>

      <label htmlFor="password">Mot de passe</label>
      <input onChange={(event) => changeState({ ...state, password: event.target.value })} type="password" id="password" name="password" required />

      <label htmlFor="conf_password">Confirmer le mot de passe</label>
      <input onChange={(event) => changeState({ ...state, confPassword: event.target.value })} type="password" id="conf_password" name="conf_password" required />

      <button className="submit-button" style={{marginTop: '1em'}} type="submit">Créer un compte</button>
    </form>
  )
}
