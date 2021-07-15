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
import { useProperty } from 'shared/useProperty'

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

  property.sort(sortDate)

  const lastProperties = property.slice(0, 4)

  property.filter(lastFeatured)

  const lastFeaturedProperties = property.slice(0, 3)
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
       <CardProperty array={lastProperties} superFeatured={false} change={false}/>
  
      <CardLocation/>
        <Div>
          <h1>Imóveis Em Destaque</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
        </Div>
       <CardProperty array={lastFeaturedProperties} superFeatured={true} change={false}/>
        

      </>
      <main>
      </main>
      <Footer/>
    </>
  )
}
