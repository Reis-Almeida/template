import Image from 'next/image'
import Icon from 'public/icons'
import { useEffect, useState } from 'react'
import { Carrossel, Main } from './style'

type Params = [
  {
    id: number
    name: string
  }
]

const array = [
  '/images/teste/teste1.jpg',
  '/images/teste/teste2.jpg',
  '/images/teste/teste3.jpg'
]

export default function Gallery() {
  
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
        <h1>The Knightsbridge Ap.</h1>
        <article>
          <p>Venda</p>
          <p>Apartamento</p>
          <p>Acessível</p>
        </article>
        </div>
        <div className="details">
            <span>
              <p><Icon.Square />180</p>
              <p>Pes Quadrado</p>
            </span>
            <span>
              <p><Icon.Room />2</p>
              <p>Sala</p>
            </span>
            <span>
              <p><Icon.Bedroom />2</p>
              <p>Quarto</p>
            </span>
            <span>
              <p><Icon.Bathroom/>1</p>
              <p>Banheiro</p>
            </span>
            <span >
              <p><Icon.Garage />1</p>
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
            <strong>$ 120</strong>
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
            <strong>180</strong>
          </div>
          <div>
            <p>Camas</p>
            <strong>2</strong>
          </div>
          <div>
            <p>Garagem</p>
            <strong>1</strong>
          </div>
          <div>
            <p>Codigo do Imovel</p>
            <strong>VILLA000000</strong>
          </div>
          <div>
            <p>Tipo</p>
            <strong>Apartamento</strong>
          </div>
          <div>
            <p>Contrato</p>
            <strong>Venda</strong>
          </div>
          <div>
            <p>Localização</p>
            <strong>Brasilia-DF/Aguas Claras</strong>
          </div>
          <div>
            <p>Dimensão do Lote</p>
            <strong>20X30X40 ft</strong>
          </div>
          <div>
            <p>Quarto</p>
            <strong>2</strong>
          </div>
          <div>
            <p>Banheiro</p>
            <strong>2</strong>
          </div>
        </span>
      </div>

      <div className="general">
        <h2>Descrição do Imovel</h2>
        <span>
          <hr />
          <hr />
        </span>
        <article>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
        qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. 
        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim 
        placerat facer possim assum.<br/>
        Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. 
        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est 
        etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.<br/>

        Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas 
        humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum 
        clari, fiant sollemnes in futurum.
        </article>
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
