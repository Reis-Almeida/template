import CardClient from '../components/CardClient'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import company from '../shared/json/company'
import website from '../shared/json/website'
import { StyledMain } from '../styles'
import CardLocation from '../components/CardLocation'
import Qualification from '../components/Qualification'
import Filter from '../components/Filter'
import { useProperty } from '../context/useProperty'
import CardProperty from '../components/CardProperty'

type PropsClient = {
  src: string
  title: string
  description: string
  name: string
  star: number

}

function sortDate(a:any, b:any) {
  return a.c_date < b.c_date ? 1 : a.c_date > b.c_date ? -1 : 0 
}

function sortPrice(a:any, b:any) {
  return parseInt(a.price) < parseInt(b.price) ? -1 : parseInt(a.price) > parseInt(b.price) ? 1 : 0 
}


function lastFeatured(a:any) {
  if(a.offer === '2') {
      return a
  }
}

export default function Home() {

  const { property } = useProperty()

  const lastProperties = property?.sort(sortDate)?.slice(0, 4)
  const PriceProperties = property?.sort(sortPrice)?.slice(0, 4)
  const lastFeaturedProperties = property?.filter(lastFeatured)?.slice(0, 3)

  return(
    <Layout>
      <Carousel />
      <Filter />
      <Qualification />
      <StyledMain>
        <span className="title">
          <h1>Últimos Imóveis</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
          <div className="groupCard">
            {lastProperties?.map((i:any, e:number) => (
              <CardProperty key={`lastProperties${e}`} obj={i} card={1} change={false}/>
              ))}
          </div>
        </span>

        <span className="title gray">
          <h1>Localizações de imóveis</h1>
          <h5>Encontre uma casa para vender ou alugar com base na localização. </h5>
          <div className="groupCard gray">
            {website.cityFeature.map((i:any, e:number) => (
              <CardLocation key={`city${e}`} obj={i} />
              ))}
          </div>
        </span>

        <span className="title">
          <h1>Imóveis Em Destaque</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
          <div className="groupCard">
            {lastFeaturedProperties?.map((i:any, e:number) => (
              <CardProperty key={`lastFeaturedProperties${e}`} obj={i} card={2} change={false}/>
              ))}
          </div>
        </span>

        <span className="title gray">
          <h1>O que nossos clientes dizem</h1>
          <h5>As citações a seguir são típicas da apreciação do cliente que Allmatech recebe</h5>
          <div className="groupCard gray">
            {company.client.map((i:PropsClient, e:number) => (
              <CardClient key={`client${e}`} obj={i} />
              ))}
          </div>
        </span>

        <span className="title">
          <h1>Imóveis Com Melhor preço</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
          <div className="groupCard">
            {PriceProperties?.map((i:any, e:number) => (
              <CardProperty key={`PriceProperties${e}`} obj={i} card={1} change={false}/>
              ))}
          </div>
        </span>
      </StyledMain>
    </Layout>
  )
}