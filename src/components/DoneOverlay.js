import { Paper, Text, Button } from "@mantine/core";

function DoneOverlay({ totalScore, againRef, handleAgainClick }) {
  return (
    <Paper pt="xs" pb="lg" radius="0" c="white" bg="rgba(0, 0, 0, 0.6)">
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
    </Paper>
  );
}

export default DoneOverlay;
