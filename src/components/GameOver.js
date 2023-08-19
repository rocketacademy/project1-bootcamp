import { Flex, Paper, Text, Button } from "@mantine/core";

function GameOver({ totalScore, againRef, handleAgainClick }) {
  return (
    <Paper radius="0" opacity="0.7" h="100%">
      <Flex direction="column" align="center" justify="center" h="100%">
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
    </Paper>
  );
}

export default GameOver;
