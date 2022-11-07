import React from "react";
import "./DisplayExpense.css";

const getFormattedPrice = (price) => {
  const priceTwoDecimal = Number(price).toFixed(2);
  return priceTwoDecimal;
};

export default class DisplayExpense extends React.Component {
  render() {
    const pricePerPax = () => {
      let output = (this.props.amount / this.props.spenders.length).toFixed(2);
      return output;
    };
    return (
      <div className="column">
        <div className="card">
          <h3 className="bangers">{this.props.item.toUpperCase()}</h3>
          <p>
            ${getFormattedPrice(this.props.amount)} (${pricePerPax()}/px)
          </p>
          <p>
            <p>{this.props.spenders.join(" ")} </p>
          </p>
          <button value={this.props.id} onClick={this.props.deleteRecord}>
            delete
          </button>
        </div>
      </div>
    );
  }
}
