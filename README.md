# C61_Projet_synthese
Projet synthèse du programme en Informatique au cégep du Vieux-Montréal

##Titre du projet
========================================================
Crypto-Newbie

##Équipe
=======================================================
	Yvanoski Sanon
	Nikolas Ouimet

	
##Description du projet
=======================================================
Crypto Newbie est une plateforme Web spécialement conçu pour les débutants dans le domaine de la cryptomonnaies. Les utilisateurs doivent s'inscrire sur la plateforme pour bénéficier des fonctionnalités proposés par le site Web, dont l'achat, la vente, la visualisation d'un portefeuille fictif et la consultation des données du marché réel.

##Version déployée   
==================================================
https://cryptonewbie.herokuapp.com    


##Installation
=======================================================
Prenez le dossier du projet disponible sur GitHub : https://github.com/NikolasOuim/C61_Projet_synthese

Déposez ou cloner le dossier du projet dans un dossier situé sur votre disque principal, par exemple c:\travail\

Télécharger et installer Visual Studio Code ou autre étidteur capable de lire du code Javascript, HTML, CSS. 

Télécharger et installer PgAdmin 4 v6.9 ou une version ultérieure : https://www.pgadmin.org/download/pgadmin-4-windows/

Si l'installation vous propose d'installer Postgres SQL, installez-le

Une fois l'installation terminé, il faudra ouvrir PgAdmin pour :
	- créer un utilisateur cryptonewbie avec le mot de passe AAAaaa111;
	- s'assurer que l'utilisateur a le droit de ce connecter, voici comment : 
		• Cliquer sur Login/Groups roles;
		• Menu contextuel de l'utilisateur cryptonewbie > properties...;
		• Dans l'onglet Privileges, cocher Can login? puis enregister.

	- créer une base de données vierge nommée cryptonewbie.

Télécharger et installer Node.Js : https://nodejs.org/en/download/    

Dans l'invite de console Node.Js, écrire la commande suivante : cd /crypto_newbie     
Installer les dépendances : npm install    

##Utilisation
==========================================================
Toujours dans le même répertoire de l'invite de commande Node.Js, exécuter : npm run dev    

Rendez vous sur : [localhost:3000](localhost:3000)

Lorsque l'application sera lancé, les tables de la base de données seront créé automatiquement afin de simplifier le travail. 

##Liste des dépendances :
=======================================================
	React  
	React-dom  
	React-Router  
	Next  
	Next-Session  
	Typescript-Node  
	Postgres  
	TypeORM  
	TypeORM-Extension
	CoinGecko API
	chart.js
	react-chartjs-2
	

##Références
=======================================================

Connexion à la base de données : https://stackoverflow.com/questions/43464908/reactjs-connection-with-database  
Connexion à la base de données avec TypeOrm : https://github.com/typeorm/typeorm  
Solution pour créer une seule connexion : https://stackoverflow.com/questions/49794140/connection-default-was-not-found-with-typeorm  
Initiation à React : https://gogs.damonpl.com/Mentoring/nextjs  
Connexion à l'API coinGecko : https://www.npmjs.com/package/coingecko-api  
Documentation sur hooks de React : https://reactjs.org/docs/hooks-state.html  
Documentation sur Effects Hooks : https://reactjs.org/docs/hooks-effect.html  
Documentation sur Fonction useEffect() : https://nextjs.org/docs/basic-features/data-fetching/client-side  
Documentation sur Map (Structure de donnée) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
Documentation sur Find : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find  
Documentation sur Filter : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter  
Documentation fetch : https://developer.mozilla.org/en-US/docs/Web/API/fetch  
Documentation API CoinGecko : https://www.coingecko.com/en/api/documentation?  
Connexion à la base de données : https://stackoverflow.com/questions/43464908/reactjs-connection-with-database  
Initiation à React : https://gogs.damonpl.com/Mentoring/nextjs  
Connexion à la base de données (solution problème de connexion bd): https://stackoverflow.com/a/65317768  
Connexion à la base de données avec TypeOrm : https://github.com/typeorm/typeorm  
Documentation sur hooks de React : https://reactjs.org/docs/hooks-state.html  
Documentation sur Effects Hooks : https://reactjs.org/docs/hooks-effect.html  
Documentation sur Fonction useEffect() : https://nextjs.org/docs/basic-features/data-fetching/client-side  
Documentation sur Map (Structure de donnée) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
Documentation sur Find : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find  
Documentation sur Filter : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter    
Documentation sur getServerSideProps : https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props     
Documentation fetch : https://developer.mozilla.org/en-US/docs/Web/API/fetch  
Documentation node fetch : https://www.npmjs.com/package/node-fetch  
Documentation API CoinGecko : https://www.coingecko.com/en/api/documentation?  
Documentation sur change event : https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event  
Documentation sur Next-Session : https://github.com/hoangvvo/next-session  
Documentation sur Router : https://nextjs.org/docs/api-reference/next/router#router-object  
Documentation sur Context : https://www.w3schools.com/react/react_usecontext.asp  
*How to use React Context With TypeScript* : https://blog.logrocket.com/how-to-use-react-context-typescript/  
Documentation sur getInitialProps : https://nextjs.org/docs/api-reference/data-fetching/get-initial-props  
Documentation RegEx : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp  
Mouse-event react button onclick : https://www.kindacode.com/article/react-typescript-handling-onclick-event/  
Source pour passer une valeur en paramètre d'une fonction de html vers js (ou ts) https://stackoverflow.com/questions/21397743/passing-html-input-value-as-a-javascript-function-parameter  
Ajouter une condition de style dans le html : https://stackoverflow.com/questions/55122517/check-if-value-is-negative-and-apply-css-in-react-js  
Exemple de call à un api avec un String à envoyer : https://javascript.plainenglish.io/build-a-cryptocurrency-returns-calculator-with-reactjs-coingecko-api-part-1-a286ceada6ff  
Exemple de sortListe function en js : https://tech-wiki.online/fr/quicksort-javascript.html#:~:text=Quicksort%20est%20un%20algorithme%20de,l'un%20de%20ces%20cas  
Affichage conditionnel si un utilisateur est connecté ou non : https://fr.reactjs.org/docs/conditional-rendering.html  
Créer un graphique avec Chart js : Using Chart.JS in React.JS -https://www.youtube.com/watch?v=c_9c5zkfQ3Y&t=269s&ab_channel=WornOffKeys
Obtenir une date antérieure avec js : https://www.codegrepper.com/code-examples/javascript/subtract+18+years+from+today+javascript    

##Contact
============================================
Yvanoski Sanon : e.ysanon@etu.cvm.qc.ca
Nikolas Ouimet : e.nouimet@etu.cvm.qc.ca

##Licence
============================================
Crypto-Newbie 2022
