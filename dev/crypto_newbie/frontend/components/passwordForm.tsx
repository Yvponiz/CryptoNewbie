import { FormEvent, useState } from "react"

function onSubmit(event: FormEvent, state) {
  event.preventDefault()
  fetch("/api/changePassword",
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

export default function ChangePasswordForm() {

  const [state, changeState] = useState({
    oldPassword: null,
    newPassword: null,
    confPassword: null
  })

  return (
    <form className="form" action="/profile" method="post" onSubmit={(event) => onSubmit(event, state)}>

      <label htmlFor="oldPassword">Ancien Mot de Passe</label>
      <input onChange={(event) => changeState({ ...state, oldPassword: event.target.value })} type="password" id="oldPassword" name="oldPassword" required />

      <label htmlFor="newPassword">Nouveau Mot de passe</label>
      <input onChange={(event) => changeState({ ...state, newPassword: event.target.value })} type="password" id="newPassword" name="newPassword" required />

      <label htmlFor="confPassword">Confirmer Nouveau Mot de passe</label>
      <input onChange={(event) => changeState({ ...state, confPassword: event.target.value })} type="password" id="confPassword" name="confPassword" required />

      <button className="submit-button" style={{ marginTop: '1em' }} type="submit">Submit</button>
    </form>
  )
}
