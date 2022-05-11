import { ReactElement } from "react";
import Link from "next/link";

type FooterProps = {
    [name: string]: ReactElement[]
};

export default function Footer({}: FooterProps) {
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <h1>
                        <a href="/">Crypto Newbie</a>
                    </h1>
                    <span>© 2022 CryptoNewbie. Tout droits réservés</span>
                </div>
                <div className='footer-links'>
                    <Link href='/'><a>Accueil</a></Link>
                    <Link href='contact'><a>Contact</a></Link>
                </div>
            </div>
        </>
    )
}