import React from "react";

export default class ReceiptDisplay extends React.Component {
  render() {
    console.log(this.props.name);
    console.log(this.props.receipt);
    return (
      <div className="tooltip">
        {this.props.name}
        {"→"}
        {this.props.receipt.total.toFixed(2)}
        <span className="tooltiptext">
          <table>
            <tr>
              <th>Purchase</th>
              <th>Cost</th>x
            </tr>
            {this.props.receipt.purchases.map((purchase, i) => (
              <tr>
                <td>{purchase}</td>
                <td>{this.props.receipt.costprice[i].toFixed(2)}</td>
              </tr>
            ))}
          </table>
        </span>
      </div>
    );
  }

  // render() {
  //   const showBreakdown = (nameInput) => {
  //     var output = nameInput;
  //     for (let z = 0; z < receipt.length; z++) {
  //       if (receipt[z].name === nameInput) {
  //         for (let t = 0; t < receipt[z]["purchases"].length; t++) {
  //           output += `<br> ${receipt[z]["purchases"][t]} -- ${receipt[z]["costprice"][t]}`;
  //         }
  //       }
  //     }
  //     return output;
  //   };

  //   return (
  //     <div>

  //     </div>

  //   );
  // }
}
