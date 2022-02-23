import { MyImage } from '../Image'
import { StyledCard } from './style'
import Icon from '../../shared/icons'


type PropsClient = {
  obj: {
    src: string
    title: string
    description: string
    name: string
    star: number
  }

}

export default function CardClient({obj}:PropsClient) {

  return (
    <StyledCard>
        <span>
        <MyImage src={obj.src} className="img" alt="imagem indisponivel"/>
        </span>
        <article>
          <h3>{obj.title}</h3>
          {obj.description}
        </article>
        <div>
          <h4>{obj.name}</h4>
          <span>
            { Array.from({ length: 5 }).map((_, e:number) => {
                return (e < obj.star) ? <Icon.starColor key={`star${e}`} /> : <Icon.star key={`star${e}`} />
            }) }
          </span>
        </div>
    </StyledCard>
  )

}

