import { StyledUl } from "./style"

type PaginationProps = {
    first: number
    items: number
    count: number
    page: number
    setCount: (number: number) => void
}

export default function Pagination(props: PaginationProps) {

    function alterPages(valor:number) {
        if(valor > props.count) {
            props.setCount(props.count  + (valor - props.count))
        }else {
            props.setCount(props.count  - (props.count - valor))
        }
    }

    return (
        <StyledUl>
            <li>
                <button onClick={() => props.setCount(props.count  - 1)}  className="color" disabled={props.count === 1}>
                    Anterior
                </button>
            </li>
            { Array.from({ length: Math.min(props.items, props.page)})
                .map((_, index)=> index + props.first)
                .map((page) => (
                    <li key={page}>
                        <button onClick={ () => alterPages(page) } className={props.count === page? "color" : " "} disabled={props.count === page}>
                            {page}
                        </button>
                    </li>
            ))}
            <li>
                <button onClick={() => props.setCount(props.count  + 1)} className="color" disabled={props.count === props.page}>
                    Proximo
                </button>
            </li>
        </StyledUl>
    )
}