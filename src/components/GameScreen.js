import React, { useState, useEffect, useRef } from "react";
import {
  Flex,
  Paper,
  Button,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { Marker, LngLatBounds } from "maplibre-gl";
import { point } from "@turf/helpers";
import { default as findDistance } from "@turf/distance";
import Map from "./Map.js";
import ScoreOverlay from "./ScoreOverlay.js";

const useStyles = createStyles((theme) => ({
  mapContainer: {
    flex: 1,
    position: "relative",
  },
}));

function GameScreen() {
  const [totalScore, setTotalScore] = useState(0);
  const [questionNum, setQuestionNum] = useState(1);
  const [showScoreOverlay, setShowScoreOverlay] = useState(false);

  const [map, setMap] = useState(null);
  const [placeName, setPlaceName] = useState("");
  const [placeLnglat, setPlaceLnglat] = useState(null);
  const [guessLnglat, setGuessLnglat] = useState(null);

  const [distance, setDistance] = useState(-1);

  const placeMarker = useRef(null);
  const confirmRef = useRef(null);

  const theme = useMantineTheme();
  const { classes } = useStyles();

  useEffect(() => {
    const handleConfirmKey = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        confirmRef.current.click();
      }
    };

    window.addEventListener("keydown", handleConfirmKey);

    return () => {
      window.removeEventListener("keydown", handleConfirmKey);
    };
  }, []);

  function handleConfirmClick() {
    // Log debug info
    console.log(guessLnglat);
    console.log(placeLnglat);

    setDistance(
      findDistance(
        point([guessLnglat.lng, guessLnglat.lat]),
        point([placeLnglat.lng, placeLnglat.lat])
      )
    );

    // Reset map bounds
    if (
      !(
        map.getBounds().contains([103.6059, 1.2044]) &
        map.getBounds().contains([104.0339, 1.4305])
      )
    ) {
      map.fitBounds([
        [103.5659, 1.1644],
        [104.0739, 1.4705],
      ]);
    }

    // Show correct place
    if (placeMarker.current) {
      placeMarker.current.remove();
    }

    placeMarker.current = new Marker({ color: "blue" })
      .setLngLat(placeLnglat)
      .addTo(map);

    // Show line from guess to correct place
    const lineData = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [guessLnglat.lng, guessLnglat.lat],
          [placeLnglat.lng, placeLnglat.lat],
        ],
      },
    };

    if (map.getSource("line-source")) {
      map.getSource("line-source").setData(lineData);
    } else {
      map.addSource("line-source", {
        type: "geojson",
        data: lineData,
      });

      map.addLayer({
        id: "line-layer",
        type: "line",
        source: "line-source",
        paint: {
          "line-color": "blue",
          "line-width": 3,
          "line-dasharray": [2, 2],
        },
      });
    }

    // Show score overlay
    setShowScoreOverlay(true);
  }

  function handleNextClick() {
    setQuestionNum((prevNum) => prevNum + 1);

    // Hide score overlay
    setShowScoreOverlay(false);
  }

  return (
    <Flex w="100%" maw="900px" h="100dvh" direction="column">
      <Paper px="md" radius="0">
        <Text size="xl" align="center" pt="sm">
          <span id="place-name">{placeName}</span>
        </Text>
        <Text size="md" pb="sm">
          This MRT, where ah?
        </Text>
      </Paper>

      <div className={classes.mapContainer}>
        <Map
          setMap={setMap}
          setPlaceName={setPlaceName}
          setPlaceLnglat={setPlaceLnglat}
          setGuessLnglat={setGuessLnglat}
        />
        {showScoreOverlay && (
          <ScoreOverlay distance={distance} setTotalScore={setTotalScore} />
        )}
      </div>

      <Paper radius="0">
        <Flex w="100%" align="center" justify="space-between" px="lg" py="md">
          <Flex direction="column" align="flex-start">
            <Text size="md">Question: {questionNum} of 5</Text>
            <Text size="md">Total Score: {totalScore}</Text>
          </Flex>

          {!showScoreOverlay && (
            <Button
              compact
              size={`calc(1.5 * ${theme.fontSizes.md})`}
              sx={{ padding: "0.75rem" }}
              ref={confirmRef}
              onClick={handleConfirmClick}
            >
              Confirm
            </Button>
          )}

          {showScoreOverlay && (
            <Button
              compact
              size={`calc(1.5 * ${theme.fontSizes.md})`}
              sx={{ padding: "0.75rem" }}
              onClick={handleNextClick}
            >
              Next
            </Button>
          )}
        </Flex>
      </Paper>
    </Flex>
  );
}

export default GameScreen;
