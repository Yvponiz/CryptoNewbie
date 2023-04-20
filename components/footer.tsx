import { ReactElement } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";


type FooterProps = {
    [name: string]: ReactElement[]
};

export default function Footer({ }: FooterProps) {
    const { t } = useTranslation();
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <h1>
                        <Link href="/">Crypto Newbie</Link>
                    </h1>
                    <span>{t('copyright')}</span>
                </div>
                <div className='footer-links'>
                    <Link href='/'>{t('navbar.home')}</Link>
                    <Link href='contact'>{t('contact.contact')}</Link>
                </div>
            </div>
        </>
    )
}