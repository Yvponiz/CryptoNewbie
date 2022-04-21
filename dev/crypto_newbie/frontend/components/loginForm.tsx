import { FormEvent, useState } from "react"

function onSubmit(event: FormEvent, state) {
  event.preventDefault()
  fetch("/api/login",
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
          window.location.href = "/"
        }
        else if (data.status === "erreur") {
          window.alert(data.errors.join("\n"))
        }
        console.log(data)
      })
  console.log(state)
}

export default function Login() {

  const [state, changeState] = useState({
    email: null,
    password: null,
  })

  return (
    <form className="form" action="/index" method="post" onSubmit={(event) => onSubmit(event, state)}>
      <h1>Vous avez un compte ? connectez vous</h1>

      <label htmlFor="courriel">Courriel</label>
      <input onChange={(event) => changeState({ ...state, email: event.target.value })} type="text" id="courriel" name="email" required />

      <label htmlFor="password">Mot de passe</label>
      <input onChange={(event) => changeState({ ...state, password: event.target.value })} type="password" id="password" name="password" required />

      <button type="submit">Submit</button>

      <h1>Pas encore de compte ? Créez en un</h1>
      <a href="signup">Créer un compte</a>
    </form>
  )
}
