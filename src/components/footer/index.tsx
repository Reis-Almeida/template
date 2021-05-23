import { BaseBoard } from './style'
import empresa from 'shared/empresa'
import Image from 'next/image'
import Icon from 'public/icons'

export default function Footer() {
  return (
    <BaseBoard>
        <h1 className="item0">{empresa.nome}</h1>
        <div className="item1">
          <p>{empresa.descricao}</p>
        </div>
        <div className="item2">
          <a><Icon.Building/>{empresa.endereco}</a>
          <a><Icon.Phone/>{empresa.telefone}</a>
          <a><Icon.Telegram/>{empresa.telegram}</a>
          <a href={'https://api.whatsapp.com/send?1=pt_BR&phone=55' + empresa.whatsapp}><Icon.Whatsapp/>{empresa.whatsapp}</a>
          <a href={"mailto:" + empresa.email}><Icon.Email/>{empresa.email}</a>
        </div>
        <div className="item3">
          <h3>Inscreva-se em nossa Newsletter</h3>
          <form action="" method="post">
            <input type="email" placeholder="E-mail"/>
            <input type="submit" value="Enviar" />
          </form>
          <h3>Siga-nos</h3>
          <span>
            <a href={empresa.twitter}><Icon.Twitter /></a>
            <a href={empresa.facebook}><Icon.Facebook /></a>
            <a href={empresa.instagram}><Icon.Instagram /></a>
            <a href={empresa.pinterest}><Icon.Pinterest /></a>
            <a href={empresa.linkedin}><Icon.Linkedin /></a>
          </span>
        </div>
        <div className="item4">
          <p>
            © 2021 {empresa.nome} – Todos os direitos reservados – Desenvolvido por Allmatech TI
          </p>
            <Image className="img" src={empresa.logo.footer} height={30} width={30} alt="logo" />
        </div>
    </BaseBoard>
  )
}