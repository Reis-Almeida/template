import Layout from '../components/Layout'
import { StyledMain } from '../styles/quemsomos'
import company from '../shared/json/company'
import Navigation from '../components/Navigation'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import website from '../shared/json/website'

export default function QuemSomos() {
  return(
    <Layout>
       <Navigation router={"Quem Somos"} />
       <StyledMain>
          <span className="history">
            <LazyLoadImage src={website.quemsomos.img1} className="img" alt='predios' />
            <div>
              <h1>Quem é {company.name}?</h1>
              <hr />
              <article>{company.quemsomos}</article>
            </div>
          </span>

          <span className="business">
            <LazyLoadImage src={website.quemsomos.img2} className="img" alt='predios' />
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
        </StyledMain>
    </Layout>
  )
}