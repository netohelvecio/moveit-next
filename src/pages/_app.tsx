import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import GlobalStyles from '../styles/global';

import { GeneralContainer } from './style';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GeneralContainer>
        <GlobalStyles theme={theme} {...theme} />
        <Component {...pageProps} />
      </GeneralContainer>
    </ThemeProvider>
  );
}

export default MyApp;
