import Image from 'next/image'
import { Card } from './style'
import Icon from 'public/icons'
import empresa from 'shared/empresa'


export default function CardServant({key, obj}:{key: any, obj:any }) {
  
    return (
          <Card key={key}>
            <span>
              <Image src={obj.foto} width={300} height={300} alt="imagem indisponivel"/>
            </span>
            <span>
              <h2>{obj.nome}</h2>
              <hr />
              <h3>{obj.cargo}</h3>
              <article>
                <p><Icon.Phone/>{obj.telefone}</p>
                <p><Icon.Email/>reisalmeidalopesrsal@gmail.com</p>
              </article>
              <div>
                <a href={empresa.twitter}><Icon.Twitter className="icon"/></a>
                <a href={empresa.facebook}><Icon.Facebook className="icon"/></a>
                <a href={empresa.instagram}><Icon.Instagram className="icon"/></a>
                <a href={empresa.linkedin}><Icon.Linkedin className="icon"/></a>
              </div>
            </span>
          </Card>
    )

}

