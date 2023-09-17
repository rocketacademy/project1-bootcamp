import React, { Component } from "react";
import newsData from "./news/news-index.json";

class Trading extends Component {
  constructor(props) {
    super(props);

    const { ticker, price } = this.props;

    this.state = {
      stockName: ticker,
      currentPrice: parseFloat(price),
      news: [],
      tradeAmount: 1000,
      buyingPower: 10000,
      newsType: null, // Track if the news was positive or negative
    };
  }

  componentDidMount() {
    this.pushRandomNews();
  }

  pushRandomNews = () => {
    let type = Math.random() > 0.5 ? "positive" : "negative";
    let newsList = newsData[this.state.stockName][type];
    let randomNews = newsList[Math.floor(Math.random() * newsList.length)];

    this.setState((prevState) => ({
      news: [randomNews, ...prevState.news.slice(0, 2)],
      newsType: type,
    }));
  };

  handleTrade = (action) => {
    // Determine price effect based on newsType and player action
    let priceEffect = 1;
    // Price effect based on news
    if (this.state.newsType === "positive") {
      priceEffect = 1 + Math.random() * 0.2; // random increase
    } else if (this.state.newsType === "negative") {
      priceEffect = 1 - Math.random() * 0.2; // random decrease
    }

    let newPrice = this.state.currentPrice * priceEffect;

    // Determine the change in buying power based on player's action and price change
    let priceDifference = newPrice - this.state.currentPrice;
    let profitOrLoss =
      (priceDifference * this.state.tradeAmount) / this.state.currentPrice;

    let newBuyingPower;
    if (action === "call") {
      newBuyingPower = this.state.buyingPower + profitOrLoss; // gain if price increased, loss if decreased
    } else {
      newBuyingPower = this.state.buyingPower - profitOrLoss; // loss if price increased, gain if decreased
    }

    this.setState(
      {
        currentPrice: newPrice,
        buyingPower: newBuyingPower,
      },
      this.pushRandomNews
    ); // Generate a new news item after the trade
  };

  render() {
    return (
      <div>
        <h2>{this.state.stockName}</h2>
        <p>Current Price: ${this.state.currentPrice.toFixed(2)}</p>

        <div>
          <h3>News Alerts</h3>
          <ul>
            {this.state.news.map((newsItem, index) => (
              <li key={index}>{newsItem}</li>
            ))}
          </ul>
        </div>

        <div>
          <button onClick={() => this.handleTrade("call")}>Call</button>
          <button onClick={() => this.handleTrade("put")}>Put</button>
        </div>

        <div>
          <p>Buying Power: ${this.state.buyingPower.toFixed(2)}</p>
        </div>
      </div>
    );
  }
}

export default Trading;
