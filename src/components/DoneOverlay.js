import { Paper, Text, Button, Stack } from "@mantine/core";

function DoneOverlay({ totalScore, setGameState, againRef, handleAgainClick }) {
  function handleOptionsClick() {
    setGameState("STARTING");
  }

  return (
    <Paper pt="xs" pb="md" radius="0" c="white" bg="rgba(0, 0, 0, 0.6)">
      <Text size="lg">Game over!</Text>
      <Text size="md">
        Total score: <span id="total-score">{totalScore}</span>
      </Text>
      <Stack align="center" spacing="md" mt="sm">
        <Button
          size="md"
          px="1rem"
          variant="light"
          ref={againRef}
          onClick={handleAgainClick}
        >
          Again?
        </Button>

        <Button size="md" px="1rem" ref={againRef} onClick={handleOptionsClick}>
          Back to options
        </Button>
      </Stack>
    </Paper>
  );
}

export default DoneOverlay;
