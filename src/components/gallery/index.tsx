import Image from 'next/image'
import Icon from '../../shared/icons'
import { useState } from 'react'
import { StyledCarousel } from './style'
import SuspenseImage from '../SuspenseImage'

type Params = [
  {
    id: number
    name: string
  }
]

export default function Gallery() {

  const array:any = [
    "/images/teste/teste1.jpg",
    "/images/teste/teste2.jpg",
    "/images/teste/teste3.jpg"
  ]

  // src.src.Foto.filter((a:any) => {
  //   array.push(a.Link[1].URLArquivo)
  // })

  // console.log(k)
  
  const [direction, SetDirection] = useState<boolean>(true) // true = left = flex-start -> , false = right = flex-end <-
  const [side, setSide] = useState<number>(0)
  const [count, setCount] = useState<Params>(updateArray(0))

  const itens: number = 5
  const first: number = list(array.length, itens, count[0 + 1].id)


  function list(pages: number, itens: number, current:number): number {
    if(pages > itens) {
      const left = (itens -1) / 2
      return current >= pages - left ? pages - (itens - 1) : Math.max(current -  left, 0)
    } else {
      return 0
    }
  }  

  function updateArray(start: number): Params {
    const last: number = array.length - 1
    const first: number = start == -1 ? last : start
    const params: Params = [{ id:array.indexOf(array[first]), name:array[first] }]

    for(let i = 1; i < 3; i++) {
      params.push({
          id:array.indexOf(array[start + i == array.length ? 0 : start + i]),
          name:array[start + i == array.length ? 0 : start + i] 
      })
    }

    return params
  }

  function whichDirection(which: boolean) {
    SetDirection(which)
    setSide(which ? 1 : -1)

    setTimeout(()=> {
      
      if(which) {
          const l: number = count[0 + 2].id -1 
          setCount(updateArray(l))
      }else {
          const r: number = count[0].id - 1
          setCount(updateArray(r))
      }

      setSide(0)
    }, 500)
  }

  function onlyOne(side: boolean, id:number): Params {
    const params: Params = count
    if(side) {
      params[0 + 2] = { id:id, name:array[id] }
    }else {
      params[0] = { id:id, name:array[id] }
    }

    return params
  }

  function imgList(id: number) {
      const current:boolean = id > count[0 + 1].id
      if(current) {
        setCount(onlyOne(current, id))
        whichDirection(current)
        
      }else {
        setCount(onlyOne(current, id))
        whichDirection(current)
       
      }
  }

  return (

      <StyledCarousel direction={direction} side={side}>
        <span>
          {Array.from({ length: 3 }).map((_,i) => (
            <div key={i} >
              <SuspenseImage src={count[i].name} className='img' />
            </div>
          ))}
        </span>
        <span>
          <div>
            <Icon.left onClick={() => side === 0 ? whichDirection(false) : null}/>
            <Icon.left onClick={() => side === 0 ? whichDirection(true) : null}/>
          </div>
          <div>
          {Array.from({ length: Math.min(itens, array.length) })
            .map((_, index)=> index + first)
            .map((id) => (
              <button key={id} onClick={() =>imgList(id)} className={count[0 + 1].id === id ? 'selected' : ''} disabled={count[0 + 1].id === id}>
                <SuspenseImage src={array[id]} />
              </button>
          ))}
          </div>
        </span>
      </StyledCarousel>
    )
}
