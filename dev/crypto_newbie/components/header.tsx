import {ReactElement} from "react";
import Link from "next/link";


type HeaderProps = {
    [name: string]: ReactElement[]
  };
  
  export default function Header({children}: HeaderProps) {
    return (
        <>
            <style jsx>{`
                div {
                    display:flex;
                    justify-content: space-evenly;
                }
            `}</style>
                
            <div className='header'>
                <div className='header-logo'>
                    <h1>
                        CryptoNewbie
                    </h1>
                </div>
                <div className='header-links'>
                    <Link href='Accueil'><a>Accueil</a></Link>
                    <Link href='Contactez-nous'><a>Contact</a></Link>
                    <Link href='Connexion'><a>Connexion</a></Link>
                </div>
            </div>
        </>
     
    )
  }