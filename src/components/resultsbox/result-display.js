import React from "react";

class ResultDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result-display">
        <table>
          <tr>
            <td>Drug A</td>
            <td>Min Dose</td>
            <td>Max Dose</td>
          </tr>
          <tr>
            <td>Drug B</td>
            <td>Min Dose</td>
            <td>Max Dose</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ResultDisplay;
