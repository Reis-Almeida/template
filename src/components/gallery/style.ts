import styled, { css, keyframes} from 'styled-components'

const effect = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0px;
  }
`;

export const StyledCarousel = styled.div<{ direction:boolean, side:number }>`
    display: flex;
    *{ overflow-y: hidden; user-select: none}

    &>span:first-child {
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: ${ ({direction}) => direction ? 'flex-start' : 'flex-end' };

        &>div, img {
            width: 100%;
            height:100%;
        }

        &>div:nth-child(1) {
            margin-left: -100%;
            ${ ({side}) => side === 1 ? css`animation: ${effect} .5s linear;` : false }

        }
        &>div:nth-child(3) {
            margin-right: -100%;
            ${ ({side}) => side === -1 ? css`animation: ${effect} .5s linear;` : false }
        }
    }

    &>span:last-child {
        width: 100%;
        height: 600px;
        display: flex;
        padding: 30px;
        position: absolute;
        flex-direction: column;
        justify-content: flex-end;

        &>div {
            width: 100%;
        }

        &>div:nth-child(1) {
            display: flex;
            justify-content: space-between;

            svg {
                color:#82b440;
                font-size: 3rem;
                cursor: pointer;
                border-radius: 100%;
                padding: 5px 6px 5px 4px;
                background-color: rgb(255, 255, 255, 0.55);
                
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
            margin-top: 150px;
            justify-content: center;

            img {
                width: 100%;
                height:100%
            }

            button {
                margin: 0 5px;
                height: 80px;
                width: 110px;
                cursor: pointer;
                border: solid 2px #fff;
            }

            .selected {
                border: solid 2px #82b440;
            }
        }
    }

    @media(max-width: 1130px) and (min-width: 920px) {
        &>span:first-child,
        &>span:last-child {
            height: 400px;
        }

        &>span:last-child>div:nth-child(2) {
            margin-top: 80px;
        }
    }

    @media(max-width: 700px) {
        &>span:first-child,
        &>span:last-child {
            height: 400px;
        }

        &>span:last-child>div:nth-child(2) {
            margin-top: 80px;
        }
    }

    @media(max-width: 500px) {
        &>span:first-child,
        &>span:last-child {
            height: 260px;
        }

        &>span:last-child>div:nth-child(2) {
            display: none;
        }
        &>span:last-child>div:nth-child(1) {
            margin-bottom: 80px;

            svg {
                padding: 5px 6px 5px 4px;
                font-size: 2rem;
            }
        }
    }


`