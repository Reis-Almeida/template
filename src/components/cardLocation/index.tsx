import { StyledCard } from './style'
import Icon from '../../shared/icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export default function CardLocation({obj}:any) {
    return (
      <StyledCard>
        <LazyLoadImage src={obj.src} className="img" alt="imagem indisponivel"/>
        <div className="layer">
          <h1>{obj.city}</h1>
          <span>
            <p>2 Imoveis</p>
            <strong><Icon.marker/>{obj.state}</strong>
          </span>
        </div>
      </StyledCard>
    )

}

