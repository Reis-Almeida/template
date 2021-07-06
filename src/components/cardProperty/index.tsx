import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Main, Card1, Card2 } from './style'
import Icon from 'public/icons'
import Link from 'next/link'


function card2(i:any, key:number, change:boolean) {
  return (
    <Card2 key={key} change={change} featured={i.featured}>
      <div>
        <Image src={i.src} width={change? 420 : 270} height={change? 280 : 170} alt="imagem indisponivel"/>
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
          <h2>{i.name}</h2>
          <h4><Icon.Pin/>{i.end}</h4>
          <article>
            Typi non habent claritatem insitam; est usus legentis in iis qui facit,
            Typi non habent claritatem insitam; est usus legentis in iis qui facit
          </article>
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
        <Image src={i.src} width={370} height={230} alt="imagem indisponivel"/>
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
          <h2>{i.name}</h2>
          <h4><Icon.Pin/>{i.end}</h4>
          <article>
            Typi non habent claritatem insitam; est usus legentis in iis qui facit,
            Typi non habent claritatem insitam; est usus legentis in iis qui facit
          </article>
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


export default function CardProperty({array, superFeatured, change}:{array: any, superFeatured:any, change:any}) {


 if(superFeatured) {

  return (
    <Main change={false}>
      {array.map((i:number, e:number) => (
        card1(i, e)
      ))}
    </Main>
  )

 }else {

  return (
    <Main change={change}>
      {array.map((i:number, e:number) => (
        card2(i, e, change)
      ))}
    </Main>
  )

 }
}

