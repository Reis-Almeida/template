import styled from 'styled-components'

export const StyledForm = styled.form`    
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-weight: 400;
        margin-bottom: 20px;
    }

    label { }
    span { width: 100% }

    input, textarea, .button {
        width: 100%;
        border: none;
        padding: 10px;
        font-size: 1rem;
        margin: 2px 0 10px 0;
        background-color: ${ ({theme}) => theme.color.second };
    }

    .button {
        color: #fff;
        padding: 10px 15px;
        background-color: ${ ({theme}) => theme.color.primary };
    }
`


