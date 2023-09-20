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
import assetData from "./stocks/assets.json";

/**
 * The Stock component represents the main container for the asset selector screen.
 */

class Stock extends Component {
  render() {
    return (
      <Flex direction="column" w="100%">
        <StockList navigateTo={this.props.navigateTo} />
      </Flex>
    );
  }
}

/**
 * The StockList component displays a list of stocks with options to trade.
 */

class StockList extends Component {
  static defaultProps = {
    navigateTo: () => {
      console.warn("navigateTo not provided!");
    },
  };

  state = {
    stocks: assetData,
  };

  /**
   * Handles the link click and navigates to the trading page of the selected ticker.
   * @param {string} ticker - The ticker of the stock.
   * @param {number} price - The price of the stock.
   * @param {Event} event - The click event.
   */

  handleLinkClick = (ticker, price, event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    this.props.navigateTo("/trading", {
      ticker: ticker,
      price: price,
    });
  };

  /**
   * Render method for the StockList component.
   * @return {JSX.Element} - Rendered StockList component.
   */

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
