import styled from 'styled-components'

export const StyledList = styled.div<{ change:boolean }>`
    display: flex;
    padding: 60px;
    padding-left: 0;
    align-items: flex-start;
    justify-content: space-between;

    .noResults { width: 10%; border: solid 1px #000 }

    &>span {
        display: flex;
        flex-direction: column;
    }

    
    .order {
        width: 100%;
        padding: 0 60px;
        align-items: flex-start;
        justify-content: space-between;

        &, &>span:nth-child(2){ display: flex; }

        button {
            color: #fff;
            border: none;
            display: none;
            padding: 10px;
            cursor: pointer;
            font-size: 1rem;
            margin: 0 0 10px 20px;
            background-color: ${ ({theme}) => theme.color.primary };
        }

        select {
            border: none;
            outline: none;
            padding: 6px 4px;
            font-size: 1.0rem;
            margin-bottom: 10px;
            background-color: ${ ({theme}) => theme.color.second };
        }

        label { margin: 0 5px 0 15px; }

        svg {
            padding: 10px;
            cursor: pointer;
            font-size: 2.4rem;
            border-radius: 5px;
            border: solid 1px #cccccc;


            &:nth-child(1) {
                margin-right: 5px;
                color: ${({change, theme}) => change ? theme.fontColor.default : '#fff' };
                background-color: ${({change, theme}) => change ? '#fff' : theme.color.primary};
            }
            
            &:nth-child(2) {
                color: ${({change, theme}) => change ? '#fff' : theme.fontColor.default};
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
    
    .results {
        width: 100%;
        padding: 0 60px;
        margin-top: 15px;

        h3 {
            text-align: left;
            color: ${ ({theme}) => theme.color.primary };
        }

        hr {
            border: none;
            height: 2px;
            background-color: ${ ({theme}) => theme.color.primary };
        }

    }

    @media(min-width: 1318px) {
        width: 1295px;
        
        .groupCard {
            width: auto;
            max-width: 940px;
        }
    }


    @media(max-width: 992px) {
        padding: 60px 0;

        .results {
            padding: 0 20px;
        }

        .order {
            padding: 0;

            svg { display: none; }

            label { margin: 0 5px 0 0; }

            &>span:nth-child(2){
                width: 60vw;
                padding-left: 20px;
                justify-content: space-between;
            }

        }

        .groupCard {
            padding: 20px;
            flex-direction: row;
            justify-content: space-around;
        }
    }

    @media(max-width: 1075px) {
        .results, .order, .groupCard {
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
            
            &>span:nth-child(2){ 
                width: 100%;
                padding-left: 20px;
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