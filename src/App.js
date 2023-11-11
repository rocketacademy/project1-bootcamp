import React from "react";
import "./App.css";
import ItemsList from "./Components/ItemsList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Today's shopping list</h1>
        </div>
        <div className="ItemsList">
          <ItemsList />
        </div>
      </div>
    );
  }
}

export default App;
