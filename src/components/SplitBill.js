import React from "react";

export default class SplitBill extends React.Component {
  render() {
    return (
      <div>
        <center>
          <button className="split_btn" onClick={this.props.action}>
            SPLIT THE BILL
          </button>
          <br />
          <br />
          {this.props.uniqueName.length > 0 && (
            <i style={{ color: "grey" }}>
              (mouse over each person for breakdown)
            </i>
          )}
        </center>
      </div>
    );
  }
}
