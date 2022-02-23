import Layout from '../components/Layout'
import { StyledMain } from '../styles/quemsomos'
import company from '../shared/json/company'
import Navigation from '../components/Navigation'
import { MyImage } from '../components/Image'
import website from '../shared/json/website'
import CardServant from '../components/CardServant'

export default function QuemSomos() {
  return(
    <Layout>
       <Navigation router={"Quem Somos"} />
       <StyledMain>
          <span className="history">
            <MyImage src={website.quemsomos.img1} className="img" alt='predios' />
            <div>
              <h1 className="title">Quem é {company.name}?</h1>
              <article>{company.quemsomos}</article>
            </div>
          </span>

          <span className="business">
            <MyImage src={website.quemsomos.img2} className="img" alt='predios' />
            <div className="info">
              <span>
                  <div className="content">
                    <p>Profissionais totais</p>
                    <h1>1270+</h1>
                  </div>
                  <div className="content">
                    <p>Total de imoveis vendidos</p>
                    <h1>8000+</h1>
                  </div>
                  <div className="content">
                    <p>Total de imoveis alugados</p>
                    <h1>2034+</h1>
                  </div>
                  <div className="content">
                    <p>Total de clientes</p>
                    <h1>5478+</h1>
                  </div>
              </span>
            </div>
          </span>
          <h1 className="title last" >Nossa Equipe</h1>
          <span className="team">
            {company.equipe.map((i, e) => (
              <CardServant  key={`servant${e}`} obj={i} />
            
            ))}
          </span>
        </StyledMain>
    </Layout>
  )
}