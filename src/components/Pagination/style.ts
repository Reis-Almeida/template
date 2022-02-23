import styled from 'styled-components'

export const StyledUl= styled.ul`
    display: flex;
    
    button {
        color: #fff;
        border: none;
        padding: 8px;
        margin: 0 5px;
        background-color: ${({ theme }) => theme.color.third};
        border-radius: 5px;
    }

    .color {
        background-color: ${({ theme }) => theme.color.primary};
    }
`