import Layout from '../components/Layout'
import { StyledMain } from '../styles/quemsomos'
import company from '../shared/json/company'
import Navigation from '../components/Navigation'

export default function QuemSomos() {
  return(
    <Layout>
       <Navigation name={"Quem Somos"} />
       <StyledMain>
          <h1>Quem é {company.name}?</h1>
          <hr />
          <article>{company.quemsomos}</article>
        </StyledMain>
    </Layout>
  )
}