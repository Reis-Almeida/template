import styled from 'styled-components'

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
    /* height: 200vh; */
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