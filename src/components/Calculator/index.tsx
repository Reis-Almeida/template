import Icon from "../../shared/icons";
import { StyledCalculator } from "./style";

export default function Calculator() {
    return (
        <StyledCalculator>
            <span>
                <input type="number" />
                <Icon.money/>
            </span>
            <span>
                <input type="number" />
                <Icon.money/>
            </span>
            <span>
                <input type="number" />
                <Icon.calendar/>
            </span>
            <button>Calcular</button>
        </StyledCalculator>
    )
}