import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    const { src, matched } = this.props.card;
    return (
      <div
        className={`card ${this.props.flipped ? "flipped" : ""} ${
          matched ? "matched" : ""
        }`}
      >
        <img className="front" src={src} alt="card front" />
        <img
          className="back"
          onClick={this.props.disabled ? () => {} : () => this.props.handleClick(this.props.card)}
          src={"PokemonPics/pokeball.png"}
          alt="card back"
        />
      </div>
    );
  }
}