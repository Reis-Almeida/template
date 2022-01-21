import Layout from '../../components/Layout'
import company from '../../shared/json/company'
import { StyledMain } from '../../styles/imovel'
import Icon from '../../shared/icons'
import Contact from '../../components/Contact'
import Calculator from '../../components/Calculator'
import Gallery from '../../components/Gallery'
import { useProperty } from '../../context/useProperty'
import { useRouter } from 'next/router'

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
    const { property } = useProperty()
    const router = useRouter()
    const cod  = router.query?.id
  
  
    let data:any
    property?.filter((a:any) => {
      if(a.cod == cod) {
        data = a
      }
    })



    return(
        <Layout>
        <StyledMain>
            <div className="main">
                <span className="details">
                    <div>
                        <h1>{data?.name}</h1>
                        <article>
                        <p>{data?.business}</p>
                        <p>{data?.p_type}</p>
                        <p>Acessível</p>
                        </article>
                    </div>
                    <div>
                        <span>
                            <p><Icon.square />{data?.square || "?"}</p>
                            <p>Area</p>
                        </span>
                        <span>
                            <p><Icon.room />{data?.room || 0}</p>
                            <p>Sala</p>
                        </span>
                        <span>
                            <p><Icon.bedroom />{data?.bedroom || 0}</p>
                            <p>Quarto</p>
                        </span>
                        <span>
                            <p><Icon.bathroom/>{data?.bath || 0}</p>
                            <p>Banheiro</p>
                        </span>
                        <span >
                            <p><Icon.garage />{data?.garage || 0}</p>
                            <p>Garagem</p>
                        </span>
                    </div>
                </span>
                <Gallery />

                { title("Visão Geral") }
                <ul className="specification fist">
                    <li>
                    <p>Preço</p>
                    <strong>{`$${data?.price}`}</strong>
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
                    <strong>{data?.square}</strong>
                    </li>
                    <li>
                    <p>Vagas</p>
                    <strong>{data?.vacancy}</strong>
                    </li>
                    <li>
                    <p>Garagem</p>
                    <strong>1</strong>
                    </li>
                    <li>
                    <p>Codigo do Imovel</p>
                    <strong>{data?.cod}</strong>
                    </li>
                    <li>
                    <p>Tipo</p>
                    <strong>{data?.p_type}</strong>
                    </li>
                    <li>
                    <p>Contrato</p>
                    <strong>{data?.business}</strong>
                    </li>
                    <li>
                    <p>Localização</p>
                    <strong>{data?.city} / {data?.district}</strong>
                    </li>
                    <li>
                    <p>Quarto</p>
                    <strong>{data?.bedroom || 0}</strong>
                    </li>
                    <li>
                    <p>Banheiro</p>
                    <strong>{data?.bath || 0}</strong>
                    </li>
                </ul>

                { title("Descrição do Imovel") }
                <article>{data?.obs}</article>
            
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
                    <p><Icon.room />Mobiliado</p>
                    {data?.furnished ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.plant />Jardim</p>
                    {data?.garden ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.maid />QuartoWCEmpregada</p>
                    {data?.br_maid ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.sauna />Sauna</p>
                    {data?.sauna ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.barbecue />Churrasqueira</p>
                    {data?.barbecue ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.interPhone />Interfone</p>
                    {data?.intercom ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.pool />Piscina</p>
                    {data?.poll ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.park />Playground</p>
                    {data?.playground ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.sport />Quadra PoliEsportiva</p>
                    {data?.esport ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.party />Salão Festas</p>
                    {data?.party ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.game />Salão Jogos</p>
                    {data?.games ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                    <li>
                    <p><Icon.hot />Hidromassagem</p>
                    {data?.whirlpool ? <Icon.check /> :  <strong className="empty">-</strong>}
                    </li>
                </ul>
                </div>

            <div className="mare">
                <div>
                    <span>
                        <h3>CONTATO</h3>
                    </span>
                    <Contact />
                </div>
                <div>
                    <span>
                        <h3>CALCULADORA</h3>
                    </span>
                    <Calculator />
                </div>
            </div>
        </StyledMain>
        </Layout>
    )
}