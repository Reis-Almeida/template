import Image from 'next/image'
import { Main } from './style'
import Icon from 'public/icons'

const array = [
  { 
      src:'/images/city/aguasclaras.png',
      state: 'Brasilia - DF',
      city: "Águas Claras"
  },
  { 
      src:'/images/city/porto.jpg',
      state: 'Baiha - BA',
      city: "Porto Seguro"
  },
  { 
      src:'/images/city/lagosul.jpg',
      state: 'Brasilia - DF',
      city: "Lago Sul"
  },
  { 
      src:'/images/city/asanorte.jpeg',
      state: 'Brasilia - DF',
      city: "Asa Norte"
  },
  { 
      src:'/images/city/niteroi.jpg',
      state: 'Rio de Janeiro - RG',
      city: "Niterói"
  },
  { 
      src:'/images/city/saopaulo.jpg',
      state: 'São Paulo - SP',
      city: "São Paulo"
  }
]



export default function CardLocation() {
  
    return (
      <Main>
        <span>
          <h1>Localizações de imóveis</h1>
          <h5>Encontre uma casa para vender ou alugar com base na localização. </h5>
        </span>
        <span>
          {array.map((i, e) => (
            <div key={e}>
              <Image src={i.src} objectFit='cover' layout="fill" alt="imagem indisponivel"/>
              <div className="img">
                <h1>{i.city}</h1>
                <span>
                  <p>2 Imoveis</p>
                  <strong><Icon.Marker/>{i.state}</strong>
                </span>
              </div>
            </div>
          ))}
        </span>
        
      </Main>
    )

}

