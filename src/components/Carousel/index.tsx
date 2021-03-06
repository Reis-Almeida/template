import Link from 'next/link'
import { StyledCarousel, StyledSlider } from './style'
import Icon from '../../shared/icons'
import { useState } from 'react'
import { MyImage } from '../Image'
import website from '../../shared/json/website'

export default function Carousel() {
    const [current, setCurrent] = useState<number>(1)
    const length:number = website.carousel.length - 1

    return(
        <StyledCarousel>
            {website.carousel.map((i, e) => (
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
                    <MyImage src={i.src} className="img" alt="imagem indisponivel"/>
                </StyledSlider>
            ))}
        </StyledCarousel>
    )
}