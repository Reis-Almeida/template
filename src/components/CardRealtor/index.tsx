import { MyImage } from '../Image'
import Icon from '../../shared/icons'
import { StyledCard } from './style'

type RealtorProps = {
  name: string
  src: string
  email: string
  telephone: string
}

export default function Realtor({obj}:{obj:RealtorProps}) {
  
    return (
          <StyledCard>
              <MyImage className="img" src={obj.src} alt="imagem indisponivel" />
            <span>
              <h2>{obj.name}</h2>
              <hr />
              <article>
                <p><Icon.phone/>{obj.telephone}</p>
                <p><Icon.email/>{obj.email}</p>
              </article>
            </span>
          </StyledCard>
    )

}

