import styled from 'styled-components'

export const Div = styled.div`
    padding: 50px 0 0 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    h5, h1 {
        color: ${ ({theme}) => theme.fontColor.bigTitle };
        }
    h1 {
        font-size: 40px;
        font-weight: 400;
        font-family: ${ ({theme}) => theme.fontFamily.title };
    }
`
