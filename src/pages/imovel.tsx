import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import Contact from '@components/contact'
import Gallery from '@components/gallery'
import Navigation from '@components/navigation'
import { Main } from 'src/styles/imovel'
import { useProperty } from 'shared/useProperty'
import { useRouter } from 'next/router'
import Icon from 'public/icons'


const title = (title:string) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <span>
        <hr />
        <hr />
      </span>
    </div>
  )
}


export default function Imovel() {
  const { property, setProperty } = useProperty()
  const router = useRouter()
  const { cod } = router.query


  let data:any
  property.filter((a:any) => {
    if(a.cod == cod) {
      data = a
    }
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Navigation 
        name={'The Knightsbridge Ap.'}
      />
      <main>
      </main>



      <Main>
      <div className="main">
        <span className="details">
          <div>
            <h1>{data.name}</h1>
            <article>
              <p>{data.business}</p>
              <p>{data.p_type}</p>
              <p>Acessível</p>
            </article>
          </div>
          <div>
              <span>
                <p><Icon.Square />{data.square || "?"}</p>
                <p>Area</p>
              </span>
              <span>
                <p><Icon.Room />{data.room || 0}</p>
                <p>Sala</p>
              </span>
              <span>
                <p><Icon.Bedroom />{data.bedroom || 0}</p>
                <p>Quarto</p>
              </span>
              <span>
                <p><Icon.Bathroom/>{data.bath || 0}</p>
                <p>Banheiro</p>
              </span>
              <span >
                <p><Icon.Garage />{data.garage || 0}</p>
                <p>Garagem</p>
              </span>
          </div>
        </span>
        {/* <Gallery src={data}/> */}

          { title("Visão Geral") }
          <ul className="specification fist">
            <li>
              <p>Preço</p>
              <strong>${data.price}</strong>
            </li>
            <li>
              <p>Nome de contato</p>
              <strong>Julia Robets</strong>
            </li>
            <li>
              <p>Ano de construção</p>
              <strong>10 Anos</strong>
            </li>
            <li>
              <p>Área residencial</p>
              <strong>{data.square}</strong>
            </li>
            <li>
              <p>Vagas</p>
              <strong>{data.vacancy}</strong>
            </li>
            <li>
              <p>Garagem</p>
              <strong>1</strong>
            </li>
            <li>
              <p>Codigo do Imovel</p>
              <strong>{data.cod}</strong>
            </li>
            <li>
              <p>Tipo</p>
              <strong>{data.p_type}</strong>
            </li>
            <li>
              <p>Contrato</p>
              <strong>{data.business}</strong>
            </li>
            <li>
              <p>Localização</p>
              <strong>{data.city} / {data.district}</strong>
            </li>
            <li>
              <p>Quarto</p>
              <strong>{data.bedroom || 0}</strong>
            </li>
            <li>
              <p>Banheiro</p>
              <strong>{data.bath || 0}</strong>
            </li>
          </ul>

        { title("Descrição do Imovel") }
          <article>{data.obs}</article>
       
        { title("Locais Proximos") }
          <span className="location">
            <span>
              <div>3 min</div>
              <div>Hospital</div>
            </span>
            <span>
              <div>1 min</div>
              <div>Shopping</div>
            </span>
            <span>
              <div>5 min</div>
              <div>Escola</div>
            </span>
            <span>
              <div>5 min</div>
              <div>Clube</div>
            </span>

          </span>

        { title("Comodidades do Imóvel") }
          <ul className="specification">
            <li>
              <p><Icon.Room />Mobiliado</p>
              {data.furnished ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Plant />Jardim</p>
              {data.garden ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Maid />QuartoWCEmpregada</p>
              {data.br_maid ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Sauna />Sauna</p>
              {data.sauna ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Barbecue />Churrasqueira</p>
              {data.barbecue ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.InterPhone />Interfone</p>
              {data.intercom ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Pool />Piscina</p>
              {data.poll ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Park />Playground</p>
              {data.playground ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Sport />Quadra PoliEsportiva</p>
              {data.esport ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Party />Salão Festas</p>
              {data.party ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Game />Salão Jogos</p>
              {data.games ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
            <li>
              <p><Icon.Hot />Hidromassagem</p>
              {data.whirlpool ? <Icon.Check /> :  <strong className="empty">-</strong>}
            </li>
          </ul>
        </div>

      <div className="mare">
        <form>
          <h3>CALCULADORA</h3>
          <span>
            <input type="number" />
            <Icon.Money/>
          </span>
          <span>
            <input type="number" />
            <Icon.Money/>
          </span>
          <span>
            <input type="number" />
            <Icon.Calendar/>
          </span>
          <button>Calcular</button>
        </form>
      </div>

    </Main>



      <Footer/>
    </>
  )
}
