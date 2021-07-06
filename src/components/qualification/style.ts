import styled from 'styled-components'

export const Main = styled.div`
    width: 100vw;
    padding: 0 60px 50px 60px;
    background-color: ${ ({theme}) => theme.color.second };
    /* border: solid 1px #000; */

    * {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
    }

    h1, h5, article {
        color: ${ ({theme}) => theme.fontColor.bigTitle };
    }

    h1 {
        font-size: 40px;
        font-weight: 400;
        font-family: ${ ({theme}) => theme.fontFamily.title };
    }

    & > div:nth-child(1) {
        margin-bottom: 10px;
    }

    & > div:nth-child(2) {
        flex-direction: row;
        justify-content: space-between;

        span { padding: 30px; }

        h3, div { margin-bottom: 10px; }

        div {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            border: solid 8px #fff;

            svg, svg * {
                font-size: 40px;
                color: ${ ({theme}) => theme.color.primary };
            }
        }
    }


`

