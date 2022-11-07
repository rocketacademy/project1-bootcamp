import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    const { img, matched } = this.props.card;
    return (
      <div
        className={`card ${this.props.flipped ? "flipped" : ""} ${
          matched === true ? "matched" : ""
        }`}
      >
        <img className="xmassparkle" src={"PokemonPics/sparkle.png"} alt="sparkle" />
        <img className="front" src={img} alt="card front" />
        <img
          className="back"
          onClick={
            this.props.disabled
              ? () => {}
              : () => this.props.handleClick(this.props.card)
          }
          src={"PokemonPics/pokeball.png"}
          alt="card back"
        />
      </div>
    );
  }
}