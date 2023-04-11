import React from "react";
import Papa from "papaparse";
import HomeScreen from "./Components/HomeScreen";
import Instructions from "./Components/Instructions";
import QuestionScreen from "./Components/QuestionScreen";
import FinalScreen from "./Components/FinalScreen";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      stage: 1,
      locationAvailable: false,
      firstTime: null,
      searchRadius: 3,
      meal: "",
      type: "",
      area: "",
    };
  }

  componentDidMount() {
    this.getCsvData();
    if ("geolocation" in navigator) {
      this.setState({
        locationAvailable: true,
      });
    }
    this.setState({
      firstTime: localStorage.getItem("firstTime") === null ? true : false,
    });
  }

  getCsvData = () => {
    fetch(
      "https://docs.google.com/spreadsheets/d/1lr6rakViESEyL92WLERkX7ZY3lRuKr5O8UG5B7LlIq4/export?format=csv"
    ).then((rawOutput) => {
      rawOutput.text().then((finalOutput) => {
        const outputData = Papa.parse(finalOutput, {
          header: true,
          skipEmptyLines: true,
        });
        this.setState({
          data: outputData.data,
        });
      });
    });
  };

  handleNext = () => {
    if (this.state.firstTime) {
      this.setState({
        stage: this.state.stage + 1,
      });
      if (this.state.stage === 2) {
        this.setState({
          firstTime: false,
        });
        localStorage.setItem("firstTime", "false");
      }
    } else {
      this.setState({
        stage:
          this.state.stage === 1 ? this.state.stage + 2 : this.state.stage + 1,
      });
    }
  };

  handleRestart = () => {
    this.setState({
      stage: 1,
      meal: "",
      type: "",
      area: "",
    });
  };

  handleUpdate = async (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(this.state.firstTime);
    console.log(this.state.stage);
    const { stage, data, locationAvailable, searchRadius, meal, type, area } =
      this.state;
    let currentStage;
    if (stage === 1) {
      currentStage = (
        <HomeScreen data={this.state.data} handleNext={this.handleNext} />
      );
    } else if (stage === 2) {
      currentStage = <Instructions handleNext={this.handleNext} />;
    } else if (stage === 3) {
      currentStage = (
        <QuestionScreen
          locationAvailable={locationAvailable}
          searchRadius={searchRadius}
          handleUpdate={this.handleUpdate}
          handleRestart={this.handleRestart}
          handleNext={this.handleNext}
        />
      );
    } else if (stage === 4) {
      currentStage = (
        <FinalScreen
          searchRadius={searchRadius}
          data={data}
          meal={meal}
          type={type}
          area={area}
          handleRestart={this.handleRestart}
        />
      );
    }

    return <div className="container">{currentStage}</div>;
  }
}

export default App;
