import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
  sage,
  sageDark,
  slate,
  slateDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    // ...indigo,
    ...sage,

    ...gray,
    ...blue,
    ...red,
    ...green,
  },
  dark: {
    // ...indigoDark,
    ...sageDark,
    ...grayDark,

    ...blueDark,
    ...redDark,
    ...greenDark,
  },
}
