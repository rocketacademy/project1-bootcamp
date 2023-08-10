import React, { useState, useEffect, useRef } from "react";
import { Map as MaplibreMap, Marker } from "maplibre-gl";
import orderedPlaces from "../data/mrt_stations.json";
import { shuffle } from "../utils";

function Map({ setMap, setPlaceName, setPlaceLnglat, setGuessLnglat }) {
  const [places, setPlaces] = useState(shuffle(orderedPlaces));
  const placesRef = useRef(places);

  const mapContainer = useRef(null);
  const guessMarker = useRef(null);

  useEffect(() => {
    const map = new MaplibreMap({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/363b3c4e-0ad0-4a51-b858-c019423b9d2c/style.json?key=${process.env.REACT_APP_MAPTILER_KEY}`,
      center: [103.8198, 1.3521],
      maxBounds: [
        [103.33, 0.85],
        [104.31, 1.79],
      ],
    });

    map.fitBounds([
      // Bounding box is [103.6059, 1.1644], [104.0839, 1.4705]
      [103.5659, 1.1644],
      [104.0739, 1.4705],
    ]);

    // Customise map style and interaction
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    setMap(map);

    const place = placesRef.current.at(-1);
    const initPlaceLnglat = place.coords;

    setPlaceName(place.name);
    setPlaceLnglat(initPlaceLnglat);

    setPlaces((prevPlaces) => {
      return prevPlaces.slice(0, -1);
    });

    // Handle click on map
    const handleMapClick = (event) => {
      const lnglat = event.lngLat.wrap();

      if (guessMarker.current) {
        guessMarker.current.remove();
      }

      guessMarker.current = new Marker({ color: "red" })
        .setLngLat(lnglat)
        .addTo(map);

      setGuessLnglat(lnglat);

      // Log debug info
      console.log(JSON.stringify(lnglat));
      console.log(`zoom: ${map.getZoom()}`);
    };

    map.on("click", handleMapClick);

    return () => {
      if (guessMarker.current) {
        guessMarker.current.remove();
      }
      map.off("click");
      map.remove();
    };
  }, [setMap, setPlaceName, setPlaceLnglat, setGuessLnglat]);

  return (
    <div
      id="map-container"
      ref={mapContainer}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}

export default Map;
