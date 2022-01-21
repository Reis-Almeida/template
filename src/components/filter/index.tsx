import { useRouter } from 'next/router'
import Icon from '../../shared/icons'
import { useState } from 'react'
import userFilter from '../../hook/useFilter'
import { Form1, Form2, Main } from './style'

export default function Filter() {

  const { toUpdate, price, city, district, handleForm } = userFilter()


function form() {
  return (
    <div>
    <Icon.close />
    <h2>Filtrar Imovel</h2>
    <span className="field">
      <label htmlFor="">Código do Imovel</label>
      <input name="cod" type="text" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)} />
    </span>
    <span className="field">
      <label htmlFor="">Tipo</label>
      <select name="business" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}>
        <option value="0">Todos</option>
        <option value="Venda">Venda</option>
        <option value="Aluguel">Aluguel</option>
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Cidade</label>
      <select name="city" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)} >
        <option value="0">Todos</option>
        {city().map((e:any, i:any) =>(
          <option key={`city${i}`} value={e}>{e}</option>

        ))}
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Bairro</label>
      <select name="district" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)} >
        <option value="0">Todos</option>
        {district().map((e:any, i:any) =>(
          <option key={`district${i}`}  value={e}>{e}</option>

        ))}
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Valor Minimo</label>
      <input name="minValue" type="number" defaultValue={price(0)} min={price(0)}  max={price(1)} onChange={(ev) => toUpdate(ev.target.name, ev.target.value)} />
    </span>
    <span className="field">
      <label htmlFor="">Valor Maximo</label>
      <input name="maxValue" type="number" defaultValue={price(1)} min={price(0)} max={price(1)} onChange={(ev) => toUpdate(ev.target.name, ev.target.value)} />
    </span>
    <span className="field">
      <label htmlFor="">Quartos</label>
      <select name="bedroom" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)} >
        {Array.from({ length:11 }).map((_, i) =>(
          <option key={`bedroom${i}`} value={i}>{i}+</option>

        ))}
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Banheiro</label>
      <select name="bath" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)} >
        {Array.from({ length:11 }).map((_, i) =>(
          <option key={`bathroom${i}`} value={i}>{i}+</option>

        ))}
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Vagas</label>
      <select name="vacancy" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)} >
        {Array.from({ length:11 }).map((_, i) =>(
          <option key={`vacancy${i}`} value={i}>{i}+</option>

        ))}
      </select>
    </span>
    <span className="field">
      <span className="check">
        <input name="furnished" type="checkbox" onChange={(ev) => toUpdate(ev.target.name, ev.target.checked)} />
        <label htmlFor="">Mobilhado</label>
      </span>
      <span className="check">
        <input name="pool" type="checkbox" onChange={(ev) => toUpdate(ev.target.name, ev.target.checked)} />
        <label htmlFor="">Piscina</label>
      </span>
      <span className="check">
        <input name="suite" type="checkbox" onChange={(ev) => toUpdate(ev.target.name, ev.target.checked)} />
        <label htmlFor="">Suite</label>
      </span>
    </span>

      <input className="button" type="submit" value="Buscar"/>
    </div>
  )
}

  const [current, setCurrent] = useState(1)
  const { pathname } = useRouter()

 if(pathname == '/') {

      return (
        <Main n={current}>
          <div>
            <span className="type">
              <div onClick={() => setCurrent(1)}>Venda</div>
              <div onClick={() => setCurrent(2)}>Aluguel</div>
            </span>
            <Form2 onSubmit={handleForm}>
              {form()}
            </Form2>
          </div>
        </Main>
      )

 } else{
   
    return (
      <Form1 onSubmit={handleForm}>
        {form()} 
      </Form1>
    )

 }
}