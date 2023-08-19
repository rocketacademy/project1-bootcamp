import React from "react";
import ReactDOM from "react-dom/client";
import ".//assets/index.css";
import { MantineProvider } from "@mantine/core";
import App from "./App";

const theme = {
  // colorScheme: "dark",
  fontSizes: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.125rem",
    lg: "1.625rem",
    xl: "1.875rem",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);
