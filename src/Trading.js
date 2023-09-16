import React, { Component } from "react";
import newsData from "./news-bitcoin.json";

class Trading extends Component {
  state = {
    stockName: "Bitcoin",
    currentPrice: 25000,
    news: [],
    tradeAmount: 1000,
    buyingPower: 10000,
    newsType: null, // Track if the news was positive or negative
  };

  componentDidMount() {
    this.pushRandomNews();
  }

  pushRandomNews = () => {
    let type = Math.random() > 0.5 ? "positive" : "negative";
    let newsList = newsData[type];
    let randomNews = newsList[Math.floor(Math.random() * newsList.length)];

    this.setState((prevState) => ({
      news: [randomNews, ...prevState.news.slice(0, 2)],
      newsType: type,
    }));
  };

  handleTrade = (action) => {
    // Determine price effect based on newsType and player action
    let priceEffect = 1;
    if (
      (this.state.newsType === "positive" && action === "call") ||
      (this.state.newsType === "negative" && action === "put")
    ) {
      priceEffect = 1 + Math.random() * 0.2; // random increase between 0.1 to 50%
    } else {
      priceEffect = 1 - Math.random() * 0.2; // random decrease between 0.1 to 50%
    }

    let newPrice = this.state.currentPrice * priceEffect;
    let newBuyingPower =
      this.state.buyingPower +
      ((newPrice - this.state.currentPrice) * this.state.tradeAmount) /
        this.state.currentPrice;

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
