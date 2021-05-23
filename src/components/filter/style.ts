import styled from 'styled-components'

export const Main = styled.div<{ n:number }>`
    height: 30vh;
    width: 100vw;
    background-color: ${ ({theme}) => theme.color.second };
    /* border: solid 1px #000; */

    & > div {
        z-index: 1;
        display: flex;
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        margin: -130px 140px 0 60px;
        box-shadow: 0 0 50px rgb(0 0 0 / 20%);
    }

    .type {
        display: flex;
        flex-direction: row;

        div {
            width: 100px;
            color: #fff;
            font-size: 1.2rem;
            padding: 10px 0;
            margin-right: 3px;
            text-align: center;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: ${ ({theme}) => theme.color.primary };

            &:nth-child(${({n}) => n}) {
                color: currentcolor;
                background-color: #fff;

            }

            &:hover {
                padding: 8px 0;
                border: solid 2px #fff;
            }
        }
    }
`

const Form = styled.form.attrs(props => ({ action:"/listagem", method:"get", target:'_top' }))`

    &, * {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h2 { margin-left:35px; }

    .field { margin: 10px 0; }
       

    select, input {
        width: 220px;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
        padding: 10px 10px;
        background-color: ${ ({theme}) => theme.color.second };
    }


    .check {
        flex-direction: row;
        input {
            width: 17px;
            height: 17px;
            margin-right: 10px;
        }
    }

    .button {
        color: #fff;
        margin-top: 20px;
        align-items: center;
        background-color: ${ ({theme}) => theme.color.primary };
    }
`

export const Form1 = styled(Form)`
       
`

export const Form2 = styled(Form)`
    flex-wrap: wrap;
    padding: 20px 40px;
    background-color: #fff;

    &, * { flex-direction: row; }

    select,
    input { padding: 15px 10px; }

    .field {
        flex-direction: column;
        margin: 10px 15px;
    }

    .button {
        padding: 14px 0;
        margin: 32px 0 0 15px;
        font-size: 1.2rem;
        justify-content: center;
    }


    h2,
    .field:nth-child(2),
    .field:nth-child(3),
    .field:nth-child(11) {
        display: none;
    }
       
`