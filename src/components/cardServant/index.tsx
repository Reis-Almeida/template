import { LazyLoadImage } from 'react-lazy-load-image-component'
import Icon from '../../shared/icons'
import { StyledCard } from './style'


export default function CardServant({obj}:{ obj:any }) {
  
    return (
          <StyledCard>
            <span>
              <LazyLoadImage src={obj.foto} alt="imagem indisponivel" />
            </span>
            <span>
              <h2>{obj.nome}</h2>
              <hr />
              <h3>{obj.cargo}</h3>
              <article>
                <p><Icon.phone/>{obj.telefone}</p>
                <p><Icon.email/>{obj.email}</p>
              </article>
              <div>
                <a href={obj.twitter}><Icon.twitter className="icon"/></a>
                <a href={obj.facebook}><Icon.facebook className="icon"/></a>
                <a href={obj.instagram}><Icon.instagram className="icon"/></a>
                <a href={obj.linkedin}><Icon.linkedin className="icon"/></a>
              </div>
            </span>
          </StyledCard>
    )

}

