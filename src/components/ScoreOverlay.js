import { Overlay, Text } from "@mantine/core";

function ScoreOverlay({ score }) {
  return (
    <Overlay>
      <Text align="center" size="xl">
        {score} Points
      </Text>
    </Overlay>
  );
}

export default ScoreOverlay;
