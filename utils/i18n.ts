import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    navbar: {
                        home: 'Home',
                        login: 'Login',
                        transactions: 'Transactions',
                        portfolio: 'Portfolio',
                        profile: 'Profile',
                        logout: 'Logout',
                    },
                    index: {
                        introtrack: 'Track and Trade',
                        introcrypto: 'Crypto Currencies',
                        list:'List of coins (id)',
                    },
                    greetings: {
                        hi: 'hi',
                        evening:'good evening'
                    },
                    login: {
                        login: 'login',
                        intro: 'You have an account? Sign in!',
                        email: 'email',
                        password: 'password',
                        noaccount: 'No account yet? Sign up!'
                    },
                    signup: {
                        signup: 'sign up',
                        lastname: 'last name',
                        firstname: 'first name',
                        email: 'email',
                        dateofbirth: 'date of birth',
                        accounttype: 'account type',
                        password: 'password',
                        confirm: 'confirm password',
                        create: 'create account',
                        pro: 'pro',
                        intermediate: 'intermediaire',
                        beginner: 'beginner'
                    },
                    crypto: {
                        coin: 'coin',
                        price: 'price',
                        market: 'market cap',
                        twentyfour: '24h'
                    },
                    transaction: {
                        transaction: 'transaction',
                        balance: 'Amount in the account',
                        buy: 'Buy',
                        sell: 'sell',
                        coin: 'coin',
                        quantity: 'quantity',
                        price: 'price',
                        total: 'total',
                        confirm: 'confirm',
                        history: 'transaction history',
                        type: 'type of transaction',
                        amount: 'amount'
                    },
                    portfolio: {
                        portfolio: 'portfolio',
                        invested: 'amount invested',
                        balance: 'amount left',
                        coin: 'coin',
                        quantity: 'quantity',
                        average: 'average price'
                    },
                    profile: {
                        account: 'account',
                        info:'personal informations',
                        lastname:'last name',
                        firstname: 'first name',
                        birth: 'date of birth',
                        email: 'email',
                        modify: 'change email',
                        modifypass:'modify password',
                        confirm:'confirm'
                    },
                    contact: {
                        contact: 'Contact',
                    },
                    copyright: 'Copyright © 2023. All rights are reserved.',
                    search:'search'
                }
            },
            fr: {
                translation: {
                    navbar: {
                        home: 'Accueil',
                        login: 'Connexion',
                        transactions: 'Transactions',
                        portfolio: 'Portfolio',
                        profile: 'Profil',
                        logout: 'Deconnexion',
                    },
                    index: {
                        introtrack: 'Suivre et échanger',
                        introcrypto: 'des crypto-monnaies',
                        list:'Liste de cryptos (id)',
                    },
                    greetings: {
                        hi: 'bonjour',
                        evening:'bonsoir'
                    },
                    login: {
                        login: 'Connexion',
                        intro: 'Vous avez un compte? Connectez-vous!',
                        email: 'courriel',
                        password: 'mot de passe',
                        noaccount: 'pas encore de compte? créez en un!'
                    },
                    signup: {
                        signup: 'Inscription',
                        lastname: 'Nom',
                        firstname: 'Prénom',
                        email: 'courriel',
                        dateofbirth: 'Date de naissance',
                        accounttype: 'Type de compte',
                        password: 'Mot de passe',
                        confirm: 'confirmez mot de passe',
                        create: 'Créer compte',
                        pro: 'pro',
                        intermediate: 'amateur',
                        beginner: 'débutant'
                    },
                    crypto: {
                        coin: 'Crypto',
                        price: 'prix',
                        market: 'market cap',
                        twentyfour: '24h'
                    },
                    transaction: {
                        transaction: 'transaction',
                        balance: 'Montant dans le compte',
                        buy: 'Acheter',
                        sell: 'Vendre',
                        coin: 'Crypto',
                        quantity: 'Quantité',
                        price: 'Prix',
                        total: 'totale',
                        confirm: 'confirmer',
                        history: 'Historique de transactions',
                        type: 'Type de transaction',
                        amount: 'Montant'
                    },
                    portfolio: {
                        portfolio: 'portfolio',
                        invested: 'Montant investi',
                        balance: 'Montant restant',
                        coin: 'Crypto',
                        quantity: 'Quantité',
                        average: 'Prix moyen'
                    },
                    profile: {
                        account: 'Compte',
                        info:'Informations personnelles',
                        lastname:'Nom',
                        firstname: 'Prénom',
                        birth: 'Date de naissance',
                        email: 'courriel',
                        modify: 'modifier courriel',
                        modifypass:'modifier mot de passe',
                        confirm:'confirmer'
                    },
                    contact: {
                        contact: 'Contacte',
                    },
                    copyright: 'Copyright © 2023. Tous droits réservés.',
                    search:'rechercher'
                }
            },
        },
        detection: {
            order: ["navigator"],
            lookupLocalStorage: "",
        }
    })

export default i18next;