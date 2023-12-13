import * as styledComponents from "styled-components";
import { ThemeType } from "./theme";
import * as _ from 'styled-components/cssprop'
import {DefaultTheme} from "styled-components";

const styles = {
  default: styledComponents.default,
  css: styledComponents.css,
  ThemeProvider: styledComponents.ThemeProvider,
  ThemeContext: styledComponents.ThemeContext,
  createGlobalStyle: styledComponents.createGlobalStyle,
} as styledComponents.ThemedStyledComponentsModule<DefaultTheme>;

export const {css, ThemeProvider, createGlobalStyle,} = styles;

export * from './theme';

export const GlobalStyle = createGlobalStyle<styledComponents.ThemeProps<ThemeType>>`
${({ theme }) => css`
  html {
    line-height: ${theme.typography.lineHeight.sm};
    font-size: ${theme.typography.fontSize.mainSize};
    font-family: ${theme.typography.font.mainFont};
    color: ${theme.colors.black};
    height: 100%;
    min-height: 100% !important;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.font.mainFont};
    line-height: ${theme.typography.lineHeight.sm};
    font-size: ${theme.typography.fontSize.mainSize};
    font-weight: normal;
  }
`}
`;
