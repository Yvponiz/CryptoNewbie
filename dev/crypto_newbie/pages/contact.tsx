import type { NextPage } from 'next'
import Head from 'next/head'
<<<<<<< HEAD
import Link from 'next/link'
=======
import Footer from '../frontend/components/footer'
>>>>>>> c4051eda80f6dda4a98f9a8b281917a18ef1f02d
import Layout from '../frontend/components/layout'

const Contact: NextPage = () => {
    return (
        <Layout className='container'>
        <Head>
<<<<<<< HEAD
          <title>Crypto Newbie | Contact</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />                  
=======
          <title>Crypto Newbie | Contactez-Nous</title>
          <meta name="description" content="" />
          <link rel="icon" href="cryptonewbie.ico" />                 
>>>>>>> c4051eda80f6dda4a98f9a8b281917a18ef1f02d
        </Head>
  
        <main className='main'>
          <div className='contact'>
            <h1>Contactez-nous !</h1>
            <p>
              Le projet de Crypto-Newbie a été conçu par deux étudiants du DEC informatique au cegep du Vieux Montréal.
            </p>
            <p>
              Yvanoski Sanon et Nikolas Ouimet
            </p>
          </div>
        </main>
<<<<<<< HEAD
  
=======
        <Footer></Footer>
>>>>>>> c4051eda80f6dda4a98f9a8b281917a18ef1f02d
      </Layout>
    )
}

export default Contact