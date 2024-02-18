import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { globalTheme } from "./theme-options";
import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
