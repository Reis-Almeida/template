import { LazyLoadImage } from 'react-lazy-load-image-component'
import Icon from '../../shared/icons'
import { StyledCard } from './style'

type ServantProps = {
  name: string
  src: string
  email: string
  telephone: string
  office: string
  instagram: string
  facebook: string
  twitter: string
  linkedin: string
}

export default function CardServant({obj}:{obj:ServantProps}) {
  
    return (
          <StyledCard>
            <span>
              <LazyLoadImage src={obj.src} alt="imagem indisponivel" />
            </span>
            <span>
              <h2>{obj.name}</h2>
              <hr />
              <h3>{obj.office}</h3>
              <article>
                <p><Icon.phone/>{obj.telephone}</p>
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

