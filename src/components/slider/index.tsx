import Link from 'next/link'
import Image from 'next/image'
import { Carrossel, Main } from './style'
import Icon from 'public/icons'
import { useState } from 'react'


const array = [
    { 
        src:'/images/teste/teste1.jpg',
        name: 'West Broadway Street',
        end: '215 Greenwich St, New York',
        price: 260,
        type: 'Aluguel',
        square: 170,
        bedroom: 1,
        bathroom: 1
    },
    { 
        src:'/images/teste/teste2.jpg',
        name: 'North Greenwich',
        end: '42 W Broadway, New York',
        price: 200,
        type: 'Venda',
        square: 210,
        bedroom: 2,
        bathroom: 2
    },
    { 
        src:'/images/teste/teste3.jpg',
        name: 'Rue de Rivoli Street',
        end: '215 Greenwich St, New York',
        price: 390,
        type: 'Aluguel',
        square: 150,
        bedroom: 3,
        bathroom: 1
    }
]

export default function Slider() {
    const [current, setCurrent] = useState(1)
    const leng = array.length - 1

    return(

        <Main>
            {array.map((i, e) => (
                <Carrossel i={e + 1} current={current} key={e}>
                    <span className="nav">
                        <span className="button">
                            <Icon.Left onClick={() => setCurrent(current == 1 ? current + leng: current - 1)}/>
                            <Icon.Left onClick={() => setCurrent(current == leng + 1 ? current - leng : current + 1)}/>
                        </span>
                        <div>
                            <span className="name">
                                <a>{i.name}</a>
                                <p><Icon.Map/>{i.end}</p>
                            </span>
                            <div className="details">
                                <div>
                                    <Icon.Square/>
                                    <p>{i.square}</p>
                                    <p>Area</p>
                                </div>
                                <div>
                                    <Icon.Bedroom/>
                                    <p>{i.bedroom}</p>
                                    <p>Quarto</p>
                                </div>
                                <div>
                                    <Icon.Bathroom/>
                                    <p>{i.bathroom}</p>
                                    <p>Banheiro</p>
                                </div>
                            </div>
                            <div className="type">
                                <p>{i.type}</p>
                                <p>${i.price}</p>
                            </div>
                        </div>
                    </span>
                    <Image src={i.src} objectFit='cover' layout="fill" alt="imagem indisponivel"/>
                </Carrossel>
            ))}
        </Main>
    )
}