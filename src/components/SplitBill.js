import React from "react";

export default class SplitBill extends React.Component {
  render() {
    return (
      <div>
        <center>
          <button className="split_btn" onClick={this.props.action}>
            SPLIT THE BILL
          </button>
        </center>
      </div>
    );
  }
}
