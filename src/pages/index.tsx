import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import Slider from '@components/slider'
import Filter from '@components/filter'
import CardImovel from '@components/cardImovel'
import Qualification from '@components/qualification'
import CardLocation from '@components/cardLocation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Slider/>
      <Filter/>
      <Qualification />
      <CardImovel filter={''} cardL={
        <CardLocation/>
      }/>
      <main>
      </main>
      <Footer/>
    </>
  )
}
