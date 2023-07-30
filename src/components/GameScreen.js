import React, { useState } from "react";
import {
  // Container,
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
    borderRadius: `${theme.radius.sm}`,
    overflow: "hidden",
  },
  bottomPaper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function GameScreen() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const placeName = "<<Place Name>>";

  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Flex
      w={`calc(100% - 2 * ${theme.spacing.lg})`}
      maw="900px"
      h="100%"
      gap="lg"
      direction="column"
      m="lg"
    >
      <Paper px="md">
        <Text align="center" py="sm">
          <span id="place-name">{placeName}</span> where ah?
        </Text>
      </Paper>

      <div className={classes.mapContainer}>
        <Map />
      </div>

      <Paper className={classes.bottomPaper}>
        <Flex w="100%" align="center" justify="space-between" px="md" py="sm">
          <Text size="1.5rem">Question: {currentQuestion}/5</Text>

          <Button
            compact
            size="1.5rem"
            styles={{ root: { padding: "0.5rem" } }}
            onClick={() => {
              // TODO
            }}
          >
            Confirm
          </Button>

          <Text size="1.5rem">Score: {score}</Text>
        </Flex>
      </Paper>
    </Flex>
  );
}

export default GameScreen;
