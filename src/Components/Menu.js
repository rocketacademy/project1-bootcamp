import React from "react";
import "./Menu.css";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="description">
          <img
            className="starter-poke"
            src="PokemonPics/Bulbasaur.png"
            alt="Bulbasaur"
          />
          <img
            className="starter-poke"
            src="PokemonPics/Charmander.png"
            alt="Bulbasaur"
          />
          <img
            className="starter-poke"
            src="PokemonPics/Squirtle.png"
            alt="Squirtle"
          />
          <p>Please select a difficulty to start!</p>
        </div>

        <button className="blue" onClick={()=>{this.props.onClick("easy")}}>
          <div>Easy</div>
          <div>(4x3)</div>
        </button>
        <button className="green" onClick={()=> this.props.onClick("medium")}>
          <div>Medium</div>
          <div>(5x4)</div>
        </button>
        <button className="red" onClick={()=> this.props.onClick("hard")}>
          <div>Hard</div>
          <div>(8x4)</div>
        </button>
      </div>
    );
  }
}
