import React, { useEffect, useRef, useCallback } from "react";
import { Map as MaplibreMap, Marker } from "maplibre-gl";
import { useMantineTheme } from "@mantine/core";

function Map({
  gameState,
  setGameState,
  guessMarker,
  setMap,
  setGuessLnglat,
  dark,
}) {
  const theme = useMantineTheme();

  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const style = dark
        ? `https://api.maptiler.com/maps/6684d375-2346-4a5c-b6e9-fc4183e64cf5/style.json?key=${process.env.REACT_APP_MAPTILER_KEY}`
        : `https://api.maptiler.com/maps/363b3c4e-0ad0-4a51-b858-c019423b9d2c/style.json?key=${process.env.REACT_APP_MAPTILER_KEY}`;

      mapRef.current = new MaplibreMap({
        container: mapContainer.current,
        style: style,
        center: [103.8198, 1.3521],
        maxBounds: [
          [103.33, 0.85],
          [104.31, 1.79],
        ],
        class: dark ? "dark" : "light",
      });

      mapRef.current.fitBounds([
        // Bounding box is [103.6059, 1.1644], [104.0839, 1.4705]
        [103.5659, 1.1644],
        [104.0739, 1.4705],
      ]);

      // Customise map style and interaction
      mapRef.current.dragRotate.disable();
      mapRef.current.touchZoomRotate.disableRotation();
      mapRef.current.touchPitch.disable();

      setMap(mapRef.current);
    }

    const container = document.querySelector(".maplibregl-canvas-container");
    if (container) {
      container.classList.remove("cursor-dark", "cursor-light");
      container.classList.add(dark ? "cursor-dark" : "cursor-light");
    }

    setGameState("GUESSING");
  }, [setMap, setGameState, dark]);

  const handleMapClick = useCallback(
    (event) => {
      const lnglat = event.lngLat.wrap();

      if (guessMarker.current) {
        guessMarker.current.remove();
      }

      guessMarker.current = new Marker({
        color: dark ? theme.colors.red[8] : theme.colors.red[7],
      })
        .setLngLat(lnglat)
        .addTo(mapRef.current);

      const markerRendered = document.querySelector(".maplibregl-marker");
      if (markerRendered) {
        markerRendered.classList.remove("cursor-dark", "cursor-light");
        markerRendered.classList.add(dark ? "cursor-dark" : "cursor-light");
      }

      setGuessLnglat(lnglat);

      setGameState("CONFIRMING");
    },
    [guessMarker, setGuessLnglat, setGameState, dark, theme.colors.red]
  );

  useEffect(() => {
    if ((gameState === "GUESSING") | (gameState === "CONFIRMING")) {
      mapRef.current.on("click", handleMapClick);
    }

    return () => {
      mapRef.current.off("click", handleMapClick);
    };
  }, [gameState, handleMapClick]);

  return (
    <div
      id="map-container"
      ref={mapContainer}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}

export default Map;
