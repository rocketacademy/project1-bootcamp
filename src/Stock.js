import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { Component } from "react";

class Stock extends Component {
  render() {
    return (
      <Flex direction="column" w="100%">
        <StockList navigateTo={this.props.navigateTo} />
      </Flex>
    );
  }
}

class StockList extends Component {
  static defaultProps = {
    navigateTo: () => {
      console.warn("navigateTo not provided!");
    },
  };

  state = {
    stocks: [
      // Stocks
      { name: "Apple", ticker: "AAPL", price: 150 }, // Done
      { name: "Microsoft", ticker: "MSFT", price: 280 }, // Done
      { name: "Tesla", ticker: "TSLA", price: 650 }, // Done
      { name: "Amazon", ticker: "AMZN", price: 3400 }, // Done
      { name: "Facebook", ticker: "FB", price: 355 }, // Done
      { name: "Netflix", ticker: "NFLX", price: 520 }, // Done
      { name: "Google", ticker: "GOOGL", price: 2800 }, // Done
      { name: "NVIDIA", ticker: "NVDA", price: 700 }, // Done

      // Cryptocurrencies
      { name: "Bitcoin", ticker: "BTC", price: 25000 }, // Done
      { name: "Ethereum", ticker: "ETH", price: 1600 }, // Done

      // Commodities
      { name: "Gold", ticker: "GOLD", price: 1800 },

      // Bonds
      { name: "US Treasury Bond", ticker: "BOND", price: 100 },
    ],
  };

  handleLinkClick = (ticker, price, event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    this.props.navigateTo("/trading", {
      ticker: ticker,
      price: price,
    });
  };

  render() {
    return (
      <Box overflowX="auto">
        <Table variant="simple" bgColor="background" color="text">
          <Thead>
            <Tr>
              <Th color="text">Name</Th>
              <Th color="text">Ticker</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.stocks.map((stock) => (
              <Tr key={stock.ticker}>
                <Td>{stock.name}</Td>
                <Td>{stock.ticker}</Td>
                <Td>
                  <Button
                    bgColor="primary"
                    color="text"
                    onClick={(event) =>
                      this.handleLinkClick(stock.ticker, stock.price, event)
                    }
                  >
                    Trade
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }
}

export default Stock;
