import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useProperty } from 'shared/useProperty'
import { Form1, Form2, Main } from './style'

export default function Filter() {

  const [field, setField]= useState<any>({})




function form(city:any, district:any) {
  return (
    <>
    <h2>Filtrar Imovel</h2>
    <span className="field">
      <label htmlFor="">Código do Imovel</label>
      <input type="text" onChange={(ev) => setField({cod: ev.target.value})} />
    </span>
    <span className="field">
      <label htmlFor="">Tipo</label>
      <select onChange={(ev) => setField({type: ev.target.value})}>
        <option value="0">Todos</option>
        <option value="1">Venda</option>
        <option value="2">Aluguel</option>
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Cidade</label>
      <select onChange={(ev) => setField({city: ev.target.value})} >
        <option value="0">Todos</option>
        {city.map((e:any, i:any) =>(
          <option value={e}>{e}</option>

        ))}
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Bairro</label>
      <select onChange={(ev) => setField({district: ev.target.value})} >
        <option value="0">Todos</option>
        {district.map((e:any, i:any) =>(
          <option value={i}>{e}</option>

        ))}
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Valor Minimo</label>
      <input type="number" onChange={(ev) => setField({minPrice: ev.target.value})} />
    </span>
    <span className="field">
      <label htmlFor="">Valor Maximo</label>
      <input type="number" onChange={(ev) => setField({maxPrice: ev.target.value})} />
    </span>
    <span className="field">
      <label htmlFor="">Quartos</label>
      <select onChange={(ev) => setField({bedroom: ev.target.value})}>
        {Array.from({ length:11 }).map((_, i) =>(
          <option value={i}>{i}+</option>

        ))}
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Banheiro</label>
      <select onChange={(ev) => setField({beth: ev.target.value})}>
        {Array.from({ length:11 }).map((_, i) =>(
          <option value={i}>{i}+</option>

        ))}
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Vagas</label>
      <select onChange={(ev) => setField({vacancy: ev.target.value})}>
        {Array.from({ length:11 }).map((_, i) =>(
          <option value={i}>{i}+</option>

        ))}
      </select>
    </span>
    <span className="field">
      <span className="check">
        <input type="checkbox" />
        <label htmlFor="">Arcodicionado</label>
      </span>
      <span className="check">
        <input type="checkbox" />
        <label htmlFor="">Piscina</label>
      </span>
      <span className="check">
        <input type="checkbox" />
        <label htmlFor="">Segurança</label>
      </span>
    </span>

    <Link href={`/listagem?cod=${field.cod}&type=${field.type}&city=${field.city}&district=${field.district}&minPrice=${field.minPrice}&maxPrice=${field.maxPrice}&bedroom=${field.bedroom}&beth=${field.beth}&vacancy=${field.vacancy}`}>
      <input className="button" type="submit" value="Buscar"/>
    </Link>
    </>
  )
}




  const { property, setProperty } = useProperty()

  const setCity:any = new Set()
  const setDistrict:any = new Set()

  property.map((e:any) => {
    setCity.add(e.city)
  })
  
  property.map((e:any) => {
    setDistrict.add(e.district)
  })
  
  const city = [...setCity]
  const district = [...setDistrict]

  // console.log('district', district)

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
            <Form2>
              {form(city, district)}
            </Form2>
          </div>
        </Main>
      )

 } else{
   
    return (
      <Form1>
        {form(city, district)} 
      </Form1>
    )

 }
}