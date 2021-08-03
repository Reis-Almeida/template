import styled from 'styled-components'

export const Main = styled.div<{ change:boolean }>`
    padding: 60px;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    &>span {
        height: 250vh;
        width: 990px;
        display: flex;
        flex-direction: column;
    }

    .order {
        padding: 0 60px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        select {
            padding: 6px 4px;
            font-size: 1.0rem;
            outline: none;
            border: none;
            background-color: ${ ({theme}) => theme.color.second };
        }

        label { margin: 0 5px 0 15px; }

        svg {
            font-size: 2.4rem;
            padding: 10px;
            border: solid 1px #cccccc;
            border-radius: 5px;


            &:nth-child(1) {
                margin-right: 5px;
                background-color: ${({change, theme}) => change ? '#fff' : theme.color.primary};
                * { color: ${({change}) => change ? 'currentcolor' : '#fff' }; }
            }
            &:nth-child(2) {
                background-color: ${({change, theme}) => change ? theme.color.primary : '#fff'};
                * { color: ${({change}) => change ? '#fff' : 'currentcolor'}; }
            }
        }
    }

    ul {
        display: flex;
        flex-direction: row;

        .color {
            border-color: ${({ theme }) => theme.color.primary};
            background-color: ${({ theme }) => theme.color.primary};
            color: #fff;
        }

        button {
            padding: 5px;
            margin: 0 5px;
        }
    }
`

export const Main2 = styled.div<{ change:boolean }>`
    /* height: 200vh; */
    padding: 30px 60px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({change}) => change ? 'column' : 'row' };
    align-items: flex-start;
    justify-content: ${({change}) => change ? 'flex-start' : 'space-between' };

`