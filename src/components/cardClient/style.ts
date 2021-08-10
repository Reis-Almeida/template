import styled, { css } from 'styled-components'

export const Card = styled.div`
    margin-top: 100px;
    margin-bottom: 30px;
    background-color: #fff;
    width: 370px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: visible;
    padding: 0 30px 30px 30px;
    box-shadow: 0 0 40px rgb(0 0 0 / 10%);

    &:hover { box-shadow: 0 0 40px rgb(0 0 0 / 20%); }

    h3 {
        margin: 10px 0; 
        color: ${ ({theme}) => theme.fontColor.title };
    }

    h4 {
        font-weight: bold; 
        margin-bottom: 10px;
        color: ${ ({theme}) => theme.color.primary }; 
    }

    svg *{
        color: ${ ({theme}) => theme.color.primary };
    }

    &> span {
            position: relative;
            margin-top: -60px;
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }


    &> article {
        overflow: hidden;
        color: ${ ({theme}) => theme.fontColor.bigTitle };
        text-align: center;
        height: 130px;
    }
    
    &> div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        &> span {
            display: flex;
            flex-direction: row;
        }

    }

    @media(max-width:1270px) and (min-width: 860px) {
            width: 28vw;
            min-width: 265px;
    }

    @media(max-width:810px) and (min-width: 730px) {
            width: 330px;
    }
`