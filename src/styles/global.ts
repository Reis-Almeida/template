import { createGlobalStyle } from 'styled-components'

type ThemeProps = {
    fontFamily: {
        title: string
        city: string
    }
    fontColor: {
        title: string
        default: string
        bigTitle: string
        describe: string
    },
    color : {
        primary: string
        primaryRgb: string
        second: string
        third: string
        featured: string
    }
}

export const theme: ThemeProps = {
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
        primary: '#205cc9',
        primaryRgb: '20, 90, 222',
        second: '#f3f3f3',
        third: '#444',
        featured: '#1b1d2a'
    }
}


export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Nunito', arial, sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        align-items: center;
        text-decoration: none;
        overflow-x: hidden;
        font-weight: 600;
    }

    h1, h2, h3, h4, h5, p, a, article, div, span {
        color: ${theme.fontColor.default};
    }

    article {
        white-space: pre-line;
    }

    .media {
        display: flex;
        justify-content: center;
    }

    input, select, textArea {
        border: none;
        outline: none;
    }

    input:focus, select:focus, textArea:focus {
        color: ${theme.color.primary};
    }

    

    [type=submit], button {
        cursor: pointer;
    }
`