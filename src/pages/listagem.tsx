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


export default function Listagem() {

  const { property, setProperty } = useProperty()


  const router = useRouter()
  const { cod } = router.query
  let k:any
  // console.log(router.query)
  
  useEffect(() => {
    
    for(let prop in router.query) {
      if(router.query[prop] != 'undefined') {
        setProperty(
          property.filter((a:any) => {
            for(let p in a) {
              // console.log(p, prop)
                if(p == prop) {
                  // console.log(a[p], router.query[prop])
                  if(a[p] == router.query[prop]) {
                    return a
                  }
                }
            }
            // if(a[prop] == router.query[prop]) {
            //   return a
            // }
          })
        )
        // console.log(k, cod)
      }
    }

  }, [property])
  
  // setProperty(property)
  
  // let conteudo:Array<object[]>= []
  let conteudo:any= []
  convertPage(property.length, 4, property, conteudo)

  const [change, setChange] = useState(true)
  const { pathname } = useRouter()
  const [count, setCount] = useState(1)
  const itens: number = 9

  let first: number = pagination(conteudo.length, itens, count)

  // useEffect(() => {
  //   router.push(`?page=${count}`, undefined, { shallow: true })

  // }, [count])

  var x = window.matchMedia("(max-width: 500px)")
  if(x.matches) {
    // console.log(x.matches)
  }
  // useEffect(() => {


  // }, [x])

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
          {/* <div className="order">
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
          </div> */}

          <Main2 change={change}>
            {conteudo[count -1].map((i:number, e:number) => (
              <CardProperty key={e} obj={i} card={3} change={change}/>
            ))}
          </Main2>

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
        <Filter/>
    </Main>  
    <Footer/>
    </>
    )
}