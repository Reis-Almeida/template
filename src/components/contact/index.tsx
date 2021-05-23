import Icon from 'public/icons'
import empresa from 'shared/empresa'
import { Main } from './style'

export default function Contact() {
  return (
    <Main>
      <div>
        <span>
          <Icon.Pin/>
          <h3>Endereço</h3>
          <article>
            <p>Rua 09 Norte, Lote 01</p>
            <p>Águas Claras, Brasília - DF</p>
          </article>
        </span>
        <span>
          <Icon.Headset/>
          <h3>Telefone & Email</h3>
          <article>
            <p>{empresa.telefone}</p>
            <p>{empresa.email}</p>
          </article>
        </span>
        <span>
          <Icon.Share/>
          <h3>Manter contato</h3>
          <article>
            <p>Siga-nos nas redes sociais</p>
            <span>
              <a href={empresa.twitter}><Icon.Twitter /></a>
              <a href={empresa.facebook}><Icon.Facebook /></a>
              <a href={empresa.instagram}><Icon.Instagram /></a>
              <a href={empresa.pinterest}><Icon.Pinterest /></a>
              <a href={empresa.linkedin}><Icon.Linkedin /></a>
            </span>
          </article>
        </span>
        
      </div>
      <div>
        <form action="">
          <h2>SOBRE O QUE É SUA DUVIDA?</h2>
          <label htmlFor="">Nome</label>
            <input type="text" placeholder="Obrigatório" />
          <label htmlFor="">Email</label>
            <input type="email" placeholder="Obrigatório" />
          <label htmlFor="">Assunto</label>
            <input type="text" />
          <label htmlFor="">Sua Mensagem</label>
            <textarea name="" rows={10}></textarea>
          <input type="submit" className="button" value="Enviar" />
        </form>
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
    </Main>
  )
}