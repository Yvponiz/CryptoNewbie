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
                        login: 'Connexion',
                        projects: 'Projects',
                        contact: 'Contact',
                    },
                    greetings: {
                        hi: 'hi'
                    },
                    login: {
                        login: 'login',
                        intro: `You have an account? sign in`,
                        skills: 'Skills',
                    },
                    signup: {
                        signup: 'sign up',
                        lastname: 'lastname',
                        firstname: 'firstname',
                        courriel: 'email',
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
                        cryptonewbie: `
                            CryptoNewbie is a crypto platform where new investors can look for crypto currencies and simulate transactions.
                        `,
                        datagotchi: `
                            "Educational and fun, Datagotchi is the first fully illustrated survey making predictions based on your life habits."
                            I have contributed to this project as a Front-end developer.
                            `,
                        demo: 'Live Demo'
                    },
                    contact: {
                        contact: 'Contact',
                        hmu: 'Hit me up!',
                        location: 'Location',
                        mail: 'E-mail'
                    },
                    copyright: 'Copyright © 2023. All rights are reserved.',
                }
            },
            fr: {

            },
        },
        detection: {
            order: ["navigator"],
            lookupLocalStorage: "",
        }
    })

export default i18next;