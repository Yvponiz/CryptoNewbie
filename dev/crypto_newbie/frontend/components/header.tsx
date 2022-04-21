import { ReactElement } from "react";
import { getSession } from "../../common/getSession";
import Link from "next/link";
import Image from "next/image"
import ReactDOM from "react-dom";

type HeaderProps = {
    isLoggedIn: boolean 
};

function ShowHeader(props){
    const isLoggedIn = props.isLoggedIn;
    console.log("SHOW HEADER",isLoggedIn);
    if (isLoggedIn) {
        return (
            <>
                <Link href='/'><a>Accueil</a></Link>
                <Link href='transactions'><a>Transactions</a></Link>
                <Link href='portfolio'><a>Portfolio</a></Link>
                <Link href='profil'><a>Profil</a></Link>
                <Link href='api/disconnect'><a>Deconnexion</a></Link>
            </>
        )
    }
    else
        return (
            <>
                <Link href='/'><a>Accueil</a></Link>
                <Link href='connexion'><a>Connexion</a></Link>
            </>
        )
}

export default function Header({ isLoggedIn }: HeaderProps) {
    console.log("HEADER",isLoggedIn);
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
                    <ShowHeader isLoggedIn={isLoggedIn}/>
                </div>
            </div>
        </>
    )
}


