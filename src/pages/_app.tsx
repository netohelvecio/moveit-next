import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import GlobalStyles from '../styles/global';

import { GeneralContainer } from './style';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GeneralContainer>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>

        <GlobalStyles theme={theme} {...theme} />
        <Component {...pageProps} />
      </GeneralContainer>
    </ThemeProvider>
  )
}

export default MyApp
