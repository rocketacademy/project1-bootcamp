import { Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import Start from "./getstarted";
import Stock from "./stock";
import Trading from "./trading";
import Portfolio from "./portfolio";
import Navigation from "./navigation";

class App extends Component {
  state = {
    currentRoute: "/", // default route
    tradingParams: {}, // to pass parameters to the Trading component
  };

  navigateTo = (route, params = {}) => {
    this.setState({ currentRoute: route, tradingParams: params });
  };

  render() {
    let CurrentComponent = null;
    switch (this.state.currentRoute) {
      case "/getstarted":
        CurrentComponent = Start;
        break;
      case "/stock":
        CurrentComponent = () => <Stock navigateTo={this.navigateTo} />;
        break;
      case "/trading":
        CurrentComponent = () => <Trading {...this.state.tradingParams} />;
        break;
      case "/portfolio":
        CurrentComponent = Portfolio;
        break;
      default:
        // handle default case
        break;
    }

    return (
      <Flex direction="column" align="center" p={4}>
        <Flex flex={1} w="100%">
          {CurrentComponent && <CurrentComponent />}
        </Flex>
        <Navigation navigateTo={this.navigateTo} />
      </Flex>
    );
  }
}

export default App;
