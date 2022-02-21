import { useState } from 'react'
import CardProperty from '../components/CardProperty'
import { Select } from '../components/Fields'
import Filter from '../components/Filter'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Pagination from '../components/Pagination'
import { useProperty } from '../context/useProperty'
import userFilter from '../hook/useFilter'
import Icon from '../shared/icons'
import { StyledList } from '../styles/listagem'

export default function Listagem() {

  const { orderUpdate, pagination, convertPage } = userFilter()

  const { filter, setFilter } = useProperty()

  const [change, setChange] = useState<boolean>(true)
  const [show, setShow] = useState<boolean>(false)
  const [count, setCount] = useState<number>(1)

  const items: number = 9

  const first: number = pagination(convertPage(4, filter).length, items, count)

  return(
    <Layout>
      <Navigation router={"Listagem"} />
      <div className="media">
        <StyledList change={change}>
          <span>
            <div className="order">
              <span>
                <Icon.listMain  onClick={() => setChange(false)} />
                <Icon.listDefault onClick={() => setChange(true)} />
                <button onClick={() => setShow(true)}>Filtrar Imóvel</button>
              </span>
              <span>
                <Select label="Ordenar por:" name="class" onChange={(ev) => setFilter([...orderUpdate(filter, ev.target.name, ev.target.value)])}>
                    <option value="0">Nome</option>
                    <option value="1">Preço</option>
                    <option value="2">Publicação</option>
                </Select>
                <Select label="Mostra:" name="sec" onChange={(ev) => setFilter([...orderUpdate(filter, ev.target.name, ev.target.value)])}>
                    <option value="0">ASC</option>
                    <option value="1">DESC</option>
                </Select>
              </span>
            </div>

            <div className="results">
              <h3>{filter?.length > 0 ? `${filter.length} Resultado(s)`: "Nenhum resultado encontrado"}</h3>
              <hr />
            </div>

            <div className="groupCard">
              {convertPage(4, filter)[count - 1]?.map((i:number, e:number) => (
                <CardProperty key={`cards${e}`} obj={i} card={3} change={change}/>
              ))}
            </div>

          {filter?.length > 0 ? (
              <Pagination
                first={first}
                items={items}
                count={count}
                setCount={setCount}
                page={convertPage(4, filter).length}
              />
          ): false}
            
          </span>
            <Filter show={show} setShow={setShow} />
        </StyledList>  
      </div>
    </Layout>
  )
}