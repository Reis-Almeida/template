import styled from 'styled-components'

export const StyledForm = styled.form`
    width: 100vw;
    display: flex;
    padding: 60px;
    align-items: flex-start;

    * {
        color: ${({theme}) => theme.fontColor.default}
    }

    h2 { margin-bottom: 20px }

    input, select, textArea {
        width: 100%;
        border: none;
        padding: 10px;
        font-size: 1rem;
        margin: 2px 0 10px 0;
        background-color: ${ ({theme}) => theme.color.second };
    }

    .group {
        width: 100%;
        padding: 30px;
        box-shadow: 0 0 40px rgb(0 0 0 / 10%);

        &:first-child {
            margin-right: 30px;
        }

        &:last-child {
            margin-left: 30px;
        }

    }

    .field, fieldset {
        width: 100%;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .fieldGroup {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .fieldGroup .field:last-child {
        margin-left: 20px;
    }

    .fieldGroup:not(:last-child) .field:last-child {
        width: 200px;
    }

    input[type="button"] {
        color: #fff;
        background-color: ${ ({theme}) => theme.color.primary };
    }

    @media(min-width: 1318px) {
        width: 1200px;
    }

    @media(max-width: 992px) {
        padding: 60px 30px;
    }

    @media(max-width: 860px) {
        flex-wrap: wrap;

        .group:first-child, .group:last-child {
            margin: 0;
        }

        .group:first-child {
            margin-bottom: 60px;
        }
    }
`