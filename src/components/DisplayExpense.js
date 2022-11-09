import React from "react";
import "./DisplayExpense.css";

const getFormattedPrice = (price) => {
  const priceTwoDecimal = Number(price).toFixed(2);
  return priceTwoDecimal;
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
          <h3 className="bangers" style={{ color: getRandomColor() }}>
            {this.props.item.toUpperCase()}
          </h3>
          <p>
            <b>${getFormattedPrice(this.props.amount)}</b> (${pricePerPax()}/px)
          </p>
          <p>
            <p>
              <i>{this.props.spenders.join(" ")}</i>{" "}
            </p>
          </p>
          <button value={this.props.id} onClick={this.props.deleteRecord}>
            ✖
          </button>
        </div>
      </div>
    );
  }
}
