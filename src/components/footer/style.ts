import styled from 'styled-components'

export const StyledFooter = styled.footer`
    bottom: 0;
    width: 100vw;
    padding: 0 60px;
    background-color: ${ ({theme}) => theme.color.second };

    input, h3, p, a { color: ${ ({theme}) => theme.fontColor.default } }

    & > span {
        display: flex;
        justify-content: space-between;
    }

   .item1,.item2, .item3 {
       height: 215px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-between;
   }

   h1 {
       font-weight: 800;
       font-size: 2.5rem;
       margin: 50px 0 15px 0;
       color: ${ ({theme}) => theme.color.primary };
   }

   .item1 {
       width: 30vw;
       padding-right: 15px;
   }

   .item2 {
       width: 25vw;
       min-width: 230px;

       a { font-size: .9rem }

       svg {
            font-size: 1.1rem;
            margin-bottom: -3px;
       }
   }
  

   .item3 {
        min-width: 320px;
        padding-left: 30px;

        svg {
            padding: 8px;
            font-size: 2.4rem;
            margin-right: 20px;
            border-radius: 25px 25px;
            color: ${ ({theme}) => theme.color.primary };
            border: solid 2px ${ ({theme}) => theme.color.primary };

            &:hover {
                color:#fff;
                background-color: ${ ({theme}) => theme.color.primary };
            }
        }

        span {
            width: 95%;
            display: flex;
        }
   }

   input { height: 50px }

    [type=email] {
        width: 22vw;
        font-size: 1.1rem;
        padding-left: 10px;
        border-radius: 20px 0 0 20px;
    }

    [type=submit] {
        color: #fff;
        width: 100px;
        font-size: 1.2rem;
        border-radius: 0 20px 20px 0;
        background-color: ${ ({theme}) => theme.color.primary };
    }

   .allma {
       display: flex;
       margin-top: 20px;
       padding: 10px 30px 10px 0;
       border-top: solid 1px #DCDCDC;

       p { margin-right: 10px }
   }

    @media(min-width: 1318px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > span, h1, .allma {
            width: 1192px;
        }
    }

    @media(max-width:1160px) {
        padding: 0 10px;
    }

    @media(max-width:770px) {
        & > span {
            flex-direction: column;
            align-items: flex-start;
        }

        .item1,.item2, .item3, [type=email] {
           width: 90%;
        }

        .item3 {
            padding: 0;
            margin-top:45px;
        }

       .allma p {
                font-size: 14px;
                margin-right: 0px;
                width: 75vw;
            }
    }
`