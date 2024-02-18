import { createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#c6a99e",
    },
    secondary: {
      main: "#9fa28d",
    },
    background: {
      default: "#ded6c9",
      paper: "#f7f2ed",
    },
    error: {
      main: "#bc7245",
    },
    warning: {
      main: "#9fa28d",
    },
    info: {
      main: "#d4ac6f",
    },
    success: {
      main: "#b2c7c8",
    },
    divider: "#424242",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiGrid: {
      defaultProps: {
        container: true, // Default value for container prop
        spacing: 0, // Default spacing between items
        alignItems: "center", // Default vertical alignment
        justifyContent: "center", // Default horizontal alignment
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 3, // Default spacing between items
        justifyContent: "center", // Default horizontal alignment
      },
    },
  },
};

export const globalTheme = createTheme(themeOptions);
