import { createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#79849f",
    },
    secondary: {
      main: "#cfdbde",
    },
    error: {
      main: "#9f7984",
    },
    warning: {
      main: "#95799f",
    },
    info: {
      main: "#82799f",
    },
    success: {
      main: "#79979f",
    },
    background: {
      default: "#e7e9ee",
    },
  },
  typography: {
    fontFamily: "Hind",
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
  },
};

export const globalTheme = createTheme(themeOptions);
