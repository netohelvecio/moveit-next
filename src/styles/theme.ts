import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  font: {
    inter: '"Inter", sans-serif',
    rajdhani: '"Rajdhani", sans-serif',
  },

  colors: {
    white: '#fff',
    background: '#f2f3f5',
    grayLine: '#dcdde0',
    text: '#666',
    textHighlight: '#b3b9ff',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd628',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0',
  },
};

export type ThemeType = typeof theme;

export const styled = baseStyled as ThemedStyledInterface<ThemeType>;
