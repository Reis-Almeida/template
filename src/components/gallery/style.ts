import styled, { keyframes} from 'styled-components'

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