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

export default function Gallery({src}:any) {

  const array:string[] = []

  try {
    src.Foto.filter((a:any) => {
      array.push(a.Link[1].URLArquivo)
    })
  } catch (e) {
    array.push("/noImg.jpg")
  }
  
  const [direction, SetDirection] = useState<boolean>(true) // true = left = flex-start -> , false = right = flex-end <-
  const [side, setSide] = useState<number>(0)
  const [count, setCount] = useState<Params>(updateArray(0))

  const items: number = 5
  const first: number = list(array.length, items, count[0 + 1].id)

  function list(images: number, items: number, current:number): number {
    if(images > items) {
      const left = (items -1) / 2
      return current >= (images - left) ? (images - items) : Math.max(current -  left, 0)
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
    }, 495)
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
          {Array.from({ length: 3 }).map((_,i:number) => (
            <div key={`gallery${i}`} >
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
          {Array.from({ length: Math.min(items, array.length) })
            .map((_, index:number)=> index + first)
            .map((id:number) => (
              <button key={`imgList${id}`} onClick={() =>imgList(id)} className={count[0 + 1].id === id ? 'selected' : ''} disabled={count[0 + 1].id === id}>
                <SuspenseImage src={array[id]} />
              </button>
          ))}
          </div>
        </span>
      </StyledCarousel>
    )
}
