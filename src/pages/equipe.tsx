import CardServant from '../components/CardServant'
import Layout from '../components/Layout'
import { StyledMain } from '../styles/equipe'
import company from '../shared/json/company'
import Navigation from '../components/Navigation'

export default function Equipe() {
  return(
    <Layout>
        <Navigation router={"Equipe"} />
        <div className="media">
          <StyledMain>
            {company.equipe.map((i, e) => (
              <CardServant  key={`servant${e}`} obj={i} />
            
            ))}    
          </StyledMain>
        </div>
    </Layout>
  )
}