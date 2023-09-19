import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

function GetStarted(props) {
  return (
    <VStack spacing={4} align="left">
      <Text fontSize="5xl" as="b">
        Biquidity
      </Text>
      <Button colorScheme="green" onClick={() => props.navigateTo("/stock")}>
        I'm feeling lucky
      </Button>
      <Text fontSize="lg" as="b">
        FAQs
      </Text>
      <Text fontSize="md" as="i">
        1. Select the stock, crypto, bond or commodity that you're looking to
        trade.
      </Text>
      <Text fontSize="md" as="i">
        2. Watch the news, are you bullish or bearish?
      </Text>
      <Text fontSize="md" as="i">
        3. Call if you're bullish and Put if you're bearish.
      </Text>
      <Text fontSize="md" as="i">
        4. Watch your buying power grow as you make the right trades.
      </Text>
      <Text fontSize="md" as="i">
        5. Trade another stock, crypto, bond or commodity. Share with your
        friends!
      </Text>
    </VStack>
  );
}

export default GetStarted;
