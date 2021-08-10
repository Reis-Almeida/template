import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import Contact from '@components/contact'
import Navigation from '@components/navigation'
import empresa from 'shared/empresa'
import Icon from 'public/icons'
import { Main } from 'src/styles/contato'


export default function Contato() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Navigation 
        name={'Contato'}
      />

      <Main>
        <div>
          <span className="info">
            <Icon.Pin/>
            <h3>Endereço</h3>
            <article>
              <p>Rua 09 Norte, Lote 01</p>
              <p>Águas Claras, Brasília - DF</p>
            </article>
          </span>
          <span className="info">
            <Icon.Headset/>
            <h3>Telefone & Email</h3>
            <article>
              <p>{empresa.telefone}</p>
              <p>{empresa.email}</p>
            </article>
          </span>
          <span className="info">
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
      </Main>

      <main>
      </main>
      <Footer/>
    </>
  )
}
