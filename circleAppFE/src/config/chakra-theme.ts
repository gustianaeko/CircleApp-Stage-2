import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeConfig: ThemeOverride = {
  colors: {
    brand: {
      green: "#04A51E",
      formBorder: "#545454",
    },
    fonts: {
      heading: `"Plus Jakarta Sans", sans-serif`,
      body: `"Plus Jakarta Sans", sans-serif`,
      mono: `"Plus Jakarta Sans", sans-serif`,
    },
  },
  styles: {
    global: {
      body: {
        bg: "#1D1D1D",
        fontFamily: `"Plus Jakarta Sans", sans-serif`,
      },
    },
  },
};

export const theme = extendTheme(themeConfig satisfies ThemeOverride);
