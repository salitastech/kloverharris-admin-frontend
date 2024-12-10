import { alpha } from "@mui/material/styles";
import { darken } from "@mui/material";

export const sidebarTheme = {
  // type: "dark",
  palette: {
    primary: {
      main: "#7352C7",
      light: "#A67FFB",
      dark: "#5E3BB7",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#E44A77",
      light: "#FF7EA6",
      dark: "#DF295E",
      contrastText: "#FFF",
    },
    error: {
      main: "#E73145",
      light: "#FF6A70",
      dark: "#AD001E",
      contrastText: "#FFF",
    },
    warning: {
      main: "#F39711",
      light: "#FFC84C",
      dark: "#BB6900",
      contrastText: "#FFF",
    },
    info: {
      main: "#2EB5C9",
      light: "#6FE7FC",
      dark: "#008598",
      contrastText: "#FFF",
    },
    success: {
      main: "#3BD2A2",
      light: "#78FFD3",
      dark: "#00A073",
      contrastText: "#FFF",
    },
    text: {
      primary: "#C5CDE6",
      secondary: "#8595A6",
      disabled: "#A2B2C3",
    },

    divider: "#DEE2E6",
    background: {
      paper: "#26324D",
      default: "#222D45",
    },
    action: {
      active: "#475259",
      hover: "#F5F7FA",
    },
  },
  typography: {
    fontFamily: "NoirPro, Arial",
    fontSize: 14,
    h1: {
      fontSize: "1.5rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#000",
      margin: "0 0 .5rem",
    },
    h2: {
      fontSize: "1.4rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#000",
      margin: "0 0 .5rem",
    },
    h3: {
      fontSize: "1.25rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#000",
      margin: "0 0 .5rem",
    },
    h4: {
      fontSize: "1.1rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#000",
      margin: "0 0 .5rem",
    },
    h5: {
      fontSize: "1rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#000000",
      margin: "0 0 .5rem",
    },
    h6: {
      fontSize: ".875rem",
      lineHeight: 1.2,
      fontWeight: 400,
      color: "#000",
      margin: "0 0 .5rem",
    },
    body1: {
      fontSize: ".875rem",
    },
  },
  jumboComponents: {
    JumboNavbar: {
      nav: {
        action: {
          active: "#FFFFFF",
          hover: "#FFFFFF",
        },
        background: {
          active: "#7352C7",
          hover: alpha("#FFFFFF", 0.15),
        },
        tick: {
          active: darken("#7352C7", 0.25),
          hover: alpha("#FFFFFF", 0.25),
        },
      },
    },
  },
};
