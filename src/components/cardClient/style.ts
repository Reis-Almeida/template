import styled from 'styled-components'

export const StyledCard = styled.div`
    width: 370px;
    height: 280px;                                                                                                                                              
    padding: 30px;
    padding-top: 0;
    overflow: visible;  
    margin-top: 100px;
    margin-bottom: 30px;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 0 0 40px rgb(0 0 0 / 10%);

    &, * {
        display: flex;
        flex-direction: column;
    }
    
    &:hover { box-shadow: 0 0 40px rgb(0 0 0 / 20%); }

    div > span { flex-direction: row; }

    h3 { color: ${ ({theme}) => theme.fontColor.title }; }

    &> span {
        margin-top: -90px;
        border-radius: 100%;
        border: solid 2px rgb(0 0 0 / 5%);
    }

    .img {
        width: 100px;
        height: 100px;
    }

    h4, svg {
        font-weight: bold; 
        color: ${ ({theme}) => theme.color.primary }; 
    }


    article {
        height: 130px;
        text-align: center;
        color: ${ ({theme}) => theme.fontColor.bigTitle };
    }
    

    @media(max-width:1270px) and (min-width: 860px) {
            width: 28vw;
            min-width: 265px;
    }

    @media(max-width:810px) and (min-width: 730px) {
            width: 330px;
    }
`