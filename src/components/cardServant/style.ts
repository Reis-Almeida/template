import styled from 'styled-components'

export const Main = styled.div`
   padding: 60px;

   &, * {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

   &>div {
        margin-bottom: 30px;
        box-shadow: 0 0 40px rgb(0 0 0 / 10%);

        &:hover { box-shadow: 0 0 40px rgb(0 0 0 / 20%); }
    }

    span:nth-child(1) {
        width: 250px;
        flex-direction: column;
    }

   span:nth-child(2) {
        width: 320px;
        height: 250px;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px 20px 20px 20px;

        hr { width: 100%; }

        svg { font-size: 1.2rem; }

        p, hr, svg *{
            align-items: center;
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }

        h2 {
            color: ${ ({theme}) => theme.color.primary };
            font-weight: 400;
        }

        h3 {
            color: ${ ({theme}) => theme.fontColor.title };
        }

        div {
            width: 100%;
            margin-top: 15px;
            justify-content: space-around;

            svg {
                padding: 8px;
                cursor: pointer;
                font-size: 2.5rem;
                border-radius: 100%;
                * { color: ${ ({theme}) => theme.color.primary }; }
                border: solid 2px ${ ({theme}) => theme.color.primary };

                &:hover {
                    * { color: #fff; }
                    background-color: ${ ({theme}) => theme.color.primary };
                }
            }
        }
   }

`

