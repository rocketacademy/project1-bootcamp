import React from "react";
// import logo from "./logo.png";
import "./App.css";
import {Board} from "./components/Board"
import {Timer} from "./components/Timer"
import {Settings} from "./components/Settings/Settings"
import {RestartGame} from "./components/RestartGame"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      gameOptions: {}
    }
    
  }

  startGame() {
    this.setState(() => ({ 
      gameOptions: this.startGame}))
  }
  
  // resetGame() {
  //   this.setState({
  //     gameOptions: null
  //   })
  // }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <div className="header">Match the words!</div>
          {!this.gameOptions ? (
            <Settings startGame={this.startGame} />
          ) : (
          <div>
          <Timer />
          <Board />
          </div>)
          }
          {/* <Settings startGame= {() => this.startGame}  /> */}
          
          <Board />
          <RestartGame resetGame={this.resetGame} />
          
        {/* </header> */}
      </div>
    );
  }
}

export default App;
