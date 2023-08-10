import React, { useState, useEffect, useRef } from "react";
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
import { default as findDistance } from "@turf/distance";
import Map from "./Map.js";
import ScoreOverlay from "./ScoreOverlay.js";
import orderedPlaces from "../data/mrt_stations.json";
import { shuffle } from "../utils";

const MAX_QUESTION_NUM = 5;

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
  const [places, setPlaces] = useState(shuffle(orderedPlaces));
  const placesRef = useRef(places);
  const [placeName, setPlaceName] = useState("");
  const [placeLnglat, setPlaceLnglat] = useState(null);
  const [guessLnglat, setGuessLnglat] = useState(null);

  const [distance, setDistance] = useState(-1);

  const [confirmDisabled, setConfirmDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const placeMarker = useRef(null);
  const guessMarker = useRef(null);
  const confirmRef = useRef(null);
  const nextRef = useRef(null);

  const theme = useMantineTheme();
  const { classes } = useStyles();

  useEffect(() => {
    const place = placesRef.current.at(-1);
    setPlaceName(place.name);
    setPlaceLnglat(place.coords);

    setPlaces((prevPlaces) => prevPlaces.slice(0, -1));

    const handleConfirmKey = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        if (confirmRef.current) {
          confirmRef.current.click();
        } else if (nextRef.current) {
          nextRef.current.click();
        }
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

    if (questionNum >= MAX_QUESTION_NUM) {
      setNextDisabled(true);
    }

    // Show score overlay
    setShowScoreOverlay(true);
  }

  function handleNextClick() {
    setQuestionNum((prevNum) => prevNum + 1);

    if (placeMarker.current) {
      placeMarker.current.remove();
    }
    if (guessMarker.current) {
      guessMarker.current.remove();
    }
    if (map.getLayer("line-layer")) {
      map.removeLayer("line-layer");
    }
    if (map.getSource("line-source")) {
      map.removeSource("line-source");
    }

    const place = places.at(-1);
    setPlaceName(place.name);
    setPlaceLnglat(place.coords);

    setPlaces((prevPlaces) => prevPlaces.slice(0, -1));

    // Hide score overlay
    setShowScoreOverlay(false);

    setConfirmDisabled(true);
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
          guessMarker={guessMarker}
          setMap={setMap}
          setPlaceName={setPlaceName}
          setPlaceLnglat={setPlaceLnglat}
          setGuessLnglat={setGuessLnglat}
          setConfirmDisabled={setConfirmDisabled}
        />
        {showScoreOverlay && (
          <ScoreOverlay distance={distance} setTotalScore={setTotalScore} />
        )}
      </div>

      <Paper radius="0">
        <Flex w="100%" align="center" justify="space-between" px="lg" py="md">
          <Flex direction="column" align="flex-start">
            <Text size="md">
              Question: {questionNum} of {MAX_QUESTION_NUM}
            </Text>
            <Text size="md">Total Score: {totalScore}</Text>
          </Flex>

          {!showScoreOverlay && (
            <Button
              compact
              size={`calc(1.5 * ${theme.fontSizes.md})`}
              sx={{ padding: "0.75rem" }}
              ref={confirmRef}
              onClick={handleConfirmClick}
              disabled={confirmDisabled}
            >
              Confirm
            </Button>
          )}

          {showScoreOverlay && (
            <Button
              compact
              size={`calc(1.5 * ${theme.fontSizes.md})`}
              sx={{ padding: "0.75rem" }}
              ref={nextRef}
              onClick={handleNextClick}
              disabled={nextDisabled}
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
