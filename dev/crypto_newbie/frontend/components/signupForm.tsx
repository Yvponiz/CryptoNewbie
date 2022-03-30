import { FormEvent, useState } from "react"
import { TypeCompte } from "../../common/typecompte"

function onSubmit(event: FormEvent, state) {
  event.preventDefault()
  fetch("/api/submitForm",
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
          window.location.href = "/connexion"
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
    prenom: null,
    nom: null,
    courriel: null,
    date_naissance: null,
    type_compte: null,
    password: null,
    conf_password: null,
  })

  //onChange={(event) => changeState({...state, prenom:event.target.value})} prends tout ce qui à dans le state plus nouvelle valeur

  return (
    <form className="form" action="/api/submitForm" method="POST" onSubmit={(event) => onSubmit(event, state)}>
      <label htmlFor="prenom">Prénom</label>
      <input onChange={(event) => changeState({ ...state, prenom: event.target.value })} type="text" id="prenom" name="prenom" required />

      <label htmlFor="nom">Nom</label>
      <input onChange={(event) => changeState({ ...state, nom: event.target.value })} type="text" id="nom" name="nom" required />

      <label htmlFor="courriel">Courriel</label>
      <input onChange={(event) => changeState({ ...state, courriel: event.target.value })} type="text" id="courriel" name="courriel" required />

      <label htmlFor="date_naissance">Date de naissance</label>
      <input onChange={(event) => changeState({ ...state, date_naissance: event.target.value })} type="date" id="date_naissance" name="date_naissance" required />

      <label htmlFor="type_compte">Le type de compte</label>
      <select onChange={(event) => changeState({ ...state, type_compte: parseInt(event.target.value, 10) })} id="type_compte" name="type_compte" required>
        {Object.values(TypeCompte).map((compte) => <option value={compte.Value}>{compte.Type}</option>)}
      </select>

      <label htmlFor="password">Mot de passe</label>
      <input onChange={(event) => changeState({ ...state, password: event.target.value })} type="password" id="password" name="password" required />

      <label htmlFor="conf_password">Confirmer le mot de passe</label>
      <input onChange={(event) => changeState({ ...state, conf_password: event.target.value })} type="password" id="conf_password" name="conf_password" required />

      <button type="submit">Submit</button>
    </form>
  )
}
