import React, { useState, useEffect, useRef } from "react";
import { Flex, Paper, Button, Text, createStyles } from "@mantine/core";
import { LngLatBounds, Marker } from "maplibre-gl";
import { point } from "@turf/helpers";
import { default as findDistance } from "@turf/distance";
import Map from "./Map.js";
import ScoreOverlay from "./ScoreOverlay.js";
import DoneOverlay from "./DoneOverlay.js";
import orderedPlaces from "../data/mrt_stations.json";
import { shuffle } from "../utils";

const useStyles = createStyles((theme) => ({
  questionContainer: {
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    lineHeight: 1,
  },
  mapContainer: {
    flex: 1,
    position: "relative",
  },
  scoreOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  doneOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
}));

function GameScreen({ gameState, setGameState, maxQuestionNum }) {
  const [totalScore, setTotalScore] = useState(0);
  const [questionNum, setQuestionNum] = useState(1);

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
  const doneRef = useRef(null);
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
        } else if (doneRef.current) {
          doneRef.current.click();
        }
      }
    };

    window.addEventListener("keydown", handleConfirmKey);

    return () => {
      window.removeEventListener("keydown", handleConfirmKey);
    };
  }, []);

  function handleConfirmClick() {
    const guessCoords = [guessLnglat.lng, guessLnglat.lat];
    const placeCoords = [placeLnglat.lng, placeLnglat.lat];

    setDistance(findDistance(point(guessCoords), point(placeCoords)));

    // Reset map bounds
    if (
      !(
        map.getBounds().contains(guessCoords) &
        map.getBounds().contains(placeCoords)
      )
    ) {
      const guessPlaceBounds = new LngLatBounds();
      guessPlaceBounds.extend(guessCoords);
      guessPlaceBounds.extend(placeCoords);

      map.fitBounds(guessPlaceBounds, {
        padding: { top: 204, bottom: 80, left: 80, right: 80 },
      });
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

    if (questionNum >= maxQuestionNum) {
      setGameState("SCORING_LAST");
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

    const place = places.at(-1);
    setPlaceName(place.name);
    setPlaceLnglat(place.coords);

    setPlaces((prevPlaces) => prevPlaces.slice(0, -1));

    setGameState("GUESSING");
  }

  function handleDoneClick() {
    setGameState("GAME_OVER");
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

  function handleResetClick() {
    setGameState("STARTING");
  }

  return (
    <Flex w="100%" maw="900px" h="100dvh" direction="column">
      <Paper px="md" radius="0">
        <div className={classes.questionContainer}>
          <div className={classes.backButton}>
            <Button
              size="md"
              px="1rem"
              ref={againRef}
              onClick={handleResetClick}
              variant="outline"
            >
              Reset
            </Button>
          </div>
          <Text size="md" pt="sm">
            Where's this MRT station ah?
          </Text>
          <Text size="xl" pb="sm">
            <span id="place-name">{placeName}</span>
          </Text>
        </div>
      </Paper>

      <div className={classes.mapContainer}>
        <Map
          gameState={gameState}
          setGameState={setGameState}
          guessMarker={guessMarker}
          setMap={setMap}
          setGuessLnglat={setGuessLnglat}
        />

        {(gameState === "SCORING" || gameState === "SCORING_LAST") && (
          <div className={classes.scoreOverlay}>
            <ScoreOverlay distance={distance} setTotalScore={setTotalScore} />
          </div>
        )}

        {gameState === "GAME_OVER" && (
          <div className={classes.doneOverlay}>
            <DoneOverlay
              totalScore={totalScore}
              againRef={againRef}
              handleAgainClick={handleAgainClick}
            />
          </div>
        )}
      </div>

      <Paper radius="0">
        <Flex w="100%" align="center" justify="space-between" px="lg" py="md">
          <Flex direction="column" align="flex-start">
            <Text size="md">
              Question: {questionNum} of {maxQuestionNum}
            </Text>
            <Text size="md">Total score: {totalScore}</Text>
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

          {gameState === "SCORING_LAST" && (
            <Button size="lg" px="1rem" ref={doneRef} onClick={handleDoneClick}>
              Done!
            </Button>
          )}
        </Flex>
      </Paper>
    </Flex>
  );
}

export default GameScreen;
