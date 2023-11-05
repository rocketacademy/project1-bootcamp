import React from "react";
import "./App.css";
import { Title } from "./components/title/title";
import { Demographic } from "./components/patient-demographics/patient-demo";
import { Result } from "./components/resultsbox/result";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <Demographic />
        <Result />
      </div>
    );
  }
}

export default App;
