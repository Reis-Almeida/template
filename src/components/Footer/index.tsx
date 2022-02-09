import { StyledFooter } from './style'
import company from '../../shared/json/company'
import Icon from '../../shared/icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SocialNetwork from '../SocialNetwork'

export default function Footer() {
  return (
    <StyledFooter>
        <h1>{company.name}</h1>
        <span>
          <div className="item1">
            <p>{company.descricao}</p>
          </div>
          <div className="item2">
            <a><Icon.building/>{company.endereco}</a>
            <a><Icon.phone/>{company.telefone}</a>
            <a><Icon.telegram/>{company.telegram}</a>
            <a href={'https://api.whatsapp.com/send?1=pt_BR&phone=55' + company.whatsapp} target="_blank" rel="noreferrer" ><Icon.whatsapp/>{company.whatsapp}</a>
            <a href={"mailto:" + company.email}><Icon.email/>{company.email}</a>
          </div>
          <form className="item3" action="" method="post">
              <h3>Inscreva-se em nossa Newsletter</h3>
              <span>
                <input type="email" placeholder="E-mail"/>
                <input type="submit" value="Enviar" />
              </span>
              <h3>Siga-nos</h3>
              <SocialNetwork />
          </form>
        </span>
        <div className="allma">
          <p>
            © 2021 {company.name} – Todos os direitos reservados – Desenvolvido por Allmatech TI
          </p>
            <LazyLoadImage className="img" src={company.logo.footer} height={30} width={30} alt="logo" />
        </div>
    </StyledFooter>
  )
}