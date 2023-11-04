import React from "react";
// import logo from "./logo.png";
import "./App.css";
import UserInput from "./Components/UserInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      updatedUserInput: null,
      itemsArray: [],
      itemInCart: false,
      itemHasBeenDeleted: false,
    };
  }
  handleChange = (e) => {
    this.setState = { userInput: e.targe.value };
  };

  render() {
    return (
      <div className="App">
        <legend>
          <h1>Today's shopping list</h1>
        </legend>

        <div className="userInput">
          {" "}
          <UserInput>
            value={this.state.userInput}
            onChange={() => this.handleChange()}
          </UserInput>
        </div>
      </div>
    );
  }
}

export default App;
