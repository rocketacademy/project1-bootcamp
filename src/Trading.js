import {
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  VStack,
  Box,
} from "@chakra-ui/react";
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
      <VStack spacing={6}>
        <Flex justify="space-between" w="100%">
          <Heading>{this.state.stockName}</Heading>
          <Heading size="md">
            Current Price: ${this.state.currentPrice.toFixed(2)}
          </Heading>
        </Flex>

        <Box>
          <Heading size="lg">News Alerts</Heading>
          <List spacing={3}>
            {this.state.news.map((newsItem, index) => (
              <ListItem key={index}>{newsItem}</ListItem>
            ))}
          </List>
        </Box>

        <Flex direction="row" justify="space-between" w="100%">
          <Button colorScheme="green" onClick={() => this.handleTrade("call")}>
            Call
          </Button>
          <Button colorScheme="red" onClick={() => this.handleTrade("put")}>
            Put
          </Button>
        </Flex>

        <Flex direction="row" justify="space-between" w="100%">
          <Heading size="md">
            Buying Power: ${this.state.buyingPower.toFixed(2)}
          </Heading>
        </Flex>
      </VStack>
    );
  }
}

export default Trading;
