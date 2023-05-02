import React from "react";
// import logo from "./logo.png";
import "./App.css";
import Timer from "./Component/Timer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div>
            <Timer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
