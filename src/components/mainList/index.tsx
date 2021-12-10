import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Main } from './style'
import Icon from 'public/icons'


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


export default function CardImovel({filter, cardL}:{filter: any, cardL:any}) {
  let conteudo:Array<object[]>= []
  // convertPage(array.length, 4, array, conteudo)

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

  
}
