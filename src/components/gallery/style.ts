import styled, { keyframes} from 'styled-components'

export const Main = styled.div`
    width: 100vw;
    padding: 50px 60px;
    /* * { border: solid 1px #000; } */
    &>span {
        display: flex;
        flex-direction: column;
        width: 850px;
        padding-bottom: 10px;
        background-color: #f7f7f7;
        background: linear-gradient(to top, #f1f1f1 0%, #ffffff);

         h1, svg * {
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }

        div {
            display: flex;
            flex-direction: row;
            width: 100%;
        }
        article {
            display: flex;
            flex-direction: row;
        }

        .type {
            justify-content: space-between;
            margin-bottom: 40px;
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

        .details {
            justify-content: flex-start;

            span {
                margin-left: 30px;
            }

            svg {
                font-size: 2rem;
                margin-right: 20px;
                margin-bottom: 10px;
            }

            p {
                display: flex;
                flex-direction: row;
                justify-content: center;
                text-align: center;
            }
        }
    }

    .general {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 50px;
        width: 850px;

        span {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        hr {
            width: 150px;
            height: 2px;
            margin: 15px 0;
            background-color: ${ ({theme}) => theme.color.primary};
            border: none;

            &:last-child {
                width: 700px;
                background-color: ${ ({theme}) => theme.color.second};

            }
        }

        article {
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }

        .specification {
            height: 340px;
            width: 850px;
            flex-direction: column;
            flex-wrap: wrap;
            background-color: ${ ({theme}) => theme.color.second};
            border: solid 1px #ddd;
            padding-top: 10px;

            div {
                width: 400px;
                height: 50px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 0 12px;
                border-bottom: dotted 1px ${ ({theme}) => theme.fontColor.bigTitle };
            }

            p {
                color: ${ ({theme}) => theme.fontColor.bigTitle };
            }

            
        }
    }

`

export const Carrossel = styled.div<{ direction:boolean }>`
    display: flex;
    *{ overflow-y: hidden; }

    &>span:first-child {
        width: 850px;
        height: 600px;
        display: flex;
        flex-direction: row;
        /* border: solid 1px red; */

        &>div:nth-child(1) {
            margin-left: -850px;
            /* width: 2px; */

        }
        &>div:nth-child(3) {
            margin-right: -850px;
        }
    }

    &>span:last-child {
        /* *{border: solid 1px #000;} */
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 850px;
        height: 600px;
        padding: 30px;

        &>div {
            width: 100%;
        }

        &>div:nth-child(1) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            svg {
                cursor: pointer;
                border-radius: 100%;
                padding: 5px 6px 5px 4px;
                font-size: 3rem;
                background-color: rgb(255, 255, 255, 0.55);
                * {color:#82b440; }
                
                &:nth-child(2) {
                    transform: rotate(180deg);
                }

                &:hover {
                    background-color: rgb(255, 255, 255, 1);
                }
            }
        }

        &>div:nth-child(2) {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 150px;

            button {
                margin: 0 5px;
                height: 80px;
                cursor: pointer;
                border: solid 2px #fff;
            }

            .selected {
                border: solid 2px #82b440;
            }
        }
    }


`