import { Box, Button, Flex } from "@chakra-ui/react";
import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <Box bg="gray.100" p={4} rounded="md" mt={4} w="100%">
        <Flex justify="space-between">
          <Button
            variant="ghost"
            onClick={() => this.props.navigateTo("/getstarted")}
          >
            Start
          </Button>
          <Button
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
