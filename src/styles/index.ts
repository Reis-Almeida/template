import styled from 'styled-components'

export const StyledMain = styled.main`
    .title {
        width: 100vw;
        display: flex;
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
            padding: 0 20px;
        }

        @media (max-width:730px) {
            justify-content: space-around;
        }
    }

    .gray {
        background-color: ${ ({theme}) => theme.color.second };
    }

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
        font-weight: 400;
        font-family: ${ ({theme}) => theme.fontFamily.title };
    }
`
export const Main = styled.div`
    padding: 30px 60px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media(max-width: 992px) {
        padding: 0 20px;
    }

    @media (max-width:730px) {
        justify-content: space-around;
    }

`

export const Main2 = styled.div`
    /* background-color: #f2f2f2; */
    padding: 0 60px;
    padding-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media(max-width: 992px) {
        padding: 0 20px;
    }

    @media (max-width:730px) {
        justify-content: space-around;
    }

`