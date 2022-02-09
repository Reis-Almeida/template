import styled from 'styled-components'

export const StyledCarousel = styled.div`
    height: 110vh;
    
    @media(max-width:700px) {
        height: 50vh;
    }

`

export const StyledSlider = styled.div<{ element:number, current:number }>`
    position: absolute;
    transition: opacity 1s linear;

    .img {
        width: 100vw;
        height: 110vh;
        object-fit: cover;
    }

    &:nth-child(${({element}) => element}) {
        opacity: ${({element, current}) => element == current ? 1 : 0};
        z-index: ${({element, current}) => element == current ? 0 : -1};     
    }

    .nav {
        top: 200px;
        left: 60px;
        z-index: 1;
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        
        &,* {
            display: flex;
            font-weight: 400; 
            justify-content: space-between;
        }

        &>div:last-child {
            width: 500px;
            height: 280px;
            padding: 20px 30px;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
        }

        .button {

            svg {
                width: 50px;
                height: 50px;
                padding: 12px;
                background-color: #fff;
                color:${ ({theme}) => theme.color.primary };
                
                &:hover {
                    color: #fff;
                    background-color: ${ ({theme}) => theme.color.primary };
                }
            }
            &>svg:nth-child(2) {
                transform: rotate(180deg);
            }
        }

        .name {
            flex-direction: column;
            align-items: flex-start;

            a {
                font-size: 40px;
                color: ${ ({theme}) => theme.fontColor.title };
                font-family: ${ ({theme}) => theme.fontFamily.title };
            }
            p {
                font-size: 19px;
                color: ${ ({theme}) => theme.fontColor.default };

                svg {
                    margin-bottom: 3px;
                    color: ${ ({theme}) => theme.color.primary }; 
                }
            }
        }

        .details {
            width: 100%;

            &>div {
                display: grid;
                grid-template-areas:
                    'icon number'
                    'icon descri';

                svg { 
                    grid-area: icon;
                    font-size: 40px;
                    margin-right:10px;
                    color: ${ ({theme}) => theme.color.primary };
                }
                p {
                    align-items: flex-start;
                    &:nth-child(1) { grid-area: descri; }
                    &:nth-child(2) { grid-area: number; }
                    color: ${ ({theme}) => theme.fontColor.default };
                }

            }
        }
        
        .type {
            width: 100%;
            
            p:nth-child(1) {
                color: #fff;
                width: 100px;
                padding: 5px 0;
                justify-content: center;
                background-color: ${ ({theme}) => theme.color.primary };

            }
            p:nth-child(2) {
                font-size: 35px;
                color: ${ ({theme}) => theme.fontColor.title };
                font-family: ${ ({theme}) => theme.fontFamily.title };

            }
        }
    }

    @media(min-width: 1313px) {
        display: flex;
        justify-content: center;
        .nav {
            left: auto;
            width: 100%;
            max-width: 1192px;
        }
    }

    @media(max-width:700px) {
        .img {
            height: 50vh;
        }
        .nav {
            top: 15px;
            left: 0px;
            width: 98vw;
            opacity: 0;
            align-items: center;
            transition: opacity .3s linear;

            &:hover { opacity: 1; }

            .name { align-items: center; }

            .name a { 
                display: block;
                white-space: nowrap; 
                max-width: 410px; 
                text-overflow: ellipsis;
            }

            .button svg{
                background-color: rgba(255, 255, 255, 0.65);
            }

             &>div:last-child {
                align-items: center;
                width: 430px;
                height: 240px;
                background-color: rgba(255, 255, 255, 0.65);
            }
        }
    }
`

