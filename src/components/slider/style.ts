import styled from 'styled-components'

export const Main = styled.div`
    height: 110vh;
    width: 98.7vw;
    overflow-y: hidden;

`

export const Carrossel = styled.div<{ i:number, current:number }>`
    transition: all 1s linear;
    position: absolute;
     &:nth-child(${({i}) => i}) {
        opacity: ${({i, current}) => i == current ? 1 : 0};
        z-index: ${({i, current}) => i == current ? 1 : -1};     
    }

    .nav {
        align-items: flex-start;
        position: absolute;
        z-index: 1;
        top: 200px;
        left:60px;
        
        &,* {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-weight: 400;
            div { background-color: #fff; } 
        }

        &>div {
            width: 500px;
            height: 280px;
            align-items: flex-start;
            padding: 20px 30px;
        }

        .button {
            flex-direction: row;
            svg {
                width: 50px;
                height: 50px;
                padding: 12px;
                background-color: #fff;
                *{ color:${ ({theme}) => theme.color.primary }; }
                
                &:hover {
                    background-color: ${ ({theme}) => theme.color.primary };
                    *{color: #fff;}
                }
            }
            &>svg:nth-child(2) {
                transform: rotate(180deg);
            }
        }

        .name {
            align-items: flex-start;
            a {
                font-size: 40px;
                color: ${ ({theme}) => theme.fontColor.title };
                font-family: ${ ({theme}) => theme.fontFamily.title };
            }
            p {
                font-size: 19px;
                flex-direction: row;
                svg *{
                    margin-bottom: 3px;
                    color: ${ ({theme}) => theme.color.primary }; 
                }
            }
        }

        .details {
            width: 100%;
            flex-direction: row;

            &>div {
                display: grid;
                grid-template-areas:
                    'icon number'
                    'icon descri';

                svg { 
                    grid-area: icon;
                    font-size: 40px;
                    margin-right:10px;
                    *{ color: ${ ({theme}) => theme.color.primary }; }
                }
                p {
                    align-items: flex-start;
                    &:nth-child(1) { grid-area: descri; }
                    &:nth-child(2) { grid-area: number; }
                }

            }
        }

        .type {
            width: 100%;
            flex-direction: row;

            p:nth-child(1) {
                color: #fff;
                width: 100px;
                padding: 5px 0;
                text-align: center;
                background-color: ${ ({theme}) => theme.color.primary };

            }
            p:nth-child(2) {
                font-size: 35px;
                color: ${ ({theme}) => theme.fontColor.title };
                font-family: ${ ({theme}) => theme.fontFamily.title };

            }
        }
    }
`
