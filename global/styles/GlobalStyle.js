import { createGlobalStyle } from 'styled-components';

export const Theme = {

};

export const lightTheme = {
  colors: {
    bodyColor: `hsl(0, 0%, 100%)`,
    textColor: `hsl(0, 0%, 50%)`,
    titleColor: `hsl(0, 0%, 0%)`,
  }
};

export const darkTheme = {
  colors: {
    bodyColor: `hsl(0, 0%, 8%)`,
    textColor: `hsl(0, 0%, 70%)`,
    titleColor: `hsl(0, 0%, 100%)`,
  }
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.bodyColor};
  }
`;