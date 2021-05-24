import styled from 'styled-components'

export const Main = styled.main`    
    &>div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        width: 100vw;
        padding: 50px 60px 30px 60px;
    }

    label,
    article,
    h1, h2, p {  color: ${ ({theme}) => theme.fontColor.bigTitle }; }

    div:nth-child(1) {

        &>span {
            width: 350px;
            height: 250px;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 45px 45px 0 45px;
            box-shadow: 0 0 40px rgb(0 0 0 / 10%);
        }

        svg {
            font-size: 42px;
            * {color: ${ ({theme}) => theme.fontColor.bigTitle };}
        }
        
        h3 {
            color: ${({ theme }) => theme.color.primary};
            font-weight: 600;
            margin: 10px 0;
        }

        p {
            font-size: 18px;
            text-align: center;
            margin-bottom: 5px;
        }

        a svg{
            padding: 6px;
            margin: 0 5px;
            font-size: 35px;
            border-radius: 20px;
            border: solid 2px pink;
            * {color: pink}
        }
    }

    div:nth-child(2) {

        form {
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            box-shadow: 0 0 40px rgb(0 0 0 / 10%);
        }
        
        h2 {
            margin-bottom: 20px;
            font-weight: 400;
        }

        input, textarea {
            width: 500px;
            border: none;
            padding: 10px;
            font-size: 1rem;
            margin: 2px 0 10px 0;
            background-color: ${ ({theme}) => theme.color.second };
        }

        .button {
            width: auto;
            color: #fff;
            padding: 10px 15px;
            background-color: ${ ({theme}) => theme.color.primary };
        }

        span {
            margin-right: 60px;
            width: 450px;

            h1, article { margin: 30px 0 20px 0; }

            h1 { font-weight: 800; }
        }
    }
`


