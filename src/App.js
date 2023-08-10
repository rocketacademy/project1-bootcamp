import React from "react";
import ".//assets/App.css";
import { MantineProvider } from "@mantine/core";
import GameScreen from "./components/GameScreen";

const theme = {
  fontSizes: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.125rem",
    lg: "1.625rem",
    xl: "1.875rem",
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MantineProvider theme={theme}>
          <GameScreen />
        </MantineProvider>
      </header>
    </div>
  );
}

export default App;
