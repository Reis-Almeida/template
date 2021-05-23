import Image from 'next/image'
import { Main } from './style'
import Icon from 'public/icons'
import empresa from 'shared/empresa'


export default function CardServant() {
  
    return (
      <Main>
        {empresa.equipe.map((i, e) => (
          <div key={e}>
            <span>
              <Image src={i.foto} width={250} height={250} alt="imagem indisponivel"/>
            </span>
            <span>
              <h2>{i.nome}</h2>
              <hr />
              <h3>{i.cargo}</h3>
              <article>
                <p><Icon.Phone/>{i.telefone}</p>
                <p><Icon.Email/>reisalmeidalopesrsal@gmail.com</p>
              </article>
              <div>
                <a href={empresa.twitter}><Icon.Twitter className="icon"/></a>
                <a href={empresa.facebook}><Icon.Facebook className="icon"/></a>
                <a href={empresa.instagram}><Icon.Instagram className="icon"/></a>
                <a href={empresa.linkedin}><Icon.Linkedin className="icon"/></a>
              </div>
            </span>
          </div>
        ))}    
      </Main>
    )

}

