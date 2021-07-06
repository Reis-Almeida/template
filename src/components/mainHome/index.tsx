import { Div } from './style'
import Icon from 'public/icons'
import Link from 'next/link'


export default function CardImovel({filter, cardL}:{filter: any, cardL:any}) {

    return (
      <>
        <Div>
          <h1>Últimos Imóveis</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
        </Div>
       
  
        <Div>
          <h1>Imóveis Em Destaque</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
        </Div>
        

      </>
    )

  }

