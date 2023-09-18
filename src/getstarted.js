import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

function GetStarted(props) {
  return (
    <VStack spacing={4} align="center">
      <Heading>Biquidity</Heading>
      <Button colorScheme="blue" onClick={() => props.navigateTo("/stock")}>
        I'm feeling lucky
      </Button>
      <Text>
        You're playing a simple trading game to learn more about how events can
        drive stock price increases.
      </Text>
    </VStack>
  );
}

export default GetStarted;
