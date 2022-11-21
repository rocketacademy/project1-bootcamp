import React from 'react';
import "./Overlay.css";

export default class Overlay extends React.Component{
  render(){
    return(
      <div className="overlay-container">
        <div>
          <img src="PokemonPics/YouWonTheGame.png" alt="winmessage"/>
          <div>
            <button onClick={this.props.backToMenu}>Back to Main Menu</button>
          </div>
        </div>
      </div>
    )
  }
}