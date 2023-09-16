import React, { Component } from "react";

class Stock extends Component {
  render() {
    return (
      <div>
        <StockList />
        {/* Bottom persistent navigation */}
      </div>
    );
  }
}

class StockList extends Component {
  // Dummy data for stocks
  state = {
    stocks: [
      { name: "Apple", ticker: "AAPL", price: 150 },
      // ... add more stocks or cryptos
    ],
  };

  render() {
    return (
      <div>
        {this.state.stocks.map((stock) => (
          <div key={stock.ticker}>
            {stock.name} - {stock.ticker} - ${stock.price}
          </div>
        ))}
      </div>
    );
  }
}

export default Stock;
