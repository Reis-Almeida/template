import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import Contact from '@components/contact'
import Navigation from '@components/navigation'


export default function Contato() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Navigation 
        name={'Contato'}
      />
      <Contact/>
      <main>
      </main>
      <Footer/>
    </>
  )
}
