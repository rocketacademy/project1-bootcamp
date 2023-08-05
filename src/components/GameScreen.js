import React, { useState } from "react";
import {
  Flex,
  Paper,
  Button,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import Map from "./Map.js";

const useStyles = createStyles((theme) => ({
  mapContainer: {
    flex: 1,
  },
}));

function GameScreen() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const placeName = "<<Place Name>>";

  const theme = useMantineTheme();
  const { classes } = useStyles();

  function handleConfirmClick() {
    // TODO
  }

  return (
    <Flex w="100%" maw="900px" h="100dvh" direction="column">
      <Paper px="md" radius="0">
        <Text size={`calc(1.5 * ${theme.fontSizes.lg})`} align="center" pt="sm">
          <span id="place-name">{placeName}</span>
        </Text>
        <Text size="lg" pb="sm">
          where ah?
        </Text>
      </Paper>

      <div className={classes.mapContainer}>
        <Map />
      </div>

      <Paper radius="0">
        <Flex w="100%" align="center" justify="space-between" px="lg" py="sm">
          <Flex direction="column" align="flex-start">
            <Text size={`calc(1.0 * ${theme.fontSizes.lg})`}>
              Question: {currentQuestion}/5
            </Text>
            <Text size={`calc(1.0 * ${theme.fontSizes.lg})`}>
              Score: {score}
            </Text>
          </Flex>

          <Button
            compact
            size={`calc(1.5 * ${theme.fontSizes.lg})`}
            styles={{ root: { padding: "0.75rem" } }}
            onClick={handleConfirmClick}
          >
            Confirm
          </Button>
        </Flex>
      </Paper>
    </Flex>
  );
}

export default GameScreen;
