import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;

    .card {
        margin-right: 30px;

        @media (max-width:730px) {
            margin-right: 0px;
        }
    }

    .groupCard {
        width: 100%;
        padding: 60px;
        padding-top: 30px;
        display: flex;
        flex-wrap: wrap;
        text-align: start;
        align-items: flex-start;
        justify-content: flex-start;

        @media(min-width: 1318px) {
            max-width: 1290px;
        }

        @media(max-width: 992px) {
            padding: 10px;
        }

        @media (max-width:730px) {
            justify-content: space-around;
        }
    }

    .empty {
        padding: 200px 0;
        font-size: 1.5rem;
    }

`