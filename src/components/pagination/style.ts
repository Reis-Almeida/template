import styled from 'styled-components'

export const StyledUl= styled.ul`
        display: flex;

        .color {
            border-color: ${({ theme }) => theme.color.primary};
            background-color: ${({ theme }) => theme.color.primary};
            color: #fff;
        }

        button {
            padding: 5px;
            margin: 0 5px;
        }
`