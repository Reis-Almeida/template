import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Nunito', arial, sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        align-items: center;
        /* color: #444; */
        text-decoration: none;
        overflow-x: hidden;
        font-weight: 600;
    }

    input, select, textArea {
        border: none;
        outline: none;
    }

    input:focus, select:focus, textArea:focus {
        color: #82b440;
    }

    

    [type=submit], button {
        cursor: pointer;
    }
`
export const theme: object = {
    fontFamily: {
        title: 'Abril Fatface', //cursive
        city: 'Caveat Brush'
    },
    fontColor: {
        title: '#333',
        default: '#444',
        bigTitle: '#656565',
        describe: '#323232'
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

// export const theme: object = {
//     fontFamily: {
//         title: 'Abril Fatface', //cursive
//         city: 'Caveat Brush'
//     },
//     fontColor: {
//         title: '#333',//
//         default: '#fff',// |
//         bigTitle: '#656565',//
//         describe: '#323232'//
//     },
//     color : {
//         primary: '#d82460',//
//         second: '#f3f3f3',//
//         third: '#222',// |
//         main: '#484848',// |
//         featured: '#1b1d2a',//
//         default: '#fff',// |
//     }
// }