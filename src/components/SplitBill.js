import React from "react";
import "./SplitBill.css";

export default class SplitBill extends React.Component {
  render() {
    return (
      <div>
        <button className="split_btn" onClick={this.props.action}>
          SPLIT THE BILL
        </button>
      </div>
    );
  }
}
