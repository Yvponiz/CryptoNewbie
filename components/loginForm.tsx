import { FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"

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
      if (data.status === "success") {
        window.location.href = "/"
      }
      else if (data.status === "erreur") {
        window.alert(data.errors.join("\n"))
      }
    })
}

export default function LoginForm() {
  const [state, changeState] = useState({
    email: null,
    password: null,
  })

  const { t } = useTranslation();

  return (
    <form className="form" action="/index" method="post" onSubmit={(event) => onSubmit(event, state)}>
      <h1>{t('login.intro')}</h1>

      <label htmlFor="courriel">{t('login.email')}</label>
      <input onChange={(event) => changeState({ ...state, email: event.target.value })} type="text" id="courriel" name="email" required />

      <label htmlFor="password">{t('login.password')}</label>
      <input onChange={(event) => changeState({ ...state, password: event.target.value })} type="password" id="password" name="password" required />

      <button className="submit-button" style={{ marginTop: '1em' }} type="submit">{t('login.login')}</button>

      <h1>{t('login.noaccount')}</h1>
      <button style={{ marginTop: '1em' }} className="submit-button" onClick={() => { window.location.href = "/signup" }}>{t('signup.signup')}</button>
    </form>
  )
}
