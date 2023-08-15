import { useEffect } from "react";
import { Paper, Text } from "@mantine/core";
import { findScore, writeDistance } from "../utils";

function ScoreOverlay({ distance, setTotalScore }) {
  const score = findScore(distance);

  useEffect(() => {
    setTotalScore((prevTotalScore) => prevTotalScore + score);
  }, [score, setTotalScore]);

  return (
    <Paper p="xs" radius="0" c="white" bg="rgba(0, 0, 0, 0.7)">
      <Text size="md">Distance: {writeDistance(distance)}</Text>
      <Text size="md">Score: {score}</Text>
    </Paper>
  );
}

export default ScoreOverlay;
