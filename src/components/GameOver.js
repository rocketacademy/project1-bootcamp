import { Flex, Text, Button } from "@mantine/core";

function GameOver({ totalScore, againRef, handleAgainClick }) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      c="white"
      bg="rgba(0, 0, 0, 0.7)"
      h="100%"
    >
      <Text size="lg" mb="md">
        Game over!
      </Text>
      <Text size="xl" mb="xl">
        Total score: <span id="total-score">{totalScore}</span>
      </Text>
      <Button
        size="lg"
        mt="sm"
        px="1rem"
        ref={againRef}
        onClick={handleAgainClick}
      >
        Again?
      </Button>
    </Flex>
  );
}

export default GameOver;
