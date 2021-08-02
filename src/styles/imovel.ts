import styled from 'styled-components'

export const Main = styled.div`
    width: 100vw;
    display: flex;
    padding: 60px;
    align-items: flex-start;
    /* flex-wrap: wrap; */
    justify-content: space-between;

    .mare {
        /* border: solid 1px red; */
        margin-left: 20px;
    }

    .main { 
        width: 65vw;
        display: flex;
        flex-direction: column;
        /* border: solid 1px red;  */
    }


    p, h1, 
    svg *,
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

        span { display: flex; }

        hr {
            height: 2px;
            width: 15vw;
            border: none;
            margin: 20px 0;
            background-color: ${ ({theme}) => theme.color.primary};

            &:last-child {
                width: 50vw;
                background-color: ${ ({theme}) => theme.color.second};

            }
        }
    }

    .location {
        height: 140px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-content: space-between;
        justify-content: space-between;

        span {
            width: 32vw;
            display: flex;
            border: solid 1px #ddd;

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
            width: 30vw;
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
            padding: 5px;
            font-size: 1.3rem;
            * { color: #fff; };
            background-color: ${ ({theme}) => theme.color.primary };
        }


        .empty {
            font-size: 2rem;
            color: ${ ({theme}) => theme.color.primary };
        }

        
    }

    form {
        display: flex;
        flex-direction: column;
        
        span {
            display: flex;
            justify-content: center;
        }
        
        svg, input {
            margin: 10px 0;
            outline: none;
            padding: 12px 5px;
            font-size: 1rem;
            border: solid 1px #ddd;
            background-color: ${ ({theme}) => theme.color.second};
        }
        
        input { width: 100%; }

        svg {
            padding: 14px 5px;
            font-size: 3rem;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        button {
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            padding: 10px 15px;
            background-color: ${ ({theme}) => theme.color.primary};
        }

    }
`
