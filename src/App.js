import React from "react";
import Papa from "papaparse";

const meal = "Lunch";
const location = "North";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      // page: 1,
    };
  }

  componentDidMount() {
    this.getCsvData();
  }

  getCsvData = () => {
    fetch("./markan-database.csv").then((rawOutput) => {
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

  componentDidUpdate() {
    // console.log(this.state.data[0].MEAL);
  }

  handleClick = () => {
    let list = this.getApplicableList(this.state.data, meal, location);
    if (list.length !== 0) {
      console.log(list);
    } else {
      console.log("Oops! None Found");
    }
  };

  getApplicableList = (arr, meal, location) => {
    let applicableList = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].MEAL.includes(meal) && arr[i].AREA.includes(location)) {
        applicableList.push(arr[i]);
      }
    }
    return applicableList;
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}

export default App;
