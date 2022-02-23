import styled from 'styled-components'

export const StyledMain = styled.main`   
    width: 100vw;

    &>div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 30px 60px 60px 60px;
    }

    label,
    article,
    h1, h2, p {  color: ${ ({theme}) => theme.fontColor.bigTitle } }

    div:nth-child(1) {
        padding-top: 60px;
        padding-bottom: 0;

        .info {
            height: 250px;
            width: 28vw;
            min-width: 270px;
            display: flex;
            padding-top: 45px;
            align-items: center;
            margin-bottom: 30px;
            flex-direction: column;
            box-shadow: 0 0 40px rgb(0 0 0 / 10%);
        }

        svg {
            font-size: 42px;
            color: ${({ theme }) => theme.color.primary};
        }
        
        h3 {
            color: ${({ theme }) => theme.color.primary};
            font-weight: 800;
            margin: 10px 0;
        }

        p {
            font-size: 18px;
            text-align: center;
            margin-bottom: 5px;
        }

        a svg{
            color: ${({ theme }) => theme.color.primary};
            padding: 6px;
            margin: 0 5px;
            font-size: 35px;
            border-radius: 20px;
            border: solid 2px ${({ theme }) => theme.color.primary};
        }
    }

    div:nth-child(2) {
        align-items: flex-start;

        span:nth-child(1) {
            width: 40vw;
            box-shadow: 0 0 40px rgb(0 0 0 / 10%);
        }

        & > span:nth-child(2) {
            margin-right: 60px;
            width: 35vw;

            h1, article { margin: 30px 0 30px 0; }

            h1 { font-weight: 800; }
        }
    }

    @media(min-width: 1318px) {
        width: 1292px;

        .info {
            max-width: 365px;
        }

        
        div:nth-child(2) {
            
            span:nth-child(1) {
                max-width: 525px;
            }

            span:nth-child(2) {
                margin-right: 0;
            }
        }
    }

    @media(max-width: 930px) {
        div:nth-child(1){
            justify-content: space-around;
            .info {
                width: 40vw;
                min-width: 300px;
            }
        }

        div:nth-child(2) {
            justify-content: space-around;

            span:nth-child(1),
            span:nth-child(2) {
                width: 75vw;

                margin-right: 0;
            }
        }
    }
`


