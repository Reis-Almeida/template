import styled from 'styled-components'

export const Main = styled.div<{ n:number }>`
    height: 30vh;
    width: 100vw;
    background-color: ${ ({theme}) => theme.color.second };

    & > div {
        max-width: 1192px;
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

        div {
            width: 100px;
            color: #fff;
            padding: 10px 0;
            margin-top: -45px;
            font-size: 1.2rem;
            text-align: center;
            position: absolute;
            user-select: none;
            cursor: pointer;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: ${ ({theme}) => theme.color.primary };

            &:nth-child(${({n}) => n}) {
                color: currentColor;
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

    @media(min-width: 1318px) {
        display: flex;
        justify-content: center;
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
            margin-left: 45px;
        }
    }
`

const Form = styled.form<{ show?:boolean }>`

    &, * {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    svg { display: none; }

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
        flex-direction: row-reverse;
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
    @media(max-width: 992px) {
        margin-right: 20px;

        select, input {
            width: 32vw;
        }
    }
    @media(max-width: 600px) {
        display: ${({show}) => show ? 'current' : 'none'};
        padding: 80px 0 30px 0;
        align-items: center;
        position: absolute;
        width: 100%;
        top: 0;
        background-color: #fff;
        z-index: 1;

        svg {
            display: block;
            font-size: 2rem;
            position: absolute;
            top: 30px;
            right: 40px;
            cursor: pointer;
            color: ${ ({theme}) => theme.color.primary};

        }

        select, input {
            width: 85vw;
        }
    }
`

export const Form2 = styled(Form)`
    &>div {
        flex-wrap: wrap;
        padding: 30px 30px;
        background-color: #fff;
        justify-content: space-around;
    }
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