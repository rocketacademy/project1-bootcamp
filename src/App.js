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
    ageRange: [1],
  },
  {
    drugName: "ibuprofen",
    minDoseMgPerKg: 5,
    maxDoseMgPerKg: 10,
    freq: "TDS",
    ageRange: [5],
  },
  {
    drugName: "chlorpheniramine",
    minDoseMgPerKg: 0.1,
    maxDoseMgPerKg: 0.1,
    freq: "TDS",
    ageRange: [1, 2, 6],
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ageInput: 0,
      weightInput: 0,
      drugSearch: "",
      selectedDrug: [],
    };
  }

  updateAgeInput = (newAgeInput) => {
    this.setState({
      ageInput: newAgeInput,
    });
    console.log(`age: ${this.state.ageInput}`);
  };

  updateWeightInput = (newWeightInput) => {
    this.setState({
      weightInput: newWeightInput,
    });
    console.log(`weight: ${this.state.weightInput}`);
  };

  updateDrugSearch = (newDrugSearch) => {
    const drug = drugList.find((drug) => drug.drugName === newDrugSearch);
    this.setState({
      drugSearch: newDrugSearch,
      selectedDrug: drug
        ? [...this.state.selectedDrug, drug.drugName]
        : this.state.selectedDrug,
    });
    console.log(`drug search: ${this.state.drugSearch}`);
    console.log(`selected drug: ${this.state.selectedDrug}`);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <Demographic
          updateAgeInput={this.updateAgeInput}
          updateWeightInput={this.updateWeightInput}
        />
        <Result
          updateDrugSearch={this.updateDrugSearch}
          drugList={drugList}
          selectedDrug={this.state.selectedDrug}
          weightInput={this.state.weightInput}
        />
      </div>
    );
  }
}

export default App;
