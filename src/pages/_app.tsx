import { ThemeProvider } from 'styled-components';

import { RootContext } from '../contexts';

import { theme } from '../styles/theme';
import GlobalStyles from '../styles/global';

import { GeneralContainer } from './style';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <RootContext>
        <GeneralContainer>
          <GlobalStyles theme={theme} {...theme} />
          <Component {...pageProps} />
        </GeneralContainer>
      </RootContext>
    </ThemeProvider>
  );
}

export default MyApp;
