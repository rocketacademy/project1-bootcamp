import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";
import Stock from "./stock";
import Trading from "./trading";
import Navigation from "./navigation";
import GetStarted from "./getstarted";

class App extends Component {
  state = {
    currentRoute: "/", // default route
    tradingParams: {}, // to pass parameters to the Trading component
  };

  navigateTo = (route, params = {}) => {
    this.setState({ currentRoute: route, tradingParams: params });
  };

  renderCurrentComponent = () => {
    switch (this.state.currentRoute) {
      case "/getstarted":
        return <GetStarted navigateTo={this.navigateTo} />;
      case "/stock":
        return <Stock navigateTo={this.navigateTo} />;
      case "/trading":
        return <Trading {...this.state.tradingParams} />;
      default:
        return <GetStarted navigateTo={this.navigateTo} />; // handle default case
    }
  };

  render() {
    return (
      <Flex direction="column" flex="1" minH="100%" bgColor="background">
        <Navigation navigateTo={this.navigateTo} />
        <Flex direction="column" align="center" p={4} flex="1">
          <Flex flex={1} w="100%">
            {this.renderCurrentComponent()}
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default App;
