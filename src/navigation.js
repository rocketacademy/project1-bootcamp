import { Box, Button, Flex } from "@chakra-ui/react";
import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <Box bg="gray.100" p={4} rounded="md" mt={4} w="100%">
        <Flex justify="space-between">
          <Button variant="ghost" onClick={() => this.props.navigateTo("/")}>
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => this.props.navigateTo("/getstarted")}
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            onClick={() => this.props.navigateTo("/stock")}
          >
            Stock
          </Button>
          <Button
            variant="ghost"
            onClick={() => this.props.navigateTo("/portfolio")}
          >
            Portfolio
          </Button>
        </Flex>
      </Box>
    );
  }
}

export default Navigation;
