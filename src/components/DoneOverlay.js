import { Paper, Text, Button, Stack } from "@mantine/core";

function DoneOverlay({ totalScore, againRef, handleAgainClick }) {
  return (
    <Paper pt="xs" pb="lg" radius="0" c="white" bg="rgba(0, 0, 0, 0.6)">
      <Text size="lg">
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
      </Stack>
    </Paper>
  );
}

export default DoneOverlay;
