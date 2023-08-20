import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ".//assets/index.css";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import App from "./App";

const theme = {
  fontSizes: {
    xs: "0.75rem",
    sm: "0.9rem",
    md: "1.125rem",
    lg: "1.625rem",
    xl: "1.875rem",
  },
  primaryColor: "teal",
};

function Root() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
