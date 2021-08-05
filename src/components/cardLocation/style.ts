import styled from 'styled-components'

export const Main = styled.div`
    padding: 60px;
    background-color: ${ ({theme}) => theme.color.second };

    * {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        /* border: solid 1px #000; */
    }

    & > span:nth-child(1) {
        h1, h5 {
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }

        h1 {
            font-size: 40px;
            font-weight: 400;
            font-family: ${ ({theme}) => theme.fontFamily.title };
        }
    }

    & > span:nth-child(2) {
        flex-wrap: wrap;
        margin-top: 25px;
        flex-direction: row;
        justify-content: space-between;

        &>div {
            position: relative;
            width: 370px;
            height: 230px;
            margin: 15px 0;
        }

        .img {
            width: 370px;
            height: 230px;
            position: absolute;
            justify-content: flex-end;
            background-color: rgba(0, 0, 0, 0.65);

            &:hover {
                background-image: linear-gradient(to left, #323837ba, rgba(218, 37, 97,0.39), rgba(218, 37, 97,0.59));
            }
        }

        span {
            width: 100%;
            flex-direction: row;
            margin: 60px 0 10px 0;
            padding: 0 15px;
            justify-content: space-between;
        }

        p, h1 { color: #fff; }

        strong, h1 { font-family: ${ ({theme}) => theme.fontFamily.city }; }

        p {
            padding: 8px 20px;
            border-radius: 25px;
            background-color: rgba(0, 0, 0, 0.45);
        }

        svg { margin-right: 3px; }

        strong, svg * {
            font-size: 1.2rem;
            flex-direction: row;
            color: ${ ({theme}) => theme.color.primary };
        }
    }



    @media(max-width:1270px) and (min-width: 860px) {
        & > span:nth-child(2) {
            .img, &>div{ 
                width: 28vw;
                min-width: 265px;
            }

            strong, svg * { font-size: 1rem; }

            p { font-size: .8rem; }

        }
    }

    @media(max-width:810px) and (min-width: 730px) {
        & > span:nth-child(2) {
            .img, &>div{ width: 330px; }

            strong, svg * { font-size: 1rem; }

            p { font-size: .8rem; }

        }
    }

    @media(max-width: 992px) {
        padding: 0 20px;
    }

    @media (max-width:730px) {
        & > span:nth-child(2) {
            justify-content: space-around;
        }
    }
`

