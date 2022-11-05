import React from "react";

export default class SplitBill extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.action}>Split the Bill</button>
      </div>
    );
  }
}
