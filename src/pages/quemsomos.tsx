import Layout from '../components/Layout'
import { StyledMain } from '../styles/quemsomos'
import company from '../shared/json/company'

export default function QuemSomos() {
  return(
    <Layout>
       <StyledMain>
          <h1>Quem é {company.nome}?</h1>
          <hr />
          <article>{company.quemsomos}</article>
        </StyledMain>
    </Layout>
  )
}