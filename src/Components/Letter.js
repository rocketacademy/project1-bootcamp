import React from "react";

export default class Letter extends React.Component {
  render() {
    return (
      <div className="letter" style={{ backgroundColor: this.props.color }}>
        {this.props.letter}
      </div>
    );
  }
}
