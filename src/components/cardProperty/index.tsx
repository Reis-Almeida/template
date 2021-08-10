import Image from 'next/image'
import { Card } from './style'
import Icon from 'public/icons'
import Link from 'next/link'


export default function CardProperty({obj, card, change}:{obj: any, card:any, change:any}) {

  let src = '/images/teste/carregando.jpg'
  try {
    src = obj.src.Foto[0].Link[0].URLArquivo

  } catch(error) {}

  return (
    <Card change={change} featured={obj.offer} card={card}>
      <div>
      <Image src={src} objectFit='cover' layout="fill" alt="imagem indisponivel"/>
        <span className="img">
          <span>
            <div className="none"></div>
            <div className="price">
              <p>{obj.p_type}</p>
              <p>${obj.price}</p>
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
          <strong><Icon.Pin/>{obj.city} / {obj.district}</strong>
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

