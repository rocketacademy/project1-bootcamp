import React from "react";
// import "./App.css";
import { Title } from "./components/title/title";
import { Demographic } from "./components/patient-demographics/patient-demo";
import { Result } from "./components/resultsbox/result";
import { DrugList } from "./components/druglist";

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
    const drug = DrugList.find((drug) => drug.drugName === newDrugSearch);
    this.setState({
      drugSearch: newDrugSearch,
      selectedDrug: drug
        ? [...this.state.selectedDrug, drug.drugName]
        : this.state.selectedDrug,
    });
  };

  render() {
    console.log(`drug search: ${this.state.drugSearch}`);
    console.log(`selected drug: ${this.state.selectedDrug}`);
    console.log(`selected drug: ${this.state.ageInput}`);
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
          selectedDrug={this.state.selectedDrug}
          weightInput={this.state.weightInput}
          ageInput={this.state.ageInput}
        />
      </div>
    );
  }
}

export default App;
