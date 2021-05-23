import styled from 'styled-components'

export const Main = styled.div`
    padding: 60px;
    * { color: ${ ({theme}) => theme.fontColor.bigTitle }; }
    hr {
        width: 100%;
        margin: 20px 0;
    }
`