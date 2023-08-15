import { Flex, Text, Button } from "@mantine/core";

function GameOver({ totalScore, againRef, handleAgainClick }) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="xl"
      c="white"
      bg="rgba(0, 0, 0, 0.6)"
      h="100%"
    >
      <Text size="xl">
        Total score: <span id="total-score">{totalScore}</span>
      </Text>
      <Button size="lg" px="1rem" ref={againRef} onClick={handleAgainClick}>
        Again?
      </Button>
    </Flex>
  );
}

export default GameOver;
