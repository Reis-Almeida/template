import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;

    .nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 200px;
        width: 1300px;
        position: absolute;
        align-items: center;
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