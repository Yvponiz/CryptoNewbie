import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image"

type HeaderProps = {
    [name: string]: ReactElement[]
};

export default function Header({ children }: HeaderProps) {
    return (
        <>
            <div className='header'>
                <div className='header-logo'>
                    <Image className="logo" src={"/CryptoNewbie.png"} width={"80px"} height={"80px"} />
                    <h1>
                        <a href="/">Crypto Newbie</a>
                    </h1>
                </div>
                <div className='header-links'>
                    <Link href='/'><a>Accueil</a></Link>
                    <Link href='contact'><a>Contact</a></Link>
                    <Link href='connexion'><a>Connexion</a></Link>

                </div>
            </div>
        </>
    )
}