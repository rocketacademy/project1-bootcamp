import React from "react";
import "./App.css";
import MenuPage from "./Components/Menu-page";
import LearnChords from "./Components/LearnChords";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "MENU",
    };
  }

  toChordsPage = () => {
    this.setState({
      page: "LEARNCHORDS",
    });
  };

  toMenuPage = () => {
    this.setState({
      page: "MENU",
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.page === "MENU" && (
          <MenuPage changeToChordsPage={this.toChordsPage} />
        )}
        {this.state.page === "LEARNCHORDS" && (
          <LearnChords changeToMenuPage={this.toMenuPage} />
        )}
      </div>
    );
  }
}
export default App;
