import Link from "next/link";
import Image from "next/image"
import { FunctionComponent, useEffect, useState } from "react";
import TwitterLogo from "../public/twitter-logo.svg"
import DiscordLogo from "../public/discord-logo.svg"
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";

type HeaderProps = {
    isLoggedIn: boolean;
};

export default function Header({ isLoggedIn }: HeaderProps) {
    const [sticky, setSticky] = useState(false);
    const { t } = useTranslation();
    const defaultLang: string = i18n.resolvedLanguage === 'en' ? 'fr' : 'en'
    const [languageButton, setLanguageButton] = useState<string>(defaultLang);

    const handleLanguageToggle = () => {
        const newLanguage = i18n.resolvedLanguage === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
        const newButtonLanguage = newLanguage === 'en' ? 'fr' : 'en';
        setLanguageButton(newButtonLanguage);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 150) {
                    setSticky(true);
                } else {
                    setSticky(false);
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    const goTop = () => {
        window.scrollTo({
            top: (0),
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className={sticky ? "header-sticky" : "header"}>
                <div className='header-logo' onClick={goTop}>
                    <Image
                        className="logo"
                        src={"/CryptoNewbie.png"}
                        width={40}
                        height={40}
                        alt='header-logo'
                    />
                    <h1>
                        <Link href="/">Crypto Newbie</Link>
                    </h1>
                </div>
                <nav className='header-links' id="header-links">
                    {isLoggedIn ?
                        <>
                            <Link href='/'>{t('navbar.home')}</Link>
                            <Link href='/transactions'>{t('navbar.transactions')}</Link>
                            <Link href='/portfolio'>{t('navbar.portfolio')}</Link>
                            <Link href='/profile'>{t('navbar.profile')}</Link>
                            <Link href='/api/disconnect'>{t('navbar.logout')}</Link>
                        </>
                        :
                        <>
                            <Link href='/'>{t('navbar.home')}</Link>
                            <Link href='/login'>{t('navbar.login')}</Link>
                        </>
                    }
                </nav>

                <span className="header-span">
                    <button onClick={handleLanguageToggle}>{languageButton}</button>
                    <TwitterLogo />
                    <DiscordLogo />
                </span>
            </div>
        </>
    )
}


