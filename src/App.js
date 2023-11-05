import React from "react";
import "./App.css";
import ItemsList from "./Components/ItemsList";

// import ItemsList from "./Components/ItemsList";

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

  render() {
    return (
      <div className="App">
        <legend>
          <h1>Today's shopping list</h1>
        </legend>
        <div>
          <ItemsList />
        </div>
      </div>
    );
  }
}

export default App;
