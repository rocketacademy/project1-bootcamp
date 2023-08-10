import { Overlay, Flex, Text } from "@mantine/core";
import { findScore } from "../utils";

function ScoreOverlay({ distance }) {
  return (
    <Overlay>
      <Flex direction="column" pt="md">
        <Text size="md">Distance: {distance}</Text>
        <Text size="md">Score: {findScore(distance)}</Text>
      </Flex>
    </Overlay>
  );
}

export default ScoreOverlay;
