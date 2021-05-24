import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {Div, Main, Card1, Card2, List, ListMain } from './style'
import Icon from 'public/icons'
import Link from 'next/link'

const array = [
  { 
      src:'/images/teste/teste1.jpg',
      name: 'West Broadway Street',
      end: '215 Greenwich St, New York',
      properties: 'Casa',
      featured: true,
      price: 260,
      type: 'Aluguel',
      square: 170,
      bedroom: 1,
      bathroom: 1
  },
  { 
      src:'/images/teste/teste2.jpg',
      name: 'North Greenwich',
      end: '42 W Broadway, New York',
      properties: 'Apartamento',
      featured: false,
      price: 200,
      type: 'Venda',
      square: 210,
      bedroom: 2,
      bathroom: 2
  },
  { 
      src:'/images/teste/teste3.jpg',
      name: 'Rue de Rivoli Street',
      end: '215 Greenwich St, New York',
      properties: 'Apartamento',
      featured: false,
      price: 390,
      type: 'Aluguel',
      square: 150,
      bedroom: 3,
      bathroom: 1
  },
  { 
      src:'/images/teste/teste1.jpg',
      name: 'West Broadway Street',
      end: '215 Greenwich St, New York',
      properties: 'Casa',
      featured: true,
      price: 260,
      type: 'Aluguel',
      square: 170,
      bedroom: 1,
      bathroom: 1
  },
  { 
      src:'/images/teste/teste2.jpg',
      name: 'North Greenwich',
      end: '42 W Broadway, New York',
      properties: 'Apartamento',
      featured: false,
      price: 200,
      type: 'Venda',
      square: 210,
      bedroom: 2,
      bathroom: 2
  },
  { 
      src:'/images/teste/teste3.jpg',
      name: 'Rue de Rivoli Street',
      end: '215 Greenwich St, New York',
      properties: 'Apartamento',
      featured: false,
      price: 390,
      type: 'Aluguel',
      square: 150,
      bedroom: 3,
      bathroom: 1
  },
  { 
      src:'/images/teste/teste1.jpg',
      name: 'West Broadway Street',
      end: '215 Greenwich St, New York',
      properties: 'Casa',
      featured: true,
      price: 260,
      type: 'Aluguel',
      square: 170,
      bedroom: 1,
      bathroom: 1
  },
  { 
      src:'/images/teste/teste2.jpg',
      name: 'North Greenwich',
      end: '42 W Broadway, New York',
      properties: 'Apartamento',
      featured: false,
      price: 200,
      type: 'Venda',
      square: 210,
      bedroom: 2,
      bathroom: 2
  },
  { 
      src:'/images/teste/teste3.jpg',
      name: 'Rue de Rivoli Street',
      end: '215 Greenwich St, New York',
      properties: 'Apartamento',
      featured: false,
      price: 390,
      type: 'Aluguel',
      square: 150,
      bedroom: 3,
      bathroom: 1
  },
]


function convertPage(size: number, limit:number, content: object[], save: Array<object[]>) {

  for (let i = 0; i < size; i+= limit) {
    
    save.push(content.slice(i, i + limit))
    
  }

  
}

function pagination(pages: number, itens: number, current:number) {
  if(pages > itens) {
    const left = (itens -1) / 2
    return current >= pages - left ? pages - (itens - 1) : Math.max(current -  left, 1)
  } else {
    return 1
  }
}

function card(i:any, key:number, change:boolean) {
  return (
    <Card2 key={key} change={change} featured={i.featured}>
      <div>
        <Image src={i.src} width={change? 400 : 280} height={change? 280 : 180} alt="imagem indisponivel"/>
        <span className="img">
          <div className="none"></div>
          <div className="price">
            <p>{i.properties}</p>
            <p>${i.price}</p>
          </div>
          <div className="featured"><p>Destaque</p></div>
          <div className="type">
            <p>{i.type}</p>
            <div></div>
          </div>
        </span>
      </div>
      <div className="desc">
        <span>
          <h2>{i.name}</h2>
          <hr />
          <h4><Icon.Pin/>{i.end}</h4>
          <article>
            Typi non habent claritatem insitam; est usus legentis in iis qui facit,
            Typi non habent claritatem insitam; est usus legentis in iis qui facit
          </article>
        </span>
        <div className="details">
          <span>
            <p><Icon.Room className="I"/>2</p>
            <p>Sala</p>
          </span>
          <span>
            <p><Icon.Bedroom className="I"/>{i.bedroom}</p>
            <p>Quarto</p>
          </span>
          <span>
            <p><Icon.Bathroom/>{i.bathroom}</p>
            <p>Banheiro</p>
          </span>
          <span className="E">
            <p><Icon.Garage />1</p>
            <p>Garagem</p>
          </span>
        </div>
        <Link href={"/imovel"}>
          <button><p>Mais Detalhes</p></button>
        </Link>
      </div>
    </Card2>
  )
}


function card1(i:any, key:number) {
  return (
    <Card1 key={key}>
      <div>
        <Image src={i.src} width={370} height={250} alt="imagem indisponivel"/>
        <span className="img">
          <div className="none"></div>
          <div className="price">
            <p>{i.properties}</p>
            <p>${i.price}</p>
          </div>
          <div className="featured"><p>Destaque</p></div>
          <div className="type">
            <p>{i.type}</p>
            <div></div>
          </div>
        </span>
      </div>
      <div className="desc">
        <span>
          <h2>{i.name}</h2>
          <hr />
          <h4><Icon.Pin/>{i.end}</h4>
          <article>
            Typi non habent claritatem insitam; est usus legentis in iis qui facit,
            Typi non habent claritatem insitam; est usus legentis in iis qui facit
          </article>
        </span>
        <div className="details">
          <span>
            <p><Icon.Room className="I"/>2</p>
            <p>Sala</p>
          </span>
          <span>
            <p><Icon.Bedroom className="I"/>{i.bedroom}</p>
            <p>Quarto</p>
          </span>
          <span>
            <p><Icon.Bathroom/>{i.bathroom}</p>
            <p>Banheiro</p>
          </span>
          <span className="E">
            <p><Icon.Garage />1</p>
            <p>Garagem</p>
          </span>
        </div>
        <Link href={"/imovel"}>
          <button><p>Mais Detalhes</p></button>
        </Link>
      </div>
    </Card1>
  )
}


export default function CardImovel({filter, cardL}:{filter: any, cardL:any}) {
  let conteudo:Array<object[]>= []
  convertPage(array.length, 4, array, conteudo)

  const [change, setChange] = useState(true)
  const router = useRouter()
  const { pathname } = useRouter()
  const [count, setCount] = useState(1)
  const itens: number = 9

  let first: number = pagination(conteudo.length, itens, count)

  useEffect(() => {
    router.push(`?page=${count}`, undefined, { shallow: true })

  }, [count])

function alterPages(valor:number) {
    if(valor > count) {
      setCount(count  + (valor - count))
    }else {
      setCount(count  - (count - valor))
    }
}

  if(pathname == '/listagem') {

    return (
      <Main change={change}>
        <span>
          <div className="order">
            <span>
              <Icon.ListMain  onClick={() => setChange(false)} />
              <Icon.ListDefault onClick={() => setChange(true)} />
            </span>
            <span>
              <label htmlFor="">Ordenar por:</label>
              <select name="" id="">
                <option value="">Nome</option>
                <option value="">Preço</option>
                <option value="">Publicação</option>
              </select>
              <label htmlFor="">Mostra:</label>
              <select name="" id="">
                <option value="">ASC</option>
                <option value="">DESC</option>
              </select>
            </span>
          </div>
          <List change={change}>
  
            { conteudo[count -1].map((i, e) => (
              
                card(i, e, change)
                
            ))}
  
          </List>
          <ul>
            <li>
                <button onClick={() => setCount(count  - 1)}  className="color" disabled={count === 1}>
                    Anterior
                </button>
            </li>
            { Array.from({ length: Math.min(itens, conteudo.length) })
                .map((_, index)=> index + first)
                .map((page) => (
                    <li key={page}>
                        <button onClick={ () => alterPages(page) } className={count === page? "color" : " "} disabled={count === page}>
                            {page}
                        </button>
                    </li>
                ))}
            <li>
                <button onClick={() => setCount(count  + 1)} className="color" disabled={count === conteudo.length}>
                    Proximo
                </button>
            </li>
          </ul>
        </span>
        {filter}
      </Main>  
    )

  } else {

    return (
      <>
        <Div>
          <h1>Últimos Imóveis</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
        </Div>
        <ListMain>
    
          { Array.from({ length: 4 }).map((_, e) => (
            
              card(array[e], e, false)
              
          ))}
    
        </ListMain>
        {cardL}
        <Div>
          <h1>Imóveis Em Destaque</h1>
          <h5>Encontre as últimas casas à venda, notícias sobre imóveis e dados do mercado imobiliário</h5>
        </Div>
        <ListMain>
    
          { Array.from({ length: 3 }).map((_, e) => (
            
              card1(array[e], e)
              
          ))}
    
        </ListMain>
      </>
    )

  }
}

