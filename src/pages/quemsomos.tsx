import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import Text from '@components/text'
import Gallery from '@components/gallery'
import Navigation from '@components/navigation'

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Navigation 
        name={'Quem Somos'}
      />
      <Text/>
      <main>
      </main>
      <Footer/>
    </>
  )
}
