import styled from 'styled-components'

export const Nav = styled.nav`
    height: 30vh;
    width: 100vw;

    .img {
        height: 50vh;
        width: 100vw;
        position: relative;
    }
    
    .info {
        top: 110px;
        height: 30vh;
        width: 100vw;
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: center;
        background-color: rgba(70, 70, 70, 0.3);
    }

    h1 {
        font-size: 33px;
        font-weight: 400;
        margin-bottom: 20px;
        font-family: ${ ({theme}) => theme.fontFamily.title };
    }

    h1, p, a {
        color: #fff;
    }

    .stripe {
        margin: 0 5px;
    }

    span {
        display: flex;
        flex-direction: row;
        padding: 10px 15px;
        border-radius: 5px;
        background-color: rgba(70, 70, 70, 0.6);

    }

`