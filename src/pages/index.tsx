import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import Slider from '@components/slider'
import Filter from '@components/filter'
import CardProperty from '@components/cardProperty'
import Qualification from '@components/qualification'
import CardLocation from '@components/cardLocation'
import { Div } from 'src/styles'
import empresa from 'shared/empresa'
import Imoveis from 'shared/imoveis'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState([])

  const init = async () => {
    const imoveis = await Imoveis()

    setCount(imoveis.slice(0, 4))
  }

  init()
  // console.log(count)
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Slider/>
      <Filter/>
      <Qualification />
      <>
        <Div>
          <h1>Últimos Imóveis</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
        </Div>
       <CardProperty array={empresa.teste1} superFeatured={false} change={false}/>
  
      <CardLocation/>
        <Div>
          <h1>Imóveis Em Destaque</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
        </Div>
       <CardProperty array={empresa.teste2} superFeatured={true} change={false}/>
        

      </>
      <main>
      </main>
      <Footer/>
    </>
  )
}
