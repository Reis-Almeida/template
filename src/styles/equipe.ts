import styled from 'styled-components'

export const StyledMain = styled.main`
    padding: 60px;

    &, * {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media(min-width: 1318px) {
        width: 1295px;
    }

    @media(max-width: 890px) {
        justify-content: space-around;
    }
`
