import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card } from './style'
import Icon from 'public/icons'
import Link from 'next/link'


export default function CardProperty({obj, superFeatured, change}:{obj: any, superFeatured:any, change:any}) {

  return (
    <Card change={change} featured={obj.offer} superFeatured={superFeatured}>
      <div>
        <Image src={obj.src.Foto[0].Link[0].URLArquivo} width={superFeatured ? 370 : change? 420 : 270} height={superFeatured ? 230 : change? 280 : 170} alt="imagem indisponivel"/>
        <span className="img">
          <div className="none"></div>
          <div className="price">
            <p>{obj.p_type}</p>
            <p>${obj.price}</p>
          </div>
          <div className="featured"><p>Destaque</p></div>
          <div className="type">
            <p>{obj.business}</p>
            <div></div>
          </div>
        </span>
      </div>
      <div className="desc">
          <h2>{obj.name}</h2>
          <h4><Icon.Pin/>{obj.address}</h4>
          <article>{obj.obs}</article>
        <div className="details">
          <span>
            <p><Icon.Room className="I"/>{obj.room}</p>
            <p>Sala</p>
          </span>
          <span>
            <p><Icon.Bedroom className="I"/>{obj.bedroom}</p>
            <p>Quarto</p>
          </span>
          <span>
            <p><Icon.Bathroom/>{obj.bath}</p>
            <p>Banheiro</p>
          </span>
          <span className="E">
            <p><Icon.Garage />1</p>
            <p>Garagem</p>
          </span>
        </div>
        <Link href={`/imovel?cod=${obj.cod}`}>
          <button><p>Mais Detalhes</p></button>
        </Link>
      </div>
    </Card>
  )

}

