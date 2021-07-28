import styled, { css } from 'styled-components'

export const cardFeatured = css`
    .img {   
        width: 370px;
        height: 230px;
    }

    .none { margin-right: 220px; }

    article { height: 90px; }
    h4 { padding-top: 10px; }

    .desc {
        width: 370px;
        height: 320px;
    }

`

export const cardNormal = css<{ change:boolean, featured:string }>`
flex-direction: ${({change}) => change ? 'row' : 'column'};

.img {   
    width: ${({change}) => change ? '420px' : '270px'};
    height: ${({change}) => change ? '280px' : '170px'};
}

.featured { opacity: ${({featured}) => featured == '2' ? 1 : 0 }; }

.none { margin-right: ${({change}) => change ? '270px' : '130px'}; } 

.E { display: ${({change}) => change ? 'block' : 'none'}; } 

h2 { font-size: ${({change}) => change ? '1.5rem' : '1.2rem'}; } 

.desc {
    width: ${({change}) => change ? '450px' : '270px'};
    height: ${({change}) => change ? '280px' : '200px'};

}

article {
    color: ${ ({theme}) => theme.fontColor.bigTitle };
    display: ${({change}) => change ? 'block' : 'none'};
}

.details p { font-size: ${({change}) => change ? '1rem' : '.9rem'}; }
`



export const Main = styled.div<{ change:boolean }>`
    /* height: 200vh; */
    padding: 30px 60px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({change}) => change ? 'column' : 'row' };
    align-items: flex-start;
    justify-content: ${({change}) => change ? 'flex-start' : 'space-between' };

`



export const Card = styled.div<{ change:boolean, featured:string, superFeatured:boolean }>`
    display: flex;
    margin: 15px 0;
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

        p {
            text-align: center;
        }
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

    h2 {
        color: ${ ({theme}) => theme.color.primary };
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 400;
    }

    h4 {
        width: 100%;
        padding-top: 5px;
        border-top: solid 1px #e5e5e5;
        color: ${ ({theme}) => theme.fontColor.title };
    }

    article {
        height: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        /* white-space: nowrap; */
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

    ${ ({ superFeatured }) => superFeatured ? cardFeatured : cardNormal }

`