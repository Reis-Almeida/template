import { StyledCard } from './style'
import Icon from '../../shared/icons'
import Link from 'next/link'
import SuspenseImage from '../SuspenseImage'


export default function CardProperty({obj, card, change}:{obj: any, card:any, change:any}) {

  const src = obj?.src?.Foto[0]?.Link[0]?.URLArquivo
  // const src = '/dd'

  return (
    <StyledCard change={change} featured={obj.offer} card={card}>
      <div>
      <SuspenseImage src={src} />
        <span className="image">
          <span>
            <div className="none"></div>
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
            <p><Icon.room className="I"/>{obj.room}</p>
            <p>Sala</p>
          </span>
          <span>
            <p><Icon.bedroom className="I"/>{obj.bedroom}</p>
            <p>Quarto</p>
          </span>
          <span>
            <p><Icon.bathroom/>{obj.bath}</p>
            <p>Banheiro</p>
          </span>
          <span className="E">
            <p><Icon.garage />1</p>
            <p>Garagem</p>
          </span>
        </div>
        <Link href={`/imovel/${obj.cod}`}>
          <button><p>Mais Detalhes</p></button>
        </Link>
      </div>
    </StyledCard>
  )

}

