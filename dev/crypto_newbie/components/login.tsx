export default function Form() {
    return (
      <form className="login" action="/api/form" method="post">
        <h1>Vous avez un compte ? connectez vous</h1>

        <label htmlFor="courriel">Courriel</label>
        <input type="text" id="courriel" name="courriel" required />

        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" name="password" required />
  
        <button type="submit">Submit</button>

        <h1>Pas encore de compte ? Créez en un</h1>
        <button>Créer un compte</button>
        
      </form>
    )
  }
  