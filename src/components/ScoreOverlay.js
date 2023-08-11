import { useEffect } from "react";
import { Overlay, Paper, Text } from "@mantine/core";
import { findScore, writeDistance } from "../utils";

function ScoreOverlay({ distance, setTotalScore }) {
  const score = findScore(distance);

  useEffect(() => {
    setTotalScore((prevTotalScore) => prevTotalScore + score);
  }, [score, setTotalScore]);

  return (
    <Overlay bg="rgba(0, 0, 0, 0)">
      <Paper p="sm" radius="0" c="white" bg="rgba(0, 0, 0, 0.6)">
        <Text size="md">Distance: {writeDistance(distance)}</Text>
        <Text size="md">Score: {score}</Text>
      </Paper>
    </Overlay>
  );
}

export default ScoreOverlay;
