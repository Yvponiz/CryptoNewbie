import Link from "next/link";
import Image from "next/image"
import { FunctionComponent } from "react";

type HeaderProps = {
    isLoggedIn: boolean;
};

const ShowHeader: FunctionComponent<HeaderProps> = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <>
                <Link href='/'><a>Accueil</a></Link>
                <Link href='transactions'><a>Transactions</a></Link>
                <Link href='portfolio'><a>Portfolio</a></Link>
                <Link href='lists'><a>Listes</a></Link>
                <Link href='profile'><a>Profil</a></Link>
                <Link href='api/disconnect'><a>Deconnexion</a></Link>
            </>
        )
    }
    else
        return (
            <>
                <Link href='/'><a>Accueil</a></Link>
                <Link href='login'><a>Connexion</a></Link>
            </>
        )
}

export default function Header({ isLoggedIn }: HeaderProps) {

    return (
        <>
            <div className='header'>
                <div className='header-logo'>
                    <Image className="logo" src={"/CryptoNewbie.png"} width={"80px"} height={"80px"} />
                    <h1>
                        <a href="/">Crypto Newbie</a>
                    </h1>
                </div>
                <div className='header-links' id="header-links">
                    <ShowHeader isLoggedIn={isLoggedIn} />
                </div>
            </div>
        </>
    )
}


