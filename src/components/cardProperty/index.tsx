import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Main, Card } from './style'
import Icon from 'public/icons'
import Link from 'next/link'


function card(i:any, key:number, change:boolean, superFeatured:boolean) {
  return (
    <Card key={key} change={change} featured={i.offer} superFeatured={superFeatured}>
      <div>
        <Image src={i.src.Foto[0].Link[0].URLArquivo} width={superFeatured ? 370 : change? 420 : 270} height={superFeatured ? 230 : change? 280 : 170} alt="imagem indisponivel"/>
        <span className="img">
          <div className="none"></div>
          <div className="price">
            <p>{i.p_type}</p>
            <p>${i.price}</p>
          </div>
          <div className="featured"><p>Destaque</p></div>
          <div className="type">
            <p>{i.business}</p>
            <div></div>
          </div>
        </span>
      </div>
      <div className="desc">
          <h2>{i.name}</h2>
          <h4><Icon.Pin/>{i.address}</h4>
          <article>{i.obs}</article>
        <div className="details">
          <span>
            <p><Icon.Room className="I"/>{i.room}</p>
            <p>Sala</p>
          </span>
          <span>
            <p><Icon.Bedroom className="I"/>{i.bedroom}</p>
            <p>Quarto</p>
          </span>
          <span>
            <p><Icon.Bathroom/>{i.bath}</p>
            <p>Banheiro</p>
          </span>
          <span className="E">
            <p><Icon.Garage />1</p>
            <p>Garagem</p>
          </span>
        </div>
        <Link href={`/imovel?cod=${i.cod}`}>
          <button><p>Mais Detalhes</p></button>
        </Link>
      </div>
    </Card>
  )
}


export default function CardProperty({array, superFeatured, change}:{array: any, superFeatured:any, change:any}) {

// console.log(array)

  return (
    <Main change={change}>
      {array.map((i:number, e:number) => (
        card(i, e, change, superFeatured)
      ))}
    </Main>
  )

}

