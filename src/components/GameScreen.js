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
  const [gameState, setGameState] = useState("GUESSING");

  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState(shuffle(orderedPlaces));
  const placesRef = useRef(places);
  const [placeName, setPlaceName] = useState("");
  const [placeLnglat, setPlaceLnglat] = useState(null);
  const [guessLnglat, setGuessLnglat] = useState(null);

  const [distance, setDistance] = useState(-1);

  const placeMarker = useRef(null);
  const guessMarker = useRef(null);
  const confirmRef = useRef(null);
  const nextRef = useRef(null);
  const againRef = useRef(null);

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
        } else if (againRef.current) {
          againRef.current.click();
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
      setGameState("GAME_OVER");
    } else {
      setGameState("SCORING");
    }
  }

  function cleanMapMarkers() {
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
  }

  function handleNextClick() {
    setQuestionNum((prevNum) => prevNum + 1);

    cleanMapMarkers();

    const place = places.at(-1);
    setPlaceName(place.name);
    setPlaceLnglat(place.coords);

    setPlaces((prevPlaces) => prevPlaces.slice(0, -1));

    setGameState("GUESSING");
  }

  function handleAgainClick() {
    setTotalScore(0);
    setQuestionNum(1);
    setPlaces(shuffle(orderedPlaces));

    cleanMapMarkers();

    const place = places.at(-1);
    setPlaceName(place.name);
    setPlaceLnglat(place.coords);

    setPlaces((prevPlaces) => prevPlaces.slice(0, -1));

    setGameState("GUESSING");
  }

  return (
    <Flex w="100%" maw="900px" h="100dvh" direction="column">
      <Paper px="md" radius="0">
        <Text size="md" pt="sm">
          Where's this MRT station ah?
        </Text>
        <Text size="xl" align="center" pb="sm">
          <span id="place-name">{placeName}</span>
        </Text>
      </Paper>

      <div className={classes.mapContainer}>
        <Map
          setGameState={setGameState}
          guessMarker={guessMarker}
          setMap={setMap}
          setPlaceName={setPlaceName}
          setPlaceLnglat={setPlaceLnglat}
          setGuessLnglat={setGuessLnglat}
        />
        {gameState === "SCORING" && (
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

          {(gameState === "GUESSING" || gameState === "CONFIRMING") && (
            <Button
              size="lg"
              px="1rem"
              ref={confirmRef}
              onClick={handleConfirmClick}
              disabled={gameState === "GUESSING"}
            >
              Confirm
            </Button>
          )}

          {gameState === "SCORING" && (
            <Button size="lg" px="1rem" ref={nextRef} onClick={handleNextClick}>
              Next
            </Button>
          )}

          {gameState === "GAME_OVER" && (
            <Button
              size="lg"
              px="1rem"
              ref={againRef}
              onClick={handleAgainClick}
            >
              Again?
            </Button>
          )}
        </Flex>
      </Paper>
    </Flex>
  );
}

export default GameScreen;
