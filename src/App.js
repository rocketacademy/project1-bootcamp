import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Title } from "./components/title/title";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
      </div>
    );
  }
}

export default App;
