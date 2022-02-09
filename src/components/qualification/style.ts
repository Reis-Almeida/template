import styled from 'styled-components'

export const StyledQualification = styled.div`
    width: 100vw;
    padding: 0 60px 50px 60px;
    background-color: ${ ({theme}) => theme.color.second };

    &, * {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
    }

    h1, h5, article {
        color: ${ ({theme}) => theme.fontColor.bigTitle };
    }

    h3 { color: ${ ({theme}) => theme.fontColor.title } }

    h1 {
        font-size: 40px;
        font-weight: 400;
        font-family: ${ ({theme}) => theme.fontFamily.title };
    }

    & > div:nth-child(1) {
        margin-bottom: 10px;
    }

    & > div:nth-child(2) {
        max-width: 1192px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        
        span { padding: 30px; }

        h3, div { margin-bottom: 10px; }
        
        div {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            border: solid 8px #fff;
            
            svg {
                font-size: 40px;
                color: ${ ({theme}) => theme.color.primary };
            }
        }
        
        @media(max-width:920px) {
            flex-wrap: wrap;
            span { 
                width: 40vw;
            }
            
        }
        @media(max-width:610px) {
            span { 
                width: 100%;
            }
            
        }
    }


`

