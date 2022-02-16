import Layout from '../components/Layout'
import { StyledMain } from '../styles/quemsomos'
import company from '../shared/json/company'
import Navigation from '../components/Navigation'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function QuemSomos() {
  return(
    <Layout>
       <Navigation router={"Quem Somos"} />
       <StyledMain>
          <span className="history">
            <LazyLoadImage src='/images/teste/ab3.webp' className="img" alt='predios' />
            <div>
              <h1>Quem é {company.name}?</h1>
              <hr />
              <article>{company.quemsomos}</article>
            </div>
          </span>

          <span className="business">
            <LazyLoadImage src='/quemsomos.jpg' className="img" alt='predios' />
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