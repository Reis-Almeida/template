import styled from 'styled-components'

export const Main = styled.div<{ change:boolean }>`
    padding: 60px;
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
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

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
    }

    ul {
        display: flex;
        flex-direction: row;

        .color {
            background-color: ${({ theme }) => theme.color.primary};
            color: #fff;
        }

        button {
            padding: 5px;
            margin: 0 5px;
        }
    }
`

export const List = styled.div<{ change:boolean }>`
    padding-top: 50px;
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: ${({change}) => change ? 'column' : 'row' };
`

export const ListMain = styled.div`
    padding: 50px 60px 60px 60px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`
export const Div = styled.div`
    padding: 50px 0 0 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    h5, h1 {
        color: ${ ({theme}) => theme.fontColor.bigTitle };
        }
    h1 {
        font-size: 40px;
        font-family: ${ ({theme}) => theme.fontFamily.title };
    }
`



const Card = styled.div`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    box-shadow: 0 0 40px rgb(0 0 0 / 10%);

    &>div { display: flex; }
    &:hover { box-shadow: 0 0 40px rgb(0 0 0 / 20%); }

    .img {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        align-content: space-between;
        justify-content: space-between;   
    }

    p { color: #fff; }

    .price {
        padding: 5px 15px;
        border-bottom-left-radius: 20px;
        background-color: rgba(132, 132, 132, 0.66);
    }

    .featured {
        padding: 8px;
        background-color: ${ ({theme}) => theme.color.featured };
    }

    .type {
        display: flex;
        flex-direction: row;
        margin-top: 7px;

        div {
            margin: -14px;
            position: absolute;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-right: 14px solid rgba(216, 36, 96, 0.6);
        }

        p {
            font-size: .9rem;
            padding: 5px 5px 5px 0;
            background-color: rgba(216, 36, 96, 0.6);
        }
    }

    .desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px 20px 20px;
        justify-content: space-between;
    }

    h2 { color: ${ ({theme}) => theme.color.primary }; }

    h4 {
        color: ${ ({theme}) => theme.fontColor.title };
        margin: 5px 0;
    }

    article {
        height: 70px;
        color: ${ ({theme}) => theme.fontColor.bigTitle };
    }

    .details {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        P {
            display: flex;
            text-align: center;
            align-items: flex-start;
            justify-content: center;
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }

    }

    svg { margin-right: 2px; }
    .I { margin-top: 2px; }

    button {
        border: none;
        outline: none;
        cursor: pointer;
        padding: 9px 10px;
        border-radius: 5px;
        background-color: ${ ({theme}) => theme.fontColor.title };

        &:hover { background-color:${ ({theme}) => theme.color.primary }; }
    }

`


export const Card1 = styled(Card)`

    .img {   
        width: 370px;
        height: 250px;
    }

    .none { margin-right: 230px; }

    hr { width: 100%; }

    article { height: 90px; }

    .desc {
        width: 370px;
        height: 300px;
    }
`


export const Card2 = styled(Card)<{ change:boolean, featured:boolean }>`
    flex-direction: ${({change}) => change ? 'row' : 'column'};

    .img {   
        width: ${({change}) => change ? '400px' : '280px'};
        height: ${({change}) => change ? '280px' : '180px'};
    }

    .featured { opacity: ${({featured}) => featured ? 1 : 0 }; }

    .none { margin-right: ${({change}) => change ? '250px' : '150px'}; } 

    .E { display: ${({change}) => change ? 'block' : 'none'}; } 

    /* h4 { font-size: ${({change}) => change ? '1rem' : '.9rem'}; }  */
    
    h2 { font-size: ${({change}) => change ? '1.5rem' : '1.2rem'}; } 

    .desc {
        width: ${({change}) => change ? '470px' : '280px'};
        height: ${({change}) => change ? '280px' : '200px'};

    }

    hr { width: ${({change}) => change ? '100%' : '240px'}; }

    article {
        color: ${ ({theme}) => theme.fontColor.bigTitle };
        display: ${({change}) => change ? 'block' : 'none'};
    }

    .details p { font-size: ${({change}) => change ? '1rem' : '.9rem'}; }
`