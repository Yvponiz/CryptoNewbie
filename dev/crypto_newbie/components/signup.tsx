export default function Form() {
    return (
      <form className="form" action="/api/form" method="post">
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
  
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
  
        <label htmlFor="courriel">Courriel</label>
        <input type="text" id="courriel" name="courriel" required />
  
        <label htmlFor="date_naissance">Date de naissance</label>
        <input type="date" id="date_naissance" name="date_naissance" required />

        <label htmlFor="type_compte">Le type de compte</label>
        <select id="type_compte" name="type_compte" required />
  
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="conf_password">Confirmer le mot de passe</label>
        <input type="password" id="conf_password" name="conf_password" required />
  
        <button type="submit">Submit</button>
  
      </form>
    )
  }
  