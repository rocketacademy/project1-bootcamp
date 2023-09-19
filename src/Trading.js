import {
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  VStack,
  Box,
  Text,
  Badge,
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
      tradeResult: null, // New state to track the trade result
      profitOrLoss: 0, // New state to track profit or loss amount
      percentageChange: 0, // New state to track percentage change
      tradedOnNews: "", // Initialize the tradedOnNews state
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
      news: [
        randomNews,
        prevState.news[0],
        prevState.news[1],
        prevState.news[2],
        prevState.news[3],
      ],
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

    // Calculate price difference and P&L
    let priceDifference = newPrice - this.state.currentPrice;
    let profitOrLoss =
      (priceDifference * this.state.tradeAmount) / this.state.currentPrice;

    if (action === "put") {
      profitOrLoss = -profitOrLoss;
    }

    let newBuyingPower = this.state.buyingPower + profitOrLoss;
    const percentageChange = (profitOrLoss / this.state.buyingPower) * 100;
    const currentTopNews = this.state.news[0];

    this.setState({
      currentPrice: newPrice,
      buyingPower: newBuyingPower,
      tradeResult: profitOrLoss > 0 ? "gain" : "loss",
      profitOrLoss: profitOrLoss,
      percentageChange: percentageChange,
      tradedOnNews: currentTopNews, // Set the current top news
    });
  };

  handleTradeAgain = () => {
    this.setState(
      {
        tradeResult: null,
        profitOrLoss: 0,
        percentageChange: 0,
      },
      this.pushRandomNews
    );
  };

  renderSuccessScreen = () => {
    return (
      <VStack spacing={6}>
        <Flex justify="space-between" w="100%">
          <Heading size="2xl">{this.state.stockName}</Heading>
        </Flex>
        <Flex direction="row" justify="space-between" w="100%">
          <Heading size="lg">
            Current Price: ${this.state.currentPrice.toFixed(2)}
          </Heading>
        </Flex>
        <Flex direction="row" justify="space-between" w="100%">
          <Heading size="md">
            Buying Power: ${this.state.buyingPower.toFixed(2)}
          </Heading>
        </Flex>
        <Flex direction="row" justify="space-around" w="100%">
          <Button
            bgColor="primary"
            color="text"
            onClick={this.handleTradeAgain}
          >
            Trade Again 💰
          </Button>
        </Flex>

        <Box
          p={4}
          w="100%"
          backgroundColor="primary"
          borderRadius="md"
          color="text"
        >
          <Text fontSize="xl">
            {this.state.tradeResult === "gain"
              ? "Great! You've made"
              : "Shoot! You've lost"}{" "}
            ${Math.abs(this.state.profitOrLoss).toFixed(2)} (
            {Math.abs(this.state.percentageChange).toFixed(2)}%){"  "}
            {this.state.tradeResult === "gain" ? "🚀" : "😢"}
          </Text>
        </Box>
        <Box
          p={4}
          w="100%"
          backgroundColor="secondary"
          borderRadius="md"
          color="text"
        >
          <Text fontSize="lg">Previous Headline:</Text>
          <Text fontSize="md">{this.state.tradedOnNews}</Text>
        </Box>
      </VStack>
    );
  };

  renderTradingScreen = () => {
    return (
      <VStack spacing={6}>
        <Flex justify="space-between" w="100%">
          <Heading size="2xl">{this.state.stockName}</Heading>
        </Flex>
        <Flex direction="row" justify="space-between" w="100%">
          <Heading size="lg">
            Current Price: ${this.state.currentPrice.toFixed(2)}
          </Heading>
        </Flex>
        <Flex direction="row" justify="space-between" w="100%">
          <Heading size="md">
            Buying Power: ${this.state.buyingPower.toFixed(2)}
          </Heading>
        </Flex>

        <Flex direction="row" justify="space-around" w="100%">
          <Button colorScheme="green" onClick={() => this.handleTrade("call")}>
            Call ⬆️
          </Button>
          <Button colorScheme="red" onClick={() => this.handleTrade("put")}>
            Put ⬇️
          </Button>
        </Flex>
        <Box
          p={4}
          w="100%"
          backgroundColor="secondary"
          borderRadius="md"
          color="text"
        >
          <Heading size="lg">Latest Headlines</Heading>
          <List spacing={3}>
            {this.state.news.map((newsItem, index) => (
              <ListItem key={index}>{newsItem}</ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    );
  };

  render() {
    return (
      <Box overflowX="auto" color="text">
        {this.state.tradeResult
          ? this.renderSuccessScreen()
          : this.renderTradingScreen()}
      </Box>
    );
  }
}

export default Trading;
