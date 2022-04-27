import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../frontend/components/footer'
import Layout from '../frontend/components/layout'
import LoginForm from '../frontend/components/loginForm'
import commonProps, { CommonProps } from '../frontend/utils/commonProps'

export function getServerSideProps({ req, res }){
  return commonProps({req, res})
}

type Props = CommonProps

const Connexion: NextPage<Props> = (props:Props) => {

    return (
      <Layout isLoggedIn={props.isLoggedIn} className='container'>
        <Head> <title>Crypto Newbie | Connexion</title> </Head>
  
        <main className='main'>
            <div className='content-form'>
              <LoginForm />
            </div>

        </main>
        <Footer></Footer>
      </Layout>
    )
}
  
export default Connexion