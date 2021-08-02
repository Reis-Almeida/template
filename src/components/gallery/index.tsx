import Image from 'next/image'
import { useRouter } from 'next/router'
import Icon from 'public/icons'
import { useEffect, useState } from 'react'
import { useProperty } from 'shared/useProperty'
import { Carrossel } from './style'

type Params = [
  {
    id: number
    name: string
  }
]

export default function Gallery({src}:{src:any}) {

  const array:any = []

  src.src.Foto.filter((a:any) => {
    array.push(a.Link[1].URLArquivo)
  })

  // console.log(k)
  
  const itens: number = 5
  let [direction, SetDirection] = useState(true) // true = left <- , false = right ->
  let [left, SetLeft] = useState(850)
  let [right, SetRight] = useState(850)
  let [count, setCount] = useState<Params>(updateArray(0))
  let first: number = list(array.length, itens, count[0 + 1].id)


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

  function side() {

    if(direction) {
        const l: number = count[0 + 2].id -1 
        setCount(count = updateArray(l))
        SetLeft(left = 850)
    }else {
        const r: number = count[0].id - 1
        setCount(count = updateArray(r))
        SetRight(right = 850)

    }
  }

  function whichDirection(which: boolean) {

    SetDirection(direction = which)

    var effect = setInterval(
      function() {
        which == true ? SetLeft(left = (left - 30)) :  SetRight(right = (right - 30))
    }, 1)

    setTimeout(()=> {
      clearInterval(effect)
      side()
    }, 300)

  }

  function onlyOne(side: boolean, id:number): Params {
    const params: Params = count
    if(side) {
      params[ 0 + 2] = { id:id, name:array[id] }
    }else {
      params[0] = { id:id, name:array[id] }
    }

    return params
  }

  function imgList(id: number) {
      const current:boolean = id > count[0 + 1].id
      if(current) {
        setCount(count = onlyOne(current, id))
        whichDirection(current)
        
      }else {
        setCount(count = onlyOne(current, id))
        whichDirection(current)
       
      }
  }

  function style1(direction: boolean): object {
    if(direction){
      return { justifyContent: 'flex-start' }
    }else {
      return { justifyContent: 'flex-end' }
    }
  }

  function style2(id: number) {
    switch(id) {
      case 0:
        return { width: `${left}px` }
      case 1:
        return { width: `850px` }
      case 2:
        return { width: `${right}px` }
      
    }
  }

  return (

      <Carrossel direction={direction}>
        <span style={style1(direction)}>
          {Array.from({ length: 3 }).map((_,i) => (
            <div key={i} style={style2(i)}>
              <Image src={count[i].name} width={850} height={600} alt="imagem indisponivel"/>
            </div>
          ))}
        </span>
        <span>
          <div>
            <Icon.Left onClick={() =>whichDirection(false)}/>
            <Icon.Left onClick={() =>whichDirection(true)}/>
          </div>
          <div>
          {Array.from({ length: Math.min(itens, array.length) })
            .map((_, index)=> index + first)
            .map((id) => (
              <button key={id} onClick={() =>imgList(id)} className={count[0 + 1].id === id ? 'selected' : ''} disabled={count[0 + 1].id === id}>
                <img src={array[id]}  width={110} height={80} alt="imagem indisponivel"/>
              </button>
          ))}
          </div>
        </span>
      </Carrossel>
    )
}
