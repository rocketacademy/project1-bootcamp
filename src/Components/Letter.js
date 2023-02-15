import React from "react";

export default class Letter extends React.Component {
  render() {
    return (
      <div
        className="letter"
        style={{ backgroundColor: this.props.color }}
        id={this.props.id}
      >
        {this.props.letter}
      </div>
    );
  }
}
