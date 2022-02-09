import styled from 'styled-components'

export const StyledMain = styled.main`
    width: 100vw;
    display: flex;
    padding: 60px;
    align-items: flex-start;
    justify-content: space-between;

    .mare > div {
        width: 250px;
        margin-bottom: 30px;

        h3 {
            text-align: center;
            margin-bottom: 10px;
            color: ${ ({theme}) => theme.fontColor.title };
        }

        form { 
            padding: 0;
            h2 { display: none;}
        }
    }

    .main { 
        position: relative;
        width: 850px;
        display: flex;
        flex-direction: column;
        /* border: solid 1px red;  */
    }


    p, h1, 
    svg ,
    article {
            display: flex;
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }

    .details {
        width: 100%;
        display: block;
        background: linear-gradient(to top, #f1f1f1 0%, #ffffff);

        div {
            display: flex;
            flex-wrap: wrap;

            span {
                margin: 0 0 15px 30px;
            }

            svg {
                font-size: 2rem;
                margin-right: 20px;
                margin-bottom: 10px;
            }

            p {
                display: flex;
                justify-content: center;
            }
        }

        div:nth-child(1) {
            margin-bottom: 40px;
            justify-content: space-between;
        }

        article p {
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            margin-left: 5px;
            background-color: ${ ({theme}) => theme.fontColor.bigTitle };
            
            &:first-child {
                background-color: ${ ({theme}) => theme.color.primary};
            }
        }
    }

    .title {
        margin-top: 50px;
        width: 100%;
        color: ${ ({theme}) => theme.fontColor.title };

        span { display: flex; }

        hr {
            height: 2px;
            border: none;
            margin: 20px 0;
    
            &:first-child {
                position: absolute;
                width: 200px;
                background-color: ${ ({theme}) => theme.color.primary};

            }
            &:last-child {
                width: 100%;
                background-color: ${ ({theme}) => theme.color.second};

            }
        }
    }

    .location {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        span {
            width: 420px;
            display: flex;
            border: solid 1px #ddd;
            margin-bottom: 10px;

            div:nth-child(1) {
                width: 100px;
                padding: 15px 0;
                text-align: center;
                margin-right: 20px;
                background-color: ${ ({theme}) => theme.color.second};
            }
        }
    }

        

    .fist {
        border: solid 1px #ddd;
        background-color: ${ ({theme}) => theme.color.second};
    }

    .specification {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 15px;

        li {
            width: 400px;
            height: 50px;
            display: flex;
            margin: 0 12px;
            justify-content: space-between;
            border-bottom: dotted 1px ${ ({theme}) => theme.fontColor.bigTitle };
        }

        p svg {
            padding: 0px;
            font-size: 1.2rem;
            margin-right: 5px;
        }

        svg:nth-child(2) {
            color: #fff;
            padding: 5px;
            font-size: 1.3rem;
            background-color: ${ ({theme}) => theme.color.primary };
        }


        .empty {
            font-size: 2rem;
            color: ${ ({theme}) => theme.color.primary };
        }

        
    }

    video {
        width: 100%;
    }

    @media(min-width: 1318px) {
        width: 1295px;
        
        li { max-width: 399px; }
    }

    @media(max-width: 1230px) {
        .specification li,
        .location span {
            width: 100%;
        }
        .main {
            width: 750px;
        }
    }

    @media(max-width: 1130px) {
        .main {
            width: 600px;
        }
    }

    @media(max-width: 992px) {
        padding: 60px 20px;
        width: 98vw;
    }

    @media(max-width: 920px) {
        flex-wrap: wrap;
        .main {
            width: 100%;
        }

        .mare {
            width: 100%;
            margin-top: 60px;

            div {
                width: 100%;
            }
        }
    }

    @media(max-width: 920px) and (min-width: 680px) {
        /* .specification li, */
        .location span {
            width: 46vw;
        }
    }
`
