import colors from "./colors";
import typography from "./typography";
import unit from "./units";
import radius from "./radius";
import breakpoints from "./breakpoints";

export const theme = {
  colors,
  typography,
  unit,
  radius,
  breakpoints
}

export type ThemeType = typeof theme;