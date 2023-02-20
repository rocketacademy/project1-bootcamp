import React from "react";
import { holes } from "./Tiles.js";

export default class Letter extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        id={this.props.id}
        className={
          this.props.hasWon && !holes.includes(this.props.id)
            ? "rainbow-letter"
            : "letter"
        }
      >
        {this.props.letter}
      </div>
    );
  }
}
