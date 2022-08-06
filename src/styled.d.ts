import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      phoneXs: number;
      phoneSm: number;
      phoneMd: number;
      phoneLg: number;
      phoneXlg: number;
      tabletSm: number;
      tabletMd: number;
      tabletLg: number;
      desktopXs: number;
      desktopSm: number;
      desktopMd: number;
      desktopLg: number;
    };

    colors: {
      black: string;
      white: string;
      gentleGray: string;
      dustyPink: string;
      peachPink: string;
      brown: string;
      red: string;
      deepBlack: string;
      fairPink: string;
    };

    radius: {
      small: string;
      medium: string;
      large: string;
      circle: string;
    };

    typography: {
      lineHeight: {
        sm: string;
        md: string;
        lg: string;
      },
      font: {
        mainFont: string;
      },
      fontSize: {
        mainSize: string;
        mediumSize: string;
        largeSize: string;
      }
    };

    unit: number;
  }
}