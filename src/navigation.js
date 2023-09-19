import { Box, Button, Flex } from "@chakra-ui/react";
import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <Box bg="primary" p={4} rounded="md" mt={4} w="100%">
        <Flex justify="space-between">
          <Button
            color="text"
            variant="ghost"
            onClick={() => this.props.navigateTo("/getstarted")}
          >
            Start
          </Button>
          <Button
            color="text"
            variant="ghost"
            onClick={() => this.props.navigateTo("/stock")}
          >
            Trade
          </Button>
        </Flex>
      </Box>
    );
  }
}

export default Navigation;
