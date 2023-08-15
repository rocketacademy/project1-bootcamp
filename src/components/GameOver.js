import { Text, Button } from "@mantine/core";

function GameOver({ totalScore, againRef, handleAgainClick }) {
  return (
    <>
      <Text size="lg">
        Total score: <span id="total-score">{totalScore}</span>
      </Text>
      <Button
        size="md"
        mt="sm"
        px="1rem"
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
