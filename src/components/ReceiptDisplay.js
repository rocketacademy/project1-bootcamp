import React from "react";

export default class ReceiptDisplay extends React.Component {
  render() {
    return (
      <div className="tooltip">
        <div className="flex-arrow">
          <div>{this.props.name}</div>
          <div>${this.props.receipt.total.toFixed(2)}</div>
        </div>
        <span className="tooltiptext">
          <table>
            <tr>
              <th>Purchase</th>
              <th>Cost</th>
            </tr>
            {this.props.receipt.purchases.map((purchase, i) => (
              <tr>
                <td>{purchase}</td>
                <td>${this.props.receipt.costprice[i].toFixed(2)}</td>
              </tr>
            ))}
          </table>
        </span>
      </div>
    );
  }
}
