import styled from 'styled-components'

export const Main = styled.div<{ change:boolean }>`
    padding: 60px;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    &>span {
        height: 250vh;
        display: flex;
        flex-direction: column;
    }

    .order {
        border: solid 1px blue;
        padding: 0 60px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        button {
            border: none;
            font-size: 1rem;
            color: #fff;
            padding: 10px;
            cursor: pointer;
            background-color: #d82460;
            margin: 0 0 10px 20px;
            display: none;
        }

        select {
            padding: 6px 4px;
            font-size: 1.0rem;
            outline: none;
            border: none;
            background-color: ${ ({theme}) => theme.color.second };
        }

        label { margin: 0 5px 0 15px; }

        svg {
            font-size: 2.4rem;
            padding: 10px;
            border: solid 1px #cccccc;
            border-radius: 5px;


            &:nth-child(1) {
                margin-right: 5px;
                background-color: ${({change, theme}) => change ? '#fff' : theme.color.primary};
                * { color: ${({change}) => change ? 'currentcolor' : '#fff' }; }
            }
            &:nth-child(2) {
                background-color: ${({change, theme}) => change ? theme.color.primary : '#fff'};
                * { color: ${({change}) => change ? '#fff' : 'currentcolor'}; }
            }
        }

        span:nth-child(2){ display: flex; }
        
        @media(max-width: 1075px) {
            padding-right: 20px;
        }
        @media(max-width: 992px) {
            label { margin: 0 5px 0 0; }
            span:nth-child(2){ 
                display: flex;
                border: solid 1px red; 
                width: 60vw;
                justify-content: space-around;
            }
            /* width: auto; */
            padding: 0;

            svg { display: none; }
        }
        @media(max-width: 600px) {
            button { display: block; }
            /* align-items: flex-end; */
            flex-direction: column;
            span:nth-child(2){ 
                padding: 0 20px;
                width: 100%;
                justify-content: space-between;
            }
        }
        @media(max-width: 390px) {
            span:nth-child(2){ 
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }

    ul {
        display: flex;
        flex-direction: row;

        .color {
            border-color: ${({ theme }) => theme.color.primary};
            background-color: ${({ theme }) => theme.color.primary};
            color: #fff;
        }

        button {
            padding: 5px;
            margin: 0 5px;
        }
    }

    @media(max-width: 992px) {
        padding: 60px 0;
    }
`

export const Main2 = styled.div<{ change:boolean }>`
border: solid 1px green;
    width: 76vw;
    padding: 30px 60px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({change}) => change ? 'column' : 'row' };
    align-items: flex-start;
    justify-content: ${({change}) => change ? 'flex-start' : 'space-between' };

    @media(max-width: 1075px) {
        padding-right: 20px;
    }
    @media(max-width: 600px) {
        width: 150%;
    }
    @media(max-width: 992px)  and (min-width:600px) {
        width: 60vw;
    }
    @media(max-width: 992px) {
        padding: 0 20px;
        flex-direction: row;
        justify-content: space-around;
    }

`