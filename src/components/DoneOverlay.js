import { Paper, Text, Button } from "@mantine/core";

function DoneOverlay({ totalScore, gameState, againRef, handleAgainClick }) {
  return (
    <Paper p="xs" radius="0" c="white" bg="rgba(0, 0, 0, 0.6)">
      <Text size="lg">Game over!</Text>
      <Text size="md">
        Total score: <span id="total-score">{totalScore}</span>
      </Text>
      {gameState === "GAME_OVER" && (
        <Button
          size="lg"
          px="1rem"
          my="lg"
          variant="light"
          ref={againRef}
          onClick={handleAgainClick}
        >
          Again?
        </Button>
      )}
    </Paper>
  );
}

export default DoneOverlay;
