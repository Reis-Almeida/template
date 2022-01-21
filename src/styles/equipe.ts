import styled from 'styled-components'

export const StyledMain = styled.main`
    padding: 60px;

    &, * {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media(max-width: 890px) {
        justify-content: space-around;
    }
`
