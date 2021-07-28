import styled from 'styled-components'

export const Main = styled.div`
    padding: 60px;
    flex-direction: row;

    &, * {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media(max-width: 1275px) {
        justify-content: space-around;
    }
`
