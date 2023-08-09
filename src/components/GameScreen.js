import React, { useState, useRef } from "react";
import {
  Flex,
  Paper,
  Button,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { Marker } from "maplibre-gl";
import { point } from "@turf/helpers";
import distance from "@turf/distance";
import Map from "./Map.js";

const useStyles = createStyles((theme) => ({
  mapContainer: {
    flex: 1,
  },
}));

function GameScreen() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const [map, setMap] = useState(null);
  const [placeName, setPlaceName] = useState("");
  const [placeLnglat, setPlaceLnglat] = useState(null);
  const [guessLnglat, setGuessLnglat] = useState(null);

  const placeMarker = useRef(null);

  const theme = useMantineTheme();
  const { classes } = useStyles();

  function handleConfirmClick() {
    // Log debug info
    console.log(guessLnglat);
    console.log(placeLnglat);
    console.log(
      `distance: ${distance(
        point([guessLnglat.lng, guessLnglat.lat]),
        point([placeLnglat.lng, placeLnglat.lat])
      )}`
    );

    if (placeMarker.current) {
      placeMarker.current.remove();
    }

    placeMarker.current = new Marker({ color: "blue" })
      .setLngLat(placeLnglat)
      .addTo(map);

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
  }

  return (
    <Flex w="100%" maw="900px" h="100dvh" direction="column">
      <Paper px="md" radius="0">
        <Text size={`calc(1.5 * ${theme.fontSizes.lg})`} align="center" pt="sm">
          <span id="place-name">{placeName} MRT</span>
        </Text>
        <Text size="lg" pb="sm">
          where ah?
        </Text>
      </Paper>

      <div className={classes.mapContainer}>
        <Map
          setMap={setMap}
          setPlaceName={setPlaceName}
          setPlaceLnglat={setPlaceLnglat}
          setGuessLnglat={setGuessLnglat}
        />
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
