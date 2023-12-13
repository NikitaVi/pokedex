import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      phoneXs: string;
      phoneSm: string;
      phoneMd: string;
      phoneLg: string;
      phoneXlg: string;
      tabletSm: string;
      tabletMd: string;
      tabletLg: string;
      desktopXs: string;
      desktopSm: string;
      desktopMd: string;
      desktopLg: string;
    };

    colors: {
      black: string;
      white: string;
      gentleGray: string;
      dustyPink: string;
      peachPink: string;
      violet: string;
      brown: string;
      red: string;
      deepBlack: string;
      fairPink: string;
      skyBlue: string;
      bgGrey: string;
      steelBlue: string;
      seaGreen: string;
      darkSeaGreen: string;
    };

    radius: {
      r4: string;
      r8: string;
      r10: string;
      rCircle: string;
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
        smSize: string;
        mainSize: string;
        mediumSize: string;
        largeSize: string;
      }
    };

    unit: number;
  }
}
