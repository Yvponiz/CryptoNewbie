import {ReactElement} from "react";
import Link from "next/link";


type HeaderProps = {
    [name: string]: ReactElement[]
  };
  
  export default function Header({children}: HeaderProps) {
    return (
        <>                
            <div className='header'>
                <div className='header-logo'>
                    <h1>
                        Crypto Newbie
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