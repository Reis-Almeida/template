import { useState } from "react";
import Icon from "../../shared/icons";
import { StyledCalculator, StyledResult } from "./style";

export default function Calculator({price}: {price: string}) {
    const [downPayment, setDownPayment] = useState<string>('')
    const [years, setYears] = useState<string>('')
    const [result, setResult] = useState<number>(0)

    function calculate() {
        const cal = parseInt(price) - parseInt(downPayment)
        const month = parseInt(years) * 12
       setResult((cal / month) + (cal / month) * 0.13)
    }

    return (
        <>
            <StyledCalculator>
                <span>
                    <input type="number" value={price} readOnly/>
                    <Icon.money/>
                </span>
                <span>
                    <input type="number" placeholder="Entrada" value={downPayment} max={price} onChange={(e) => setDownPayment(e.target.value)} />
                    <Icon.money/>
                </span>
                <span>
                    <input type="number" placeholder="Pagar em quantos anos" value={years} onChange={(e) => setYears(e.target.value)} />
                    <Icon.calendar/>
                </span>
                <button type="button" onClick={() => calculate()}>Calcular</button>
            </StyledCalculator>
            <StyledResult show={!(result == 0)}>
                <h3>Pagamento mensal:</h3>
                <p>{`R$${result},00`}</p>
            </StyledResult>
        </>
    )
}