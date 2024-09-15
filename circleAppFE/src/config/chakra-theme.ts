import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeConfig: ThemeOverride = {
  colors: {
    brand: {
      green: "#04A51E",
      formBorder: "#545454",
      cardBackground: "#262626",
      grey: "#B2B2B2",
      placeholder: "#909090",
      followingButton: "#3F3F3F",
      modalColor: "#1D1D1D",
    },
    fonts: {
      heading: `"Plus Jakarta Sans", sans-serif`,
      body: `"Plus Jakarta Sans", sans-serif`,
      mono: `"Plus Jakarta Sans", sans-serif`,
      color: `#FFFFFF`,
    },
  },
  styles: {
    global: {
      body: {
        bg: "#1D1D1D",
        fontFamily: `"Plus Jakarta Sans", sans-serif`,
        color: "#FFFFFF",
      },
    },
  },
};

export const theme = extendTheme(themeConfig satisfies ThemeOverride);
