import Image from 'next/image'
import { Card } from './style'
import Icon from 'public/icons'
import Link from 'next/link'


export default function CardClient({obj}:{obj: any}) {

  return (
    <Card>
        <span>
        <Image src={obj.src} objectFit='cover' layout="fill" alt="imagem indisponivel"/>
        </span>
        <article>
          <h3>{obj.title}</h3>
          {obj.description}
        </article>
        <div>
          <h4>{obj.name}</h4>
          <span>{ Array.from({ length: 5 }).map((_, e:any) => {
              return e < obj.star ? <Icon.StarColor /> : <Icon.Star />
          }) }
          </span>
        </div>
    </Card>
  )

}

