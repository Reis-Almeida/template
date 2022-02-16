import styled from 'styled-components'

export const StyledCard = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    background-color: ${ ({theme}) => theme.color.second };

    .img {
        width: 150px;
        height: 150px;
        margin: 15px 0;
        object-fit: cover;
        border-radius: 50%;
        overflow-y: hidden;
    }

   span {
        width: 100%;
        text-align: center;

        hr { width: 100%; }

        p, hr {
            align-items: center;
            color: ${ ({theme}) => theme.fontColor.bigTitle };
        }

        h2 {
            color: ${ ({theme}) => theme.color.primary };
            font-weight: 400;
        }

        article {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
        }
   }

`

