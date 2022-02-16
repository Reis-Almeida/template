import { useEffect, useState } from "react"
import CardProperty from "../components/CardProperty"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import { useProperty } from "../context/useProperty"
import { StyledMain } from "../styles/favoritos"

export default function Favoritos() {

    const { property } = useProperty()

    const [favorite, setFavorite] = useState<object[]>([])

   useEffect(() => {
    let json: string[] = []
    let values: object[] = []

    if(localStorage.getItem("favorite")) {
        json = JSON.parse(`${localStorage.getItem("favorite")}`).favorite
    }

    property?.map((obj:any) => {
        json.map((e: string) => {
            if(obj.cod == e) {
                values.push(obj)
            }
        })
    })

    setFavorite(values)

   }, [])
  
    return(
      <Layout>
        <Navigation router="Favoritos" />
        <StyledMain>
            <div className="groupCard">
              {favorite?.map((i:any, e:number) => (
                <CardProperty className="card" key={`favorite${e}`} obj={i} card={1} change={false}/>
                ))}
            </div>
        </StyledMain>
      </Layout>
    )
  }