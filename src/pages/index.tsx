import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import Slider from '@components/slider'
import Filter from '@components/filter'
import CardProperty from '@components/cardProperty'
import Qualification from '@components/qualification'
import CardLocation from '@components/cardLocation'
import { Div, Main, Main2 } from 'src/styles'
import empresa from 'shared/empresa'
import { useProperty } from 'shared/useProperty'
import CardClient from '@components/cardClient'

function sortDate(a:any, b:any) {
  return a.c_date < b.c_date ? 1: a.c_date > b.c_date ? -1 : 0 
}


function lastFeatured(a:any) {
  if(a.offer == '2') {
      return a
  }
}


export default function Home() {
  const { property, setProperty } = useProperty()

  property?.sort(sortDate)

  const lastProperties = property?.slice(0, 4)

  property?.filter(lastFeatured)

  const lastFeaturedProperties = property?.slice(0, 3)
  // console.log(lastFeaturedProperties)
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

        <Main>
          {lastProperties?.map((i:number, e:number) => (
            <CardProperty key={e} obj={i} card={1} change={false}/>
          ))}
        </Main>

  
      <CardLocation/>
        <Div>
          <h1>Imóveis Em Destaque</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
        </Div>

        <Main>
          {lastFeaturedProperties?.map((i:number, e:number) => (
            <CardProperty key={e} obj={i} card={2} change={false}/>
          ))}
        </Main>


        <Main2>
        <Div>
          <h1>O que nossos clientes dizem</h1>
          <h5>As citações a seguir são típicas da apreciação do cliente que Allmatech recebe</h5>
        </Div>
          {empresa.client.map((i:any, e:number) => (
              <CardClient key={e} obj={i} />
          ))}
        </Main2>
        

      </>
      <main>
      </main>
      <Footer/>
    </>
  )
}
