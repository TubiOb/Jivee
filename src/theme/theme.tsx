import { extendTheme } from "@chakra-ui/react";
// import { Global } from "@emotion/react";



const theme = extendTheme({
  colors: {
    black: {
      100: "#000",
      200: "#061101",
    },
    white: {
      100: "#ffffff",
    },
    grey: {
      100: "#F7F7F7",
      200: "#575757",
      300: "#868686",
      400: "#bfc0c0",
      500: "#8b8c89",
      600: "#ddd",
    },
    blue: {
      100: "#00082F",
      200: "#0095E8",
    },
    red: {
      100: "#EB3349",
      200: "#F45C43",
    },
    purple: {
      100: "#e0c3fc",
      200: "#FBF8FF",
      300: "#D5A9FF",
      400: "#674CCD",
      500: "#3c096c",
      600: "#240046",
    },
  },
});
export default theme;