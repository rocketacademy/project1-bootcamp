import React from "react";
import "./App.css";
import { Title } from "./components/title/title";
import { Demographic } from "./components/patient-demographics/patient-demo";
import { Result } from "./components/resultsbox/result";

const drugList = [
  {
    drugName: "paracetamol",
    minDoseMgPerKg: 10,
    maxDoseMgPerKg: 15,
    freq: "QDS",
    minAge: 1,
  },
  {
    drugName: "ibuprofen",
    minDoseMgPerKg: 5,
    maxDoseMgPerKg: 10,
    freq: "TDS",
    minAge: 5,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  doseCalculator = () => {};

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
