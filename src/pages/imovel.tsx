import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import Contact from '@components/contact'
import Gallery from '@components/gallery'
import Navigation from '@components/navigation'


export default function Imovel() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Navigation 
        name={'The Knightsbridge Ap.'}
      />
      <Gallery/>
      <main>
      </main>
      <Footer/>
    </>
  )
}
