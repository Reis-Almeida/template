import styled from 'styled-components'

export const StyledMain = styled.main`
    .title {
        width: 100%;
        display: flex;
        padding-top: 30px;
        text-align: center;
        align-items: center;
        flex-direction: column;

        & > h5, & > h1 {
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }
        
        & > h1 {
            font-size: 40px;
            font-weight: 400;
            font-family: ${ ({theme}) => theme.fontFamily.title };
        }
    }

    .groupCard {
        width: 100%;
        padding: 60px;
        padding-top: 30px;
        display: flex;
        flex-wrap: wrap;
        text-align: start;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        @media(min-width: 1318px) {
            max-width: 1290px;
        }

        @media(max-width: 992px) {
            padding: 10px;
        }

        @media (max-width:730px) {
            justify-content: space-around;
        }
    }

    .gray {
        background-color: ${ ({theme}) => theme.color.second };
    }

`

