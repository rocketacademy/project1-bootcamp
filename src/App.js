import React from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { IngredientList } from "./pages/Ingredients/ingredientsPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <IngredientList />
        </header>
      </div>
    );
  }
}

export default App;
