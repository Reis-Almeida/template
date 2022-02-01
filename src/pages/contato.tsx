import Layout from '../components/Layout'
import Icon from '../shared/icons'
import { StyledMain } from '../styles/contato'
import company from '../shared/json/company'
import Contact from '../components/Contact'
import SocialNetwork from '../components/SocialNetwork'
import Navigation from '../components/Navigation'

export default function Contato() {
  return(
    <Layout>
      <Navigation name={"Contatos"} />
      <StyledMain>
        <div>
          <span className="info">
            <Icon.pin/>
            <h3>Endereço</h3>
            <article>
              <p>{company.endereco}</p>
            </article>
          </span>
          <span className="info">
            <Icon.headset/>
            <h3>Telefone & Email</h3>
            <article>
              <p>{company.telefone}</p>
              <p>{company.email}</p>
            </article>
          </span>
          <span className="info">
            <Icon.share/>
            <h3>Manter contato</h3>
            <article>
              <p>Siga-nos nas redes sociais</p>
              <SocialNetwork />
            </article>
          </span>
          
        </div>
        <div>
            <span>
              <Contact/>
            </span>
            <span>
              <h1>Você tem alguma pergunta sobre nós?</h1>
              <article>
                Qualquer tipo de solução de negócios e consultoria, 
                não hesite em nos contatar para atendimento imediato. 
                Adoramos ouvir o que você tem a dizer. 
              </article>
              <article>
                Horário de atendimento: Estamos sempre abertos, 
                exceto sábado e domingo, das 10h00 às 20h00. 
              </article>
            </span>
        </div>
      </StyledMain>
    </Layout>
  )
}