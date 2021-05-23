import { GlobalStyle, theme } from 'shared/global';
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Caveat+Brush&family=Nunito:wght@400;600;800&display=swap" rel="stylesheet"/>
    <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default MyApp
