import styled from 'styled-components'

export const StyledList = styled.div<{ change:boolean }>`
    display: flex;
    padding: 60px;
    padding-left: 0;
    align-items: flex-start;
    justify-content: space-between;

    &>span {
        display: flex;
        min-height: 250vh;
        flex-direction: column;
    }

    .order {
        width: 100%;
        padding: 0 60px;
        align-items: flex-start;
        justify-content: space-between;

        &, span:nth-child(2){ display: flex; }

        button {
            color: #fff;
            border: none;
            display: none;
            padding: 10px;
            cursor: pointer;
            font-size: 1rem;
            margin: 0 0 10px 20px;
            background-color: #d82460;
        }

        select {
            border: none;
            outline: none;
            padding: 6px 4px;
            font-size: 1.0rem;
            background-color: ${ ({theme}) => theme.color.second };
        }

        label { margin: 0 5px 0 15px; }

        svg {
            padding: 10px;
            font-size: 2.4rem;
            border-radius: 5px;
            border: solid 1px #cccccc;


            &:nth-child(1) {
                margin-right: 5px;
                color: ${({change}) => change ? 'currentcolor' : '#fff' };
                background-color: ${({change, theme}) => change ? '#fff' : theme.color.primary};
            }
            
            &:nth-child(2) {
                color: ${({change}) => change ? '#fff' : 'currentcolor'};
                background-color: ${({change, theme}) => change ? theme.color.primary : '#fff'};
            }
        }
        
    }

    .groupCard {
        width: 76vw;
        display: flex;
        flex-wrap: wrap;
        padding: 30px 60px;
        align-items: flex-start;
        flex-direction: ${({change}) => change ? 'column' : 'row' };
        justify-content: ${({change}) => change ? 'flex-start' : 'space-between' };      
    }



    @media(max-width: 992px) {
        padding: 60px 0;

        .order {
            padding: 0;

            svg { display: none; }

            label { margin: 0 5px 0 0; }

            span:nth-child(2){ 
                width: 60vw;
                justify-content: space-around;
            }

        }

        .groupCard {
            padding: 0 20px;
            flex-direction: row;
            justify-content: space-around;
        }
    }

    @media(max-width: 1075px) {
        .order, .groupCard {
            padding-right: 20px;
        }
    }

    @media(max-width: 992px)  and (min-width:600px) {
        .groupCard { width: 60vw; }
    }

    @media(max-width: 600px) {
        .order {
            flex-direction: column;

            button { display: block; }
            
            span:nth-child(2){ 
                width: 100%;
                padding: 0 20px;
                justify-content: space-between;
            }
        }

        .groupCard { width: 150% }
    }

    @media(max-width: 390px) {
        .order span:nth-child(2) {
            flex-direction: column;
            align-items: flex-start;
        }
    }
`