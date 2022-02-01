import styled from 'styled-components'

export const StyledMain = styled.main`
    .title {
        width: 100vw;
        display: flex;
        text-align: center;
        padding-top: 30px;
        align-items: center;
        flex-direction: column;

        h5, h1 {
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }
        h1 {
            font-size: 40px;
            font-weight: 400;
            font-family: ${ ({theme}) => theme.fontFamily.title };
        }
    }
    .groupCard {
        padding: 60px;
        padding-top: 30px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        @media(max-width: 992px) {
            padding: 0 10px;
        }

        @media (max-width:730px) {
            justify-content: space-around;
        }
    }

    .gray {
        background-color: ${ ({theme}) => theme.color.second };
    }

`

