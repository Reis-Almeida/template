import styled, { css } from 'styled-components'


const normal = css<{ featured:string }>`
    flex-direction: column;

    &>div:nth-child(1) {   
        width: 270px;
        height: 180px;
    }
    .img {   
        width: 270px;
        height: 180px;
    }

    .E { display: none; } 

    h2 { font-size: 1.2rem; } 

    .desc {
        width: 270px;
        height: 210px;

    }

    article { display: none; }

    .details p { font-size: .9rem; }

    @media (max-width: 880px) and (min-width:730px) {
        &>div:nth-child(1) {   
            width: 28vw;
        }

        .img {   
            width: 28vw;
        }
        .desc {
            width: 28vw;

        }

    }

`


const featured = css`

    &>div:nth-child(1) {   
        width: 370px;
        height: 260px;
    }
    
    .img {   
        width: 370px;
        height: 260px;
    }

    h2 {width: 100%;}

    article { height: 90px; }

    strong { 
        padding-top: 10px;
        font-size: 1.1rem;
     }

    .desc {
        width: 370px;
        height: 320px;
    }

    @media(max-width:1270px) and (min-width: 860px) {
        .img, .desc,
        &>div:nth-child(1){ 
            width: 28vw;
            min-width: 265px;
        }

        .E { display: none; }
    }

    @media(max-width:810px) and (min-width: 730px) {
        .img, .desc,
        &>div:nth-child(1){ 
            width: 330px;
        }

        .E { display: none; }
    }

    
`


const list = css<{ change:boolean, featured:string }>`

    flex-direction: ${({change}) => change ? 'row' : 'column' };

    .img, &>div:nth-child(1) {   
        width: 32vw;
        height: 280px;
        min-width: 300px;
    }

    .desc {
        min-width: 300px;
        width: ${({change}) => change ? '35vw' : '32vw' };
        height: ${({change}) => change ? '280px' : '320px' };

    }
    
    @media (max-width: 992px) and (min-width:600px) {
        flex-direction: column;

        .desc, .img, &>div:nth-child(1) {   
            width: 46vw;
        }
    }

    @media (max-width: 600px) {
        .desc, .img, &>div:nth-child(1) {   
            width: 70vw;
        }
    }

`
//420px

export const Card = styled.div<{ change:boolean, featured:string, card:number }>`
    display: flex;
    margin: 15px 0;
    flex-direction: column;
    box-shadow: 0 0 40px rgb(0 0 0 / 10%);

    &>div { 
        display: flex;
        position: relative; 
    }


    &:hover { box-shadow: 0 0 40px rgb(0 0 0 / 20%); }

    h2 { width: 100%; }

    .img {
        display: flex;
        flex-direction: column;
        position: absolute;
        justify-content: space-between;   
    }

    .img span {
        display: flex;
        width: 100%;
        justify-content: space-between; 
    }

    p { color: #fff; }

    .price {
        padding: 5px 15px;
        border-bottom-left-radius: 20px;
        background-color: rgba(132, 132, 132, 0.66);

        p {
            text-align: center;
        }
    }

    .featured {
        padding: 8px;
        background-color: ${ ({theme}) => theme.color.featured };
    }

    .featured { opacity: ${({featured}) => featured == '2' ? 1 : 0 }; } 

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

    h2 {
        color: ${ ({theme}) => theme.color.primary };
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 400;
    }

    strong {
        width: 100%;
        padding-top: 5px;
        border-top: solid 1px #e5e5e5;
        color: ${ ({theme}) => theme.fontColor.title };
    }

    article {
        height: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
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
        margin-top: 10px;
        padding: 9px 10px;
        border-radius: 5px;
        background-color: ${ ({theme}) => theme.fontColor.title };

        &:hover { background-color:${ ({theme}) => theme.color.primary }; }
    }

    ${ ({ card }) => typeCard(card) }

`


const typeCard = (card:number) => {
    switch(card) {
        case 1:
            return normal

        case 2:
            return featured

        case 3:
            return list
    }
}
