import React from "react";
// import logo from "./logo.png";
import "./App.css";
import {Board} from "./components/Board"
import {Timer} from "./components/Timer"
import {Settings} from "./components/Settings"
// import {RestartGame} from "./components/RestartGame"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      category: null,
      level: null,
      language: null,
      shouldStartGame: false,
      winStatus: false,
      gameOver: false
    }
    
  }

callBackTime = (property, value) => {
    this.setState({
      [property]: value})
}

checkWinStatus = (property, value) => {
    this.setState({
      [property]: value
    })
  }

handleFormChange = (property, value) => {
  this.setState({
    [property]: value
  })
}

restartGame = () => {
  this.setState({
    category: null,
      level: null,
      language: null,
      shouldStartGame: false,
      winStatus: false,
      gameOver: false
  });
};

restartButton = () => {
    if ((this.state.gameOver) || this.state.winStatus) {
      return <button className="btn" onClick={(e) => this.restartGame(e)}>Play Again!</button>;
    }
}

  render() {
    console.log(this.state)
    return (
      <div className="App">
          {/* <div className="header">Match the words!</div> */}
          <div id ="two">
            <p>Match the</p>
<div className="box">
  <ul className="scrolling-text">
    <li className="item-1">Words</li>
    <li className="item-2">단어</li>
    <li className="item-3">字</li>
    <li className="item-4">kata-kata</li>
    <li className="item-5">Words</li>
  </ul>  
</div>
</div>

          <div className="divider">
          {this.state.category && this.state.level && this.state.language && this.state.shouldStartGame ? (
            <>
            <Timer  callBackTime={this.callBackTime} 
                    level={this.state.level}
                    winStatus={this.state.winStatus} />
            <Board 
                    category={this.state.category} 
                    language={this.state.language}
                    gameOver={this.state.gameOver}
                    winStatus={this.state.winStatus}
                    checkWinStatus={this.checkWinStatus}
                     />
            </>
            
          ) : (
          <div className="divider">
            <Settings handleFormChange={this.handleFormChange} 
                      category={this.state.category} 
                      level={this.state.level} 
                      language={this.state.language} 
                      shouldStartGame={this.state.shouldStartGame}
                     />
          </div>)
          }
          
          
         {(this.state.gameOver || this.state.winStatus) && this.restartButton()}

         </div>
      </div>
    );
  }
}


export default App;
