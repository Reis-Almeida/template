import styled from 'styled-components'

export const StyledHeadInfo = styled.div`
    height: auto;
    width: 100vw;
    padding: 0 60px;
    justify-content: space-between;
    background-color: ${ ({theme}) => theme.color.main };

    &, * {
        display: flex;
        font-size: 14px;
        color: #fff;
    }

    div a {
        padding-right: 30px;
    }

    span a {
    height: 40px;
    padding: 0 10px;

        &:hover {
            background-color: ${ ({theme}) => theme.color.third };
        }
    }

    svg { font-size: 16px }

    @media(max-width: 800px) {
        padding: 0;
        justify-content: space-around;
    }

    @media(max-width: 640px) {
        height: 40px;

        span { display: none; }

        div:nth-child(1) a {
            padding: 0;
            margin: 0 5px;
        }
        div:nth-child(1) {
            width: 100vw;
            padding: 0 30px 0 10px;
            justify-content: space-between;
        }
                
    }


`


export const StyledHeadNav = styled.div<{ open:boolean }>`
    height: 70px;
    width: 100vw;
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
        padding: 0 20px;
        width: 98vw;
    }

    @media(max-width: 890px) {

        svg {display: block;}

        ul {
            position: absolute;
            margin-left: -20px;
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

`