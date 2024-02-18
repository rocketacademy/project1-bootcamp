import React from "react";
import { Instructions, Title } from "./components/title/Title";
import { Demographic } from "./components/patient-demographics/Demographic";
import { Result } from "./components/resultsbox/Result";
import { druglist } from "./druglist";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

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
  };

  updateWeightInput = (newWeightInput) => {
    this.setState({
      weightInput: newWeightInput,
    });
  };

  updateDrugSearch = (newDrugSearch) => {
    const drug = druglist.find((drug) => drug.drugName === newDrugSearch);
    this.setState({
      drugSearch: newDrugSearch,
      selectedDrug: drug
        ? [...this.state.selectedDrug, drug.drugName]
        : this.state.selectedDrug,
    });
  };

  resetSearch = () => {
    this.setState({
      selectedDrug: [],
    });
  };

  render() {
    return (
      <Container>
        <Grid spacing={4} justifyContent="space-between">
          <Grid item xs={12}>
            <Title />
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Instructions />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Demographic
              updateAgeInput={this.updateAgeInput}
              updateWeightInput={this.updateWeightInput}
            />
          </Grid>
          <Grid item xs={12}>
            <Result
              updateDrugSearch={this.updateDrugSearch}
              selectedDrug={this.state.selectedDrug}
              weightInput={this.state.weightInput}
              ageInput={this.state.ageInput}
              resetSearch={this.resetSearch}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
