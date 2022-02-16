import { StyledCard } from './style'
import Icon from '../../shared/icons'
import Link from 'next/link'
import SuspenseImage from '../SuspenseImage'
import { useEffect, useState } from 'react'

type cardProps = {
  obj: any
  card:number
  change:boolean
  className?:string
}


export default function CardProperty({obj, card, change, className}:cardProps) {

  const [favorite, setFavorite] = useState<boolean>(false)

  useEffect(() => {

    if(localStorage.getItem("favorite")) {
      const json = JSON.parse(`${localStorage.getItem("favorite")}`)
      json?.favorite.map((e:string) => { (e == obj.cod) ? setFavorite(true) : false })
    }

  },[])

  function myFavorite(add:boolean) {
    let json:any = {favorite: []}

    if(!(localStorage.getItem("favorite"))) {
      localStorage.setItem("favorite", JSON.stringify({favorite: []}))
    } else {
      json = JSON.parse(`${localStorage.getItem("favorite")}`)
    }

    if(add) {
      json.favorite.push(obj.cod)
      console.log(json)
      localStorage.setItem("favorite", JSON.stringify(json))

    } else {
      json.favorite.map((e:string, i:number) => { if(e == obj.cod) json.favorite.splice(i, 1) })
      localStorage.setItem("favorite", JSON.stringify(json))
    }

    setFavorite(add)

  }

  const src = obj?.src?.Foto[0]?.Link[0]?.URLArquivo

  return (
    <StyledCard className={className} change={change} featured={obj.offer} card={card}>
      <div>
      <SuspenseImage src={src} />
        <span className="image">
          <span>
            {favorite ?
              <Icon.heart onClick={() => myFavorite(false)} />
            : <Icon.heartLine  onClick={() => myFavorite(true)} />
            }
            <div className="price">
              <p>{obj.p_type}</p>
              <p>{'$' + obj.price}</p>
            </div>
          </span>
          <span>
            <div className="featured"><p>Destaque</p></div>
            <div className="type">
              <p>{obj.business}</p>
              <div></div>
            </div>
          </span>
        </span>
      </div>
      <div className="desc">
          <h2>{obj.name}</h2>
          <strong><Icon.pin/>{obj.city} / {obj.district}</strong>
          <article>{obj.obs}</article>
        <div className="details">
          <span>
            <p><Icon.room className="I"/>{obj.room || 0}</p>
            <p>Sala</p>
          </span>
          <span>
            <p><Icon.bedroom className="I"/>{obj.bedroom || 0}</p>
            <p>Quarto</p>
          </span>
          <span>
            <p><Icon.bathroom/>{obj.bath || 0}</p>
            <p>Banheiro</p>
          </span>
          <span className="E">
            <p><Icon.garage />{obj.garage || 0}</p>
            <p>Garagem</p>
          </span>
        </div>
        <Link href={`/imovel/${obj.cod}`} passHref>
          <button><p>Mais Detalhes</p></button>
        </Link>
      </div>
    </StyledCard>
  )

}

