import React, { Component } from "react";
import './Leaderboard.css'
import { Link } from "react-router-dom";

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myGame: [],
    };
  }

  componentDidMount() {
    let currenlyStoredGames = localStorage.getItem("storeGames");
    console.log(currenlyStoredGames);
    let parsedCurrentlyStoredGames = JSON.parse(currenlyStoredGames);
    console.log(parsedCurrentlyStoredGames);
    if (parsedCurrentlyStoredGames === null) {
      parsedCurrentlyStoredGames = [];
    }
    this.setState({
      myGame: parsedCurrentlyStoredGames,
    });
  }

  render() {
    return (
      <>
        <h1 className="leaderboard-header"> Single Player Leaderboard 😢 </h1>
        {this.state.myGame && this.state.myGame.length > 0 ? (
          this.state.myGame.map((data, index) => (
            <div className="center-data">
              <div className="data-container" key={index}>
                <h2>
                  {data.difficulty.toUpperCase()} LEVEL - YOU TOOK {data.moves} MOVES
                </h2>
              </div>
            </div>
          ))
        ) : (
          <h2>No Games Yet</h2>
        )}
        <div className="center-button">
          <Link to="/">
            <button>Back To Menu</button>
          </Link>
        </div>
      </>
    );
  }
}
