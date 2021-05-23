import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {  } from './style'


const array: number[] = []

for (let i = 0; i < 120; i++) {
  array.push(i)
  
}



function convertPage(size: number, limit:number, content: number[], save: Array<number[]>) {

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

export default function About () {
  
  let conteudo:Array<number[]>= []
  convertPage(array.length, 10, array, conteudo)
  
  const router = useRouter()
  const [count, setCount] = useState(1)
  const itens: number = 9
  let first: number = pagination(conteudo.length, itens, count)

  useEffect(() => {
    router.push(`about/?page=${count}`, undefined, { shallow: true })

  }, [count])

function alterPages(valor:number) {
    if(valor > count) {
      setCount(count  + (valor - count))
    }else {
      setCount(count  - (count - valor))
    }
}


  return (
    <>
    <ul>
            <li>
                <button onClick={() => setCount(count  - 1)} disabled={count === 1}>
                    Anterior
                </button>
            </li>
            {
                Array.from({ length: Math.min(itens, conteudo.length) })
                .map((_, index)=> index + first)
                .map((page) => (
                    <li key={page}>
                        <button onClick={ () => alterPages(page) } disabled={count === page}>
                            {page}
                        </button>
                    </li>
                ))
            }
            <li>
                <button onClick={() => setCount(count  + 1)} disabled={count === conteudo.length}>
                    Proximo
                </button>
            </li>
        </ul>
    <header>
      {conteudo[count -1].map((w)=> (
          <div key={w}>{w}</div>
      ))}
    </header>
    </>
    )
}
