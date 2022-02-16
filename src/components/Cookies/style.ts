import styled from "styled-components";

export const StyledCookies = styled.div`
    padding: 15px 30px;
    background-color: rgba(72, 72, 72, 0.90);
    position: fixed;
    bottom: 50px;
    left: 20%;
    width: 60vw;
    min-width: 300px;
    z-index: 9999;
    text-align: center;

    h1 {
        color: #f0f0f0;
        font-family: ${ ({theme}) => theme.fontFamily.title };
    }

    article {
        margin-bottom: 15px;
        color: #f0f0f0;
    }

    button {
        color: #f0f0f0;
        border: none;
        cursor: pointer;
        padding: 14px;
        font-size: 14px;
        border-radius: 10px;
        background-color: ${ ({theme}) => theme.color.primary };
    }
`