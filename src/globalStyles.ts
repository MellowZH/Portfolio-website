import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from './theme';
export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme: { colors } }) => colors.background};
    color: ${({ theme: { colors } }) => colors.text};
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter";
    transition: all 0.50s linear;
  }`;
