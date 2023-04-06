import React from "react";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div className="screen" id="home">
        <h1>Makan Where</h1>
        <h4>By @markan.sg</h4>
        <button onClick={this.props.handleNext}>
          Tap for a recommendation
        </button>
      </div>
    );
  }
}
