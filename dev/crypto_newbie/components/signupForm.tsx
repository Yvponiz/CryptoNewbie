import { TypeCompte } from "../src/entity/Utilisateur"

export default function signupForm() {
    return (
      <form className="form" action="/api/submitForm" method="post">
        <label htmlFor="prenom">Prénom</label>
        <input type="text" id="prenom" name="prenom" required />
  
        <label htmlFor="nom">Nom</label>
        <input type="text" id="nom" name="nom" required />
  
        <label htmlFor="courriel">Courriel</label>
        <input type="text" id="courriel" name="courriel" required />
  
        <label htmlFor="date_naissance">Date de naissance</label>
        <input type="date" id="date_naissance" name="date_naissance" required />

        <label htmlFor="type_compte">Le type de compte</label>
        <select id="type_compte" name="type_compte" required>
          <option selected value={TypeCompte[1].Value}>Débutant</option>
          <option value={TypeCompte[2].Value}>Amateur</option>
          <option value={TypeCompte[3].Value}>Professionnel</option>
        </select>
  
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="conf_password">Confirmer le mot de passe</label>
        <input type="password" id="conf_password" name="conf_password" required />
  
        <button type="submit">Submit</button>
        {TypeCompte[1].Montant}
      </form>
    )
  }
  