import styled from 'styled-components'

export const StyledHeader = styled.header<{ open:boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .headerInfo {
        height: auto;
        width: 100%;
        padding: 0 60px;
        background-color: ${ ({theme}) => theme.color.main };

        &, * {
            display: flex;
            font-size: 14px;
            color: #fff;
        }

        & > span {
            width: 100%;
            justify-content: space-between;
        }

        div a {
            padding-right: 30px;
        }

        span span a {
        height: 40px;
        padding: 0 10px;

            &:hover {
                background-color: ${ ({theme}) => theme.color.third };
            }
        }

        svg { font-size: 16px }

        @media(min-width: 1318px) {
            padding: 0;
            justify-content: center;

            & > span {
                justify-content: space-between;
                max-width: 1170px;
            }
        }

        @media(max-width: 992px) {
            padding: 0 30px;
        }

        @media(max-width: 800px) {
            padding: 0 20px;
            justify-content: space-around;
        }

        @media(max-width: 640px) {
            height: 40px;
            padding: 0;

            span span { display: none; }

            div a {
                padding: 0;
                margin: 0;
            }
            div {
                width: 100vw;
                padding: 0 20px;
                justify-content: space-between;
            }
                    
        }
    }

    .headerNav {
        height: 70px;
        width: 100%;
        max-width: 1290px;
        padding: 0 60px;

        &, * {
            display: flex;
            font-size: 20px;
            justify-content: space-between;
        }

        span, li > a {
            height: 70px;
            padding: 0 40px;
            user-select: none;
            cursor: pointer;
            color: ${ ({theme}) => theme.fontColor.default };

            &:hover {
                color: #fff;
                background-color: ${ ({theme}) => theme.color.third };
            }
        }

        svg {
            z-index: 1;
            font-size: 40px;
            display: none;
            padding: 2px;
            cursor: pointer;
            
            &:hover {
                color: #fff;
                border-radius: 25%;
                background-color: ${ ({theme}) => theme.color.third };
            }
        }

        @media(max-width: 992px) {
            padding: 0 30px;
        }

        @media(max-width: 890px) {

            svg {display: block;}

            ul {
                position: absolute;
                margin-left: -30px;
                transform-origin: 1px;
                flex-direction: column;
                border: solid 1px #f3f3f3;
                transition: all .5s linear;
                opacity: ${({open}) => open ? 1 : 0};
                z-index: ${({open}) => open ? 1 : -1};
                top: ${({open}) => open ? '110px' : '-90px'};

                span, li > a {
                    padding: 0;
                    height: 50px;
                    width: 100vw;
                    justify-content: center;
                    color: #fff;
                    background-color: ${ ({theme}) => theme.color.third };

                    &:hover {
                    background-color: ${ ({theme}) => theme.color.default };
                    color: ${ ({theme}) => theme.color.third };

                    }

                }
            }
        }
    }
`