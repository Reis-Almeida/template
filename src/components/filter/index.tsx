import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Form1, Form2, Main } from './style'

function form() {
  return (
    <>
    <h2>Filtrar Imovel</h2>
    <span className="field">
      <label htmlFor="">Código do Imovel</label>
      <input type="text" />
    </span>
    <span className="field">
      <label htmlFor="">Tipo</label>
      <select>
        <option value="0">Todos</option>
        <option value="0">Venda</option>
        <option value="1">Aluguel</option>
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Cidade</label>
      <select>
        <option value="0">Brasilia</option>
        <option value="1">Aguas Claras</option>
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Bairro</label>
      <select>
        <option value="0">Brasilia</option>
        <option value="1">Aguas Claras</option>
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Valor Minimo</label>
      <input type="number" />
    </span>
    <span className="field">
      <label htmlFor="">Valor Maximo</label>
      <input type="number" />
    </span>
    <span className="field">
      <label htmlFor="">Quartos</label>
      <select>
        <option value="0">0+</option>
        <option value="0">1+</option>
        <option value="1">2+</option>
        <option value="1">3+</option>
        <option value="1">4+</option>
        <option value="1">5+</option>
        <option value="1">6+</option>
        <option value="1">7+</option>
        <option value="1">8+</option>
        <option value="1">9+</option>
        <option value="1">10+</option>
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Banheiro</label>
      <select>
        <option value="0">0+</option>
        <option value="0">1+</option>
        <option value="1">2+</option>
        <option value="1">3+</option>
        <option value="1">4+</option>
        <option value="1">5+</option>
        <option value="1">6+</option>
        <option value="1">7+</option>
        <option value="1">8+</option>
        <option value="1">9+</option>
        <option value="1">10+</option>
      </select>
    </span>
    <span className="field">
      <label htmlFor="">Vagas</label>
      <select>
        <option value="0">0+</option>
        <option value="0">1+</option>
        <option value="1">2+</option>
        <option value="1">3+</option>
        <option value="1">4+</option>
        <option value="1">5+</option>
        <option value="1">6+</option>
        <option value="1">7+</option>
        <option value="1">8+</option>
        <option value="1">9+</option>
        <option value="1">10+</option>
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
    <Link href={'/listagem'}>
      <input className="button" type="submit" value="Buscar"/>
    </Link>
    </>
  )
}

export default function Filter() {

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
              {form()}
            </Form2>
          </div>
        </Main>
      )

 } else{
   
    return (
      <Form1>
        {form()} 
      </Form1>
    )

 }
}