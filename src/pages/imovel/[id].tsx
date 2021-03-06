import Layout from '../../components/Layout'
import company from '../../shared/json/company'
import { StyledMain } from '../../styles/imovel'
import Icon from '../../shared/icons'
import Contact from '../../components/Contact'
import Calculator from '../../components/Calculator'
import Gallery from '../../components/Gallery'
import { useProperty } from '../../context/useProperty'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'
import Realtor from '../../components/CardRealtor'
import Head from 'next/head'
import website from '../../shared/json/website'

import dynamic from "next/dynamic"
import Indication from '../../components/Indication'
import { useEffect, useState } from 'react'
import CardProperty from '../../components/CardProperty'

const Map = dynamic(() => import("../../components/Map"), { ssr:false })

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

    let similar:object[] = []
    property?.filter((a:any) => {
        if(a.city == data?.city && a.business == data?.business && a.p_type == data?.p_type) {
            similar.push(a)
        }
    })

    // console.log(similar)

    const [favorite, setFavorite] = useState<boolean>(false)

    useEffect(() => {

        if(localStorage.getItem("favorite")) {
        const json = JSON.parse(`${localStorage.getItem("favorite")}`)
        json?.favorite?.map((e:string) => { (e == data?.cod) ? setFavorite(true) : false })
        console.log(favorite)
        }

    },[data])

    function myFavorite(add:boolean) {
        let json:any = {favorite: []}

        if(!(localStorage.getItem("favorite"))) {
        localStorage.setItem("favorite", JSON.stringify({favorite: []}))
        } else {
        json = JSON.parse(`${localStorage.getItem("favorite")}`)
        }

        if(add) {
        json.favorite.push(data.cod)
        console.log(json)
        localStorage.setItem("favorite", JSON.stringify(json))

        } else {
        json.favorite.map((e:string, i:number) => { if(e == data.cod) json.favorite.splice(i, 1) })
        localStorage.setItem("favorite", JSON.stringify(json))
        }

        setFavorite(add)

    }

    return(
        <Layout>
             <Head>
                <title key={`title`}>{data?.name} - {company.name}</title>
             </Head>

            <Navigation router={data?.name} router2={"listagem"} />
            <div className="media">
                <StyledMain>
                    <div className="main">
                        <span className="detail">
                            <div>
                                <h1>{data?.name}</h1>
                                <article>
                                <p>{data?.business}</p>
                                <p>{data?.p_type}</p>
                                <p>Acess??vel</p>
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
                        <Gallery src={data?.src} />

                        { title("Vis??o Geral") }
                        <ul className="specification fist">
                            <li>
                            <p>Pre??o</p>
                            <strong>{`$${data?.price}`}</strong>
                            </li>
                            <li>
                            <p>Nome de contato</p>
                            <strong>Julia Robets</strong>
                            </li>
                            <li>
                            <p>Ano de constru????o</p>
                            <strong>10 Anos</strong>
                            </li>
                            <li>
                            <p>??rea residencial</p>
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
                            <p>Localiza????o</p>
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

                        { title("Descri????o do Imovel") }
                        <article className="obs">{data?.obs}</article>
                    
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

                        { title("Comodidades do Im??vel") }
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
                            <p><Icon.party />Sal??o Festas</p>
                            {data?.party ? <Icon.check /> :  <strong className="empty">-</strong>}
                            </li>
                            <li>
                            <p><Icon.game />Sal??o Jogos</p>
                            {data?.games ? <Icon.check /> :  <strong className="empty">-</strong>}
                            </li>
                            <li>
                            <p><Icon.hot />Hidromassagem</p>
                            {data?.whirlpool ? <Icon.check /> :  <strong className="empty">-</strong>}
                            </li>
                        </ul>
                        { title("Video") }
                        <video controls controlsList="nodownload">
                            <source src={website.property.video} type="video/mp4" />
                        </video>

                        { title("Mapa") }
                        <Map lat={data?.lat} lng={data?.lon} />

                        { title("Propiedades Semelhantes") }
                        <div className="groupCard">
                            {similar?.map((i:any, e:number) => (
                                <CardProperty className="card" key={`similar${e}`} obj={i} card={1} change={false}/>
                            ))}
                        </div>
                        </div>

                    <div className="mare">
                        <div>
                            <h3>GOSTOU? ADICIONE AO FAVORITOS</h3>
                            <button className="favorite"
                                    onClick={() => myFavorite(!favorite)}
                            >{favorite ? 'Remover' : 'Adicionar'}<Icon.heart /></button>
                        </div>
                        <div>
                            <h3>CORRETOR</h3>
                            <Realtor obj={website.property.realtor} />
                        </div>
                        <div>
                            <h3>CONTATO</h3>
                            <Contact />
                        </div>
                        <div>
                            <h3>CALCULADORA</h3>
                            <Calculator price={`${data?.price}`} />
                        </div>
                        <div>
                            <h3>INDIQUE A UM AMIGO</h3>
                            <Indication/>
                        </div>
                    </div>
                </StyledMain>
            </div>
        </Layout>
    )
}