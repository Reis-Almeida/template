import { useState } from 'react'
import CardProperty from '../components/CardProperty'
import Filter from '../components/Filter'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import { useProperty } from '../context/useProperty'
import userFilter from '../hook/useFilter'
import Icon from '../shared/icons'
import { StyledList } from '../styles/listagem'

export default function Listagem() {

  const { orderUpdate, pagination, convertPage } = userFilter()

  const { filter, setFilter } = useProperty()

  const [change, setChange] = useState(true)
  const [count, setCount] = useState(1)

  const itens: number = 9

  const first: number = pagination(convertPage(4, filter).length, itens, count)

  return(
    <Layout>
      <StyledList change={change}>
        <span>
          <div className="order">
            <span>
              <Icon.listMain  onClick={() => setChange(false)} />
              <Icon.listDefault onClick={() => setChange(true)} />
              <button>Filtrar Imóvel</button>
            </span>
            <span>
              <div>
                <label htmlFor="">Ordenar por:</label>
                <select name="class" onChange={(ev) => setFilter([...orderUpdate(filter, ev.target.name, ev.target.value)])} >
                  <option value="0">Nome</option>
                  <option value="1">Preço</option>
                  <option value="2">Publicação</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Mostra:</label>
                <select name="sec" onChange={(ev) => setFilter([...orderUpdate(filter, ev.target.name, ev.target.value)])} >
                  <option value="0">ASC</option>
                  <option value="1">DESC</option>
                </select>
              </div>
            </span>
          </div>

          <div className="groupCard">
            {convertPage(4, filter)[count - 1]?.map((i:number, e:number) => (
              <CardProperty key={`cards${e}`} obj={i} card={3} change={change}/>
            ))}
          </div>

          <Pagination
              first={first}
              itens={itens}
              count={count}
              setCount={setCount}
              convertPage={convertPage}
          />
          
        </span>
        <Filter />
      </StyledList>  
    </Layout>
  )
}