import styled from 'styled-components'

export const StyledCard = styled.div`
    width: 370px;
    height: 230px;
    margin: 15px 0;
    position: relative;

    * {
        display: flex;
    }
    
    .img {
        width: 370px;
        height: 230px;
        position: absolute;
        object-fit: cover;
    }
    
    .layer {
        width: 370px;
        height: 230px;
        position: absolute;
        flex-direction: column;
        justify-content: flex-end;
        background-color: rgba(0, 0, 0, 0.65);

        &:hover {
            background-image: linear-gradient(to left, #323837ba, rgba(218, 37, 97,0.39), rgba(218, 37, 97,0.59));
        }
    }

    span {
        width: 100%;
        padding: 0 15px;
        margin: 60px 0 10px 0;
        justify-content: space-between;
    }

    p, h1 { color: #fff; }

    strong, h1 { font-family: ${ ({theme}) => theme.fontFamily.city }; }

    p {
        padding: 8px 20px;
        border-radius: 25px;
        background-color: rgba(0, 0, 0, 0.45);
    }

    svg { margin-right: 3px; }

    strong, svg {
        font-size: 1.2rem;
        color: ${ ({theme}) => theme.color.primary };
    }


    
    @media(max-width:1270px) and (min-width: 860px) {
        &, .layer {
            width: 28vw;
            min-width: 265px;
        }

        strong, svg { font-size: 1rem; }

        p { font-size: .8rem; }
    }

    @media(max-width:810px) and (min-width: 730px) {
        &, .layer {
            width: 330px;
        }

        strong, svg { font-size: 1rem; }

        p { font-size: .8rem; }
    }

    @media (max-width:730px) {
            justify-content: space-around;
    }

`


