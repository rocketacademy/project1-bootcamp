import { Overlay, Flex, Text } from "@mantine/core";
import { findScore } from "../utils";

function ScoreOverlay({ distance }) {
  return (
    <Overlay>
      <Flex direction="column" pt="md">
        <Text size="lg">Distance: {distance}</Text>
        <Text size="lg">Score: {findScore(distance)}</Text>
      </Flex>
    </Overlay>
  );
}

export default ScoreOverlay;
