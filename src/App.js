import React from "react";
import logo from "./logo.png";
import "./App.css";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

class App extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      datetime: "",
      tasks: [],
    };
  }

  //handleChange
  handleChange = (event) => {
    this.setState({ tasks: event.target.value });

  //handleSubmit which will move input into the table through setstate

  render() {
    // function that will map the input into table modelled on the following sample
    // let messageListItems = this.state.messages.map((message) => (
    //   <li key={message.key}>{message.val}</li>
    // ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* <div>{TableContainer}</div> */}
          <form>
            <div>
              <p>
                <label>Date and Time: </label>
                <input type="text" value={new Date().toLocaleString() + ""} />
              </p>
              <p>
                <label>Task: </label>
                <input type="text" />
                <input type="submit" value="Submit" />
              </p>
            </div>
          </form>
          {/* call function here <ol>{messageListItems}</ol> */}
        </header>
      </div>
    );
  }
}

export default App;
