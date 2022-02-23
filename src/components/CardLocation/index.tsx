import { StyledCard } from './style'
import Icon from '../../shared/icons'
import { MyImage } from '../Image'
import { useProperty } from '../../context/useProperty'


export default function CardLocation({obj}:any) {
    const { property } = useProperty()
    let count = 0

    property?.filter((a:any) => {
      if(a.city == obj.city) {
        count ++
      }
    })

    return (
      <StyledCard>
        <MyImage src={obj.src} className="img" alt="imagem indisponivel"/>
        <div className="layer">
          <h1>{obj.city}</h1>
          <span>
            <p>{count} Imoveis</p>
            <strong><Icon.marker/>{obj.state}</strong>
          </span>
        </div>
      </StyledCard>
    )

}

