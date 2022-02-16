import { useRouter } from 'next/router'
import Icon from '../../shared/icons'
import { useEffect, useState } from 'react'
import userFilter from '../../hook/useFilter'
import { Form1, Form2, Main } from './style'
import { Input, Select } from '../Fields'

export default function Filter() {

  const { values, toUpdate, price, city, district, handleForm } = userFilter()

  // console.log(values)

function form() {
  return (
    <div>
    <Icon.close />
    <h2>Filtrar Imovel</h2>

    <Input
        label="Código do Imovel"
        name="cod"
        className="field"
        placeholder="VILLA00000"
        onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}
    />

    <Select label="Tipo" name="business" className="field" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}>
        <option selected={values.business === 0} value="0">Todos</option>
        <option selected={values.business === "Venda"} value="Venda">Venda</option>
        <option selected={values.business === "Aluguel"} value="Aluguel">Aluguel</option>
    </Select>

    <Select label="Cidade" name="city" className="field" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}>
        <option value="0">Todos</option>
        {city().map((e:string, i:number) =>(
          <option key={`city${i}`} value={e}>{e}</option>
        ))}
    </Select>

    <Select label="Bairro" name="district" className="field" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}>
        <option value="0">Todos</option>
        {district().map((e:string, i:number) =>(
          <option key={`district${i}`}  value={e}>{e}</option>
        ))}
    </Select>

    <Input
        label="Valor Minimo"
        name="minValue"
        type="number"
        className="field"
        defaultValue={price(0)}
        min={price(0)}
        max={price(1)}
        onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}
    />

    <Input
        label="Valor Maximo"
        name="maxValue"
        type="number"
        className="field"
        defaultValue={price(1)}
        min={price(0)}
        max={price(1)}
        onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}
    />

    <Select label="Quartos" name="bedroom" className="field" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}>
        {Array.from({ length:11 }).map((_, i:number) =>(
          <option key={`bedroom${i}`} value={i}>{i}+</option>
        ))}
    </Select>

    <Select label="Banheiro" name="bath" className="field" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}>
        {Array.from({ length:11 }).map((_, i:number) =>(
          <option key={`bathroom${i}`} value={i}>{i}+</option>
        ))}
    </Select>

    <Select label="Vagas" name="vacancy" className="field" onChange={(ev) => toUpdate(ev.target.name, ev.target.value)}>
        {Array.from({ length:11 }).map((_, i:number) =>(
          <option key={`vacancy${i}`} value={i}>{i}+</option>
        ))}
    </Select>

    <span className="field">
        <Input
            label="Mobilhado"
            name="furnished"
            type="checkbox"
            className="check"
            onChange={(ev) => toUpdate(ev.target.name, ev.target.checked)}
        />

        <Input
            label="Piscina"
            name="pool"
            type="checkbox"
            className="check"
            onChange={(ev) => toUpdate(ev.target.name, ev.target.checked)}
        />

        <Input
            label="Suite"
            name="suite"
            type="checkbox"
            className="check"
            onChange={(ev) => toUpdate(ev.target.name, ev.target.checked)}
        />
    </span>

      <input className="button" type="submit" value="Buscar"/>
    </div>
  )
}

  const [current, setCurrent] = useState<number>(1)
  
  const { pathname } = useRouter()
  
  useEffect(() => {
    if(pathname == '/') toUpdate("business", current === 1 ? "Venda" : "Aluguel")
  }, [current])
  
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