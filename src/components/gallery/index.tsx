import Image from 'next/image'
import { useRouter } from 'next/router'
import Icon from 'public/icons'
import { useEffect, useState } from 'react'
import { useProperty } from 'shared/useProperty'
import { Carrossel, Main } from './style'

type Params = [
  {
    id: number
    name: string
  }
]

// const array = [
//   '/images/teste/teste1.jpg',
//   '/images/teste/teste2.jpg',
//   '/images/teste/teste3.jpg'
// ]

export default function Gallery() {

  const { property, setProperty } = useProperty()
  const router = useRouter()
  const { cod } = router.query

  let data:any
  property.filter((a:any) => {
    if(a.cod == cod) {
      data = a
    }
  })

  const array:any = []
   data.src.Foto.filter((a:any) => {
    array.push(a.Link[1].URLArquivo)
  })

  // console.log(k)
  
  const itens: number = 5
  let [direction, SetDirection] = useState(true) // true = left <- , false = right ->
  let [left, SetLeft] = useState(850)
  let [right, SetRight] = useState(850)
  let [count, setCount] = useState<Params>(updateArray(0))
  let first: number = list(array.length, itens, count[0 + 1].id)


  function list(pages: number, itens: number, current:number): number {
    if(pages > itens) {
      const left = (itens -1) / 2
      return current >= pages - left ? pages - (itens - 1) : Math.max(current -  left, 0)
    } else {
      return 0
    }
  }  

  function updateArray(start: number): Params {
    const last: number = array.length - 1
    const first: number = start == -1 ? last : start
    const params: Params = [{ id:array.indexOf(array[first]), name:array[first] }]

    for(let i = 1; i < 3; i++) {
      params.push({
          id:array.indexOf(array[start + i == array.length ? 0 : start + i]),
          name:array[start + i == array.length ? 0 : start + i] 
      })
    }

    return params
  }

  function side() {

    if(direction) {
        const l: number = count[0 + 2].id -1 
        setCount(count = updateArray(l))
        SetLeft(left = 850)
    }else {
        const r: number = count[0].id - 1
        setCount(count = updateArray(r))
        SetRight(right = 850)

    }
  }

  function whichDirection(which: boolean) {

    SetDirection(direction = which)

    var effect = setInterval(
      function() {
        which == true ? SetLeft(left = (left - 30)) :  SetRight(right = (right - 30))
    }, 1)

    setTimeout(()=> {
      clearInterval(effect)
      side()
    }, 300)

  }

  function onlyOne(side: boolean, id:number): Params {
    const params: Params = count
    if(side) {
      params[ 0 + 2] = { id:id, name:array[id] }
    }else {
      params[0] = { id:id, name:array[id] }
    }

    return params
  }

  function imgList(id: number) {
      const current:boolean = id > count[0 + 1].id
      if(current) {
        setCount(count = onlyOne(current, id))
        whichDirection(current)
        
      }else {
        setCount(count = onlyOne(current, id))
        whichDirection(current)
       
      }
  }

  function style1(direction: boolean): object {
    if(direction){
      return { justifyContent: 'flex-start' }
    }else {
      return { justifyContent: 'flex-end' }
    }
  }

  function style2(id: number) {
    switch(id) {
      case 0:
        return { width: `${left}px` }
      case 1:
        return { width: `850px` }
      case 2:
        return { width: `${right}px` }
      
    }
  }

  return (
    <Main>
      <span>
        <div className="type">
        <h1>{data.name}</h1>
        <article>
          <p>{data.business}</p>
          <p>{data.p_type}</p>
          <p>Acessível</p>
        </article>
        </div>
        <div className="details">
            <span>
              <p><Icon.Square />{data.square}</p>
              <p>Pes Quadrado</p>
            </span>
            <span>
              <p><Icon.Room />{data.room || 0}</p>
              <p>Sala</p>
            </span>
            <span>
              <p><Icon.Bedroom />{data.bedroom}</p>
              <p>Quarto</p>
            </span>
            <span>
              <p><Icon.Bathroom/>{data.bath}</p>
              <p>Banheiro</p>
            </span>
            <span >
              <p><Icon.Garage />0</p>
              <p>Garagem</p>
            </span>
        </div>
      </span>
      <Carrossel direction={direction}>
        <span style={style1(direction)}>
          {Array.from({ length: 3 }).map((_,i) => (
            <div key={i} style={style2(i)}>
              <Image src={count[i].name} width={850} height={600} alt="imagem indisponivel"/>
            </div>
          ))}
        </span>
        <span>
          <div>
            <Icon.Left onClick={() =>whichDirection(false)}/>
            <Icon.Left onClick={() =>whichDirection(true)}/>
          </div>
          <div>
          {Array.from({ length: Math.min(itens, array.length) })
            .map((_, index)=> index + first)
            .map((id) => (
              <button key={id} onClick={() =>imgList(id)} className={count[0 + 1].id === id ? 'selected' : ''} disabled={count[0 + 1].id === id}>
                <img src={array[id]}  width={110} height={80} alt="imagem indisponivel"/>
              </button>
          ))}
          </div>
        </span>
      </Carrossel>

      <div className="general">
        <h2>Visão Geral</h2>
        <span>
          <hr />
          <hr />
        </span>
        <span className="specification">
          <div>
            <p>Preço</p>
            <strong>${data.price}</strong>
          </div>
          <div>
            <p>Nome de contato</p>
            <strong>Julia Robets</strong>
          </div>
          <div>
            <p>Ano de construção</p>
            <strong>10 Anos</strong>
          </div>
          <div>
            <p>Área residencial</p>
            <strong>{data.square}</strong>
          </div>
          <div>
            <p>Vagas</p>
            <strong>{data.vacancy}</strong>
          </div>
          <div>
            <p>Garagem</p>
            <strong>1</strong>
          </div>
          <div>
            <p>Codigo do Imovel</p>
            <strong>{data.cod}</strong>
          </div>
          <div>
            <p>Tipo</p>
            <strong>{data.p_type}</strong>
          </div>
          <div>
            <p>Contrato</p>
            <strong>{data.business}</strong>
          </div>
          <div>
            <p>Localização</p>
            <strong>{data.city} / {data.district}</strong>
          </div>
          <div>
            <p>Quarto</p>
            <strong>{data.bedroom}</strong>
          </div>
          <div>
            <p>Banheiro</p>
            <strong>{data.bath}</strong>
          </div>
        </span>
      </div>

      <div className="general">
        <h2>Descrição do Imovel</h2>
        <span>
          <hr />
          <hr />
        </span>
        <article>{data.obs}</article>
      </div>

      <div className="general">
        <h2>Locais Proximos</h2>
        <span>
          <hr />
          <hr />
        </span>
        <span className="specification2">
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
      </div>

      <div className="general">
        <h2>Comodidades do Imóvel</h2>
        <span>
          <hr />
          <hr />
        </span>
        <span className="specification3">
          <div>
            <p><Icon.Room />Mobiliado</p>
            <Icon.Check />
          </div>
          <div>
            <p><Icon.Plant />Jardim</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Maid />QuartoWCEmpregada</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Sauna />Sauna</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Barbecue />Churrasqueira</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.InterPhone />Interfone</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Pool />Piscina</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Park />Playground</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Sport />Quadra PoliEsportiva</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Party />Salão Festas</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Game />Salão Jogos</p>
            <strong>-</strong>
          </div>
          <div>
            <p><Icon.Hot />Hidromassagem</p>
            <strong>-</strong>
          </div>
        </span>
      </div>

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

    </Main>
    )
}
