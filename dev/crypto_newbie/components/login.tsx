export default function Form() {
    return (
      <form className="login" action="/api/form" method="post">
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
  
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />

        <label htmlFor="courriel">Courriel</label>
        <input type="text" id="courriel" name="courriel" required />

        <label htmlFor="password">Mot de passe</label>
        <input type="text" id="password" name="password" required />
  
        <button type="submit">Submit</button>
      </form>
    )
  }
  