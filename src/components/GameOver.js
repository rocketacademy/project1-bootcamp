import { Text, Button } from "@mantine/core";

function GameOver({ totalScore, againRef, handleAgainClick }) {
  return (
    <>
      <Text size="lg" mt="sm">
        Total score: <span id="total-score">{totalScore}</span>
      </Text>
      <Button
        size="md"
        px="1rem"
        mb="md"
        variant="light"
        ref={againRef}
        onClick={handleAgainClick}
      >
        Again?
      </Button>
    </>
  );
}

export default GameOver;
