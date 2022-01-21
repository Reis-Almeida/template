import { useProperty } from "../../context/useProperty"
import { StyledUl } from "./style"

export default function Pagination(props:any) {

    function alterPages(valor:number) {
        if(valor > props.count) {
            props.setCount(props.count  + (valor - props.count))
        }else {
            props.setCount(props.count  - (props.count - valor))
        }
    }

    const { filter } = useProperty()

    return (
        <StyledUl>
            <li>
                <button onClick={() => props.setCount(props.count  - 1)}  className="color" disabled={props.count === 1}>
                    Anterior
                </button>
            </li>
            { Array.from({ length: Math.min(props.itens, props.convertPage(4, filter).length) })
                .map((_, index)=> index + props.first)
                .map((page) => (
                    <li key={page}>
                        <button onClick={ () => alterPages(page) } className={props.count === page? "color" : " "} disabled={props.count === page}>
                            {page}
                        </button>
                    </li>
            ))}
            <li>
                <button onClick={() => props.setCount(props.count  + 1)} className="color" disabled={props.count === props.convertPage(4, filter).length}>
                    Proximo
                </button>
            </li>
        </StyledUl>
    )
}