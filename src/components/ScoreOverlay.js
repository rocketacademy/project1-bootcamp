import { useEffect } from "react";
import { Overlay, Flex, Text } from "@mantine/core";
import { findScore, writeDistance } from "../utils";

function ScoreOverlay({ distance, setTotalScore }) {
  const score = findScore(distance);

  useEffect(() => {
    setTotalScore((prevTotalScore) => prevTotalScore + score);
  }, [score, setTotalScore]);

  return (
    <Overlay>
      <Flex direction="column" pt="md">
        <Text size="md">Distance: {writeDistance(distance)}</Text>
        <Text size="md">Score: {score}</Text>
      </Flex>
    </Overlay>
  );
}

export default ScoreOverlay;
