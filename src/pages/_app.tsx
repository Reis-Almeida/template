import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import ListProvider from '../context/useProperty'
import { GlobalStyle, theme } from '../styles/global'
// import 'mapbox-gl/src/css/mapbox-gl.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ListProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
      </ListProvider>
    )
}

export default MyApp