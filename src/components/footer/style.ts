import styled from 'styled-components'

export const BaseBoard = styled.footer`
    bottom: 0;
    width: 100vw;
    height: 60vh;
    padding: 0 60px;
    background-color: ${ ({theme}) => theme.color.second };

    .item0 { grid-area: item0; }
    .item1 { grid-area: item1; }
    .item2 { grid-area: item2; }
    .item3 { grid-area: item3; }
    .item4 { grid-area: item4; }

    display: grid;
    grid-template-areas:
    'item0 item0 item0 item0 item0'
    'item1 item2 item3 item3 item3'
    'item1 item2 item3 item3 item3'
    'item4 item4 item4 item4 item4';
    grid-template-columns: 3fr 2fr 3fr;
    grid-template-rows: auto 3fr auto;

   .item1,.item2, .item3 {
       height: 215px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-between;
   }

   .item0 {
       margin: 50px 0 15px 0;
       font-size: 2.5rem;
       font-weight: 800;
       color: ${ ({theme}) => theme.color.primary };
   }

   .item1 {
       padding-right: 30px;
   }

   .item2 {
       padding: 0 25px;
       a {font-size: .9rem;}

       a>* {
            font-size: 1.1rem;
            margin-bottom: -3px;
       }
   }
  

   .item3 {
        padding-left: 30px;
        a>* {
            border: solid 1px ${ ({theme}) => theme.color.primary };
            border-radius: 25px 25px;
            padding: 8px;
            font-size: 2.3rem;
            margin-right: 20px;

            &:hover {
                background-color: ${ ({theme}) => theme.color.primary };
                *{color:#fff;}
            }
        }
   }

   input {
        border: none;
        height: 50px;
        outline: none;
    }

    [type=email] {
        width: 22vw;
        font-size: 1.1rem;
        padding-left: 10px;
        border-radius: 20px 0 0 20px;
    }

    [type=submit] {
        width: 100px;
        font-size: 1.2rem;
        cursor: pointer;
        color: #fff;
        border-radius: 0 20px 20px 0;
        background-color: ${ ({theme}) => theme.color.primary };
    }

   .item4 {
       display: flex;
       flex-direction: row;
       padding: 10px 0;
       margin-top: 20px;
       border-top: solid 1px #DCDCDC;

       p {
           margin-right: 10px;
       }
   }

    @media(max-width:1160px) and (min-width:811px) {
        padding: 0 10px;

        .item2 {
            padding-left: 0;
        }
        .item3 {
            padding: 0;

            a>* {
                margin-right: 1vw;
            }
        }
    }

    @media(max-width:810px) {
        padding: 0 25px 0 10px;
        height: auto;
        position: relative;
        grid-template-areas:
        'item0 item0 item0 item0 item0'
        'item1 item1 item1 item1 item1'
        'item2 item2 item2 item2 item2'
        'item3 item3 item3 item3 item3'
        'item4 item4 item4 item4 item4';

        .item1, .item2 {
            height: auto;
            margin: 0 0 60px 0;
        }
        .item1, .item2, .item3 {
            padding: 0;
                input[type=email] {
                    width: 220px;
                }
        }
       .item4 {
            p {
                font-size: 11px;
                margin-right: 0px;
            }
       }
    }
`