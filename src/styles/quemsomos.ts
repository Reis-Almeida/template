import styled from 'styled-components'

export const StyledMain = styled.div`
    /* padding: 50px 60px; */
    color: ${ ({theme}) => theme.fontColor.bigTitle };
    display: flex;
    justify-content: center;
    flex-direction: column;

    .title {
        color: ${ ({theme}) => theme.color.primary };
        border-bottom: solid 2px ${ ({theme}) => theme.color.primary };
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    .title.last {
        width: 1170px;
       text-align: center;
    }

    .history {
        width: 100%;
        display: flex;
        max-width: 1313px;
        align-items: flex-start;
        padding: 60px;
        padding-bottom: 0;

        img {
            width: 50%;
            margin-right: 20px;
        }

        div {
            width: 50%;
        }

    }

    .business {
        width: 100%;
        height: 350px;
        display: flex;
        overflow-y: hidden;
        margin: 60px 0;
        position: relative;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        .info {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 0 60px;
            position: absolute;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.85);
        }

        .info span {
            width: 100%;
            display: flex;
            max-width: 1170px;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .content {
            color: #fff;
            width: 250px;
            height: 200px;
            display: flex;
            font-size: 1.4rem;
            text-align: center;
            align-items: center;
            margin-top: 20px;
            flex-direction: column;
            justify-content: center;
            border: solid 2px ${ ({theme}) => theme.color.primary };

            &:hover {
                background-color: ${ ({theme}) => theme.color.primary };
            }
        }
    }

    .team {
        max-width: 1313px;
        padding: 60px;
        padding-top: 30px;

        &, * {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    @media(max-width: 992px) {
        .history {
            padding: 60px 30px 0 30px;
        }
        .business .info {
            padding: 0 30px;
        }
    }

    @media(max-width: 1136px) {
        .business {
            height: 500px;
        }
    }

    @media(max-width: 890px) {
       .team { justify-content: space-around }
    }

    @media(max-width: 880px) {
        .history {
            flex-direction: column;

            div, img {
                width: 100%;
            }

            img {
                margin-bottom: 60px;
            }
        }
    }

    @media(max-width: 580px) {
        .business {
            height: 950px;

            .info span {
                justify-content: center;
            }
        }
    }

`