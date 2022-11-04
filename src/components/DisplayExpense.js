import React from "react";

// const getFormattedPrice = (price) => {
//   const priceTwoDecimal = price.toFixed(2);
//   return `$${priceTwoDecimal}`;
// };

export default class DisplayExpense extends React.Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.item} - {this.props.amount}
        </h3>
        <p>Spent by - {this.props.spenders.join(" ")} </p>
      </div>
    );
  }
}
