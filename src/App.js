import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Form } from "./form.js";
import { BasicTable } from "./table.js";

function createData(date, fuel, trip, consumption) {
  return { date, fuel, trip, consumption };
}

const defaultRecords = [
  createData("2022-02-21", 10.37, 218.0, 21.02),
  createData("2022-03-02", 9.07, 181.1, 19.97),
  createData("2022-03-07", 8.42, 187.4, 22.26),
  createData("2022-03-13", 10.24, 214.0, 20.9),
  createData("2022-03-17", 9.84, 218.5, 22.21),
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: defaultRecords,
    };
  }

  updateRecords = (event) => {
    // extract the value from the event out
    console.log(this.state.records);

    console.log(event);
    this.setState({
      records: [...this.state.records, event],
    });
    console.log(this.state.records);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BasicTable data={this.state.records} />
        <br></br>
        <Form onUpdate={this.updateRecords} />
      </div>
    );
  }
}

export default App;
