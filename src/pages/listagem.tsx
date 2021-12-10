import CardProperty from '@components/cardProperty'
import Filter from '@components/filter'
import Footer from '@components/footer'
import Header from '@components/header'
import Navigation from '@components/navigation'
import empresa from 'shared/empresa'


import { useProperty } from 'shared/useProperty'

import { Main, Main2 } from 'src/styles/listagem'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Icon from 'public/icons'
import userFilter from 'shared/useFilter'


function pagination(pages: number, itens: number, current:number) {
  if(pages > itens) {
    const left = (itens -1) / 2
    return current >= pages - left ? pages - (itens - 1) : Math.max(current -  left, 1)
  } else {
    return 1
  }
}


export default function Listagem() {

  const { orderUpdate, convertPage } = userFilter()

  const { filter, setFilter } = useProperty()
  
  // let conteudo:Array<object[]>= []
  // let conteudo:any= []
  // convertPage(property.length, 4, property, conteudo)

  const [change, setChange] = useState(true)
  const { pathname } = useRouter()
  const [count, setCount] = useState(1)
  const itens: number = 9

  let first: number = pagination(convertPage(4, filter).length, itens, count)

  useEffect(() => {
    
    // console.log(filter)
  }, [filter])

function alterPages(valor:number) {
    if(valor > count) {
      setCount(count  + (valor - count))
    }else {
      setCount(count  - (count - valor))
    }
}

  return (
    <>
      <Header/>
      <Navigation name={'Listagem'} />
      <Main change={change}>
        <span>
          <div className="order">
            <span>
              <Icon.ListMain  onClick={() => setChange(false)} />
              <Icon.ListDefault onClick={() => setChange(true)} />
              <button>Filtrar Imóvel</button>
            </span>
            <span>
              <div>
                <label htmlFor="">Ordenar por:</label>
                <select name="class" onChange={(ev) => setFilter(orderUpdate(filter, ev.target.name, ev.target.value))} >
                  <option value="0">Nome</option>
                  <option value="1">Preço</option>
                  <option value="2">Publicação</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Mostra:</label>
                <select name="sec" onChange={(ev) => setFilter(orderUpdate(filter, ev.target.name, ev.target.value))} >
                  <option value="0">ASC</option>
                  <option value="1">DESC</option>
                </select>
              </div>
            </span>
          </div>

          <Main2 change={change}>
            {convertPage(4, filter)[count - 1]?.map((i:number, e:number) => (
              <CardProperty key={e} obj={i} card={3} change={change}/>
            ))}
          </Main2>

          <ul>
            <li>
                <button onClick={() => setCount(count  - 1)}  className="color" disabled={count === 1}>
                    Anterior
                </button>
            </li>
            { Array.from({ length: Math.min(itens, convertPage(4, filter).length) })
                .map((_, index)=> index + first)
                .map((page) => (
                    <li key={page}>
                        <button onClick={ () => alterPages(page) } className={count === page? "color" : " "} disabled={count === page}>
                            {page}
                        </button>
                    </li>
            ))}
            <li>
                <button onClick={() => setCount(count  + 1)} className="color" disabled={count === convertPage(4, filter).length}>
                    Proximo
                </button>
            </li>
          </ul>
        </span>
        <Filter/>
    </Main>  
    <Footer/>
    </>
    )
}