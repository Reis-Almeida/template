import Link from 'next/link'
import { StyledCarousel, StyledSlider } from './style'
import Icon from '../../shared/icons'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


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

export default function Carousel() {
    const [current, setCurrent] = useState<number>(1)
    const length:number = array.length - 1

    return(
        <StyledCarousel>
            {array.map((i, e) => (
                <StyledSlider element={e + 1} current={current} key={e}>
                    <span className="nav">
                        <div className="button">
                            <Icon.left onClick={() => setCurrent(current == 1 ? (current + length) : (current - 1))}/>
                            <Icon.left onClick={() => setCurrent(current == (length + 1) ? (current - length) : (current + 1))} />
                        </div>
                        <div>
                            <span className="name">
                                <a>{i.name}</a>
                                <p><Icon.map/>{i.end}</p>
                            </span>
                            <span className="details">
                                <div>
                                    <Icon.square/>
                                    <p>{i.square}</p>
                                    <p>Area</p>
                                </div>
                                <div>
                                    <Icon.bedroom/>
                                    <p>{i.bedroom}</p>
                                    <p>Quarto</p>
                                </div>
                                <div>
                                    <Icon.bathroom/>
                                    <p>{i.bathroom}</p>
                                    <p>Banheiro</p>
                                </div>
                            </span>
                            <span className="type">
                                <p>{i.type}</p>
                                <p>{`$${i.price}`}</p>
                            </span>
                        </div>
                    </span>
                    <LazyLoadImage src={i.src} className="img" alt="imagem indisponivel"/>
                </StyledSlider>
            ))}
        </StyledCarousel>
    )
}