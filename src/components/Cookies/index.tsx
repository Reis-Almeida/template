import Icon from "../../shared/icons";
import { StyledCookies } from "./style";

export default function Cookies({disable}:any) {

    function myCookies() {
        localStorage.setItem("warning-cookies", "aceito")
        disable(true)
    }

    return(
        <StyledCookies>
            <h1><Icon.cookies/> Cookies</h1>
           <article>
            Atendendo às orientações da LGPD informamos 
            que este site não armazena informações pessoais. 
            A utilização de cookies ocorre pelas funções de navegação. 
            A desativação dos cookies pode prejudicar a navegabilidade no site.
           </article>
           <button onClick={() => myCookies()}>Aceito Todos os Cookies</button>
        </StyledCookies>
    )
}