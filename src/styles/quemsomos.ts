import styled from 'styled-components'

export const StyledMain = styled.div`
    padding: 50px 60px;
    color: ${ ({theme}) => theme.fontColor.bigTitle };

    hr {
        width: 100%;
        margin: 20px 0;
    }
`