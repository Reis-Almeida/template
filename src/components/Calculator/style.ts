import styled from 'styled-components'

export const StyledCalculator = styled.form`
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        
        svg, input {
            outline: none;
            margin: 10px 0;
            font-size: 1rem;
            padding: 12px 5px;
            border: solid 1px #ddd;
            background-color: ${ ({theme}) => theme.color.second};
        }
        
        input, button { width: 100%; }

        svg {
            padding: 14px 5px;
            font-size: 3rem;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        button {
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            padding: 10px 15px;
            background-color: ${ ({theme}) => theme.color.primary};
        }
`