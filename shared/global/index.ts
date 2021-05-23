import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Nunito', arial, sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        align-items: center;
        color: #444;
        text-decoration: none;
        overflow-x: hidden;
        font-weight: 600;
    }
`
export const theme: object = {
    fontFamily: {
        title: 'Abril Fatface', //cursive
        city: 'Caveat Brush'
    },
    fontColor: {
        title: '#333',//
        default: '#fff',// |
        bigTitle: '#656565',//
        describe: '#323232'//
    },
    color : {
        primary: '#d82460',//
        second: '#f3f3f3',//
        third: '#222',// |
        main: '#484848',// |
        featured: '#1b1d2a',//
        default: '#fff',// |
    }
}