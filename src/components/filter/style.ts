import styled from 'styled-components'

export const Main = styled.div<{ n:number }>`
    height: 30vh;
    width: 100vw;
    background-color: ${ ({theme}) => theme.color.second };
    
    & > div {
        display: flex;
        overflow: visible;
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        margin: -100px 60px 0 60px;
        box-shadow: 0 0 50px rgb(0 0 0 / 20%);
    }

    .type {
        display: flex;
        flex-direction: row;

        div {
            position: absolute;
            width: 100px;
            color: #fff;
            font-size: 1.2rem;
            padding: 10px 0;
            margin-top: -45px;
            text-align: center;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: ${ ({theme}) => theme.color.primary };

            &:nth-child(${({n}) => n}) {
                color: currentcolor;
                background-color: #fff;

            }

            &:nth-child(2) {
                margin-left: 103px;
            }

            &:hover {
                padding: 8px 0;
                border: solid 2px #fff;
            }
        }
    }

    @media(max-width:930px) {
        height: 60vh;
    }

    @media(max-width:700px) {
        height: auto;
        padding: 100px 0 60px 0;
        & > div {
            position: relative;
            margin-top: 0;
        }
    }
`

const Form = styled.form.attrs(props => ({ action:"/listagem", method:"get", target:'_top' }))`

    &, * {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h2 {
        align-items: center;
        width: 100%;
    }

    .field { margin: 10px 0; }
       

    select, input {
        width: 18vw;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
        padding: 15px 10px;
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
        cursor: pointer;
        margin-top: 20px;
        align-items: center;
        background-color: ${ ({theme}) => theme.color.primary };
    }
`

export const Form1 = styled(Form)`
    border: solid 1px green;
    
    @media(max-width: 992px) {
        margin-right: 20px;

        select, input {
            width: 32vw;
        }
    }
    @media(max-width: 600px) {
        align-items: center;
        position: fixed;
        width: 100%;
        top: 0;
        background-color: #fff;
        z-index: 1;

        select, input {
            width: 85vw;
        }
        display: none;
    }
`

export const Form2 = styled(Form)`
    flex-wrap: wrap;
    padding: 30px 30px;
    background-color: #fff;
    justify-content: space-around;
    &, * { flex-direction: row; }

    .field {
        flex-direction: column;
        /* margin: 10px 15px; */
    }

    select, input {
        /* width: 60vw; */
       
    }


    .button {
        padding: 14px 0;
        margin-top: 32px;
        font-size: 1.2rem;
        justify-content: center;
    }


    h2,
    .field:nth-child(2),
    .field:nth-child(3),
    .field:nth-child(11) {
        display: none;
    }

    @media(max-width:930px) {
        select, input {
            width: 34vw;
        }
    }

    @media(max-width:645px) {
        select, input {
            width: 60vw;
        }
    }
       
`