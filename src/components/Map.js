import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import distance from "@turf/distance";
import { point } from "@turf/helpers";
import places from "../data/mrt_stations.json";

function Map({ setPlaceName }) {
  const mapContainer = useRef(null);
  const marker = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/363b3c4e-0ad0-4a51-b858-c019423b9d2c/style.json?key=${process.env.REACT_APP_MAPTILER_KEY}`,
      center: [103.8198, 1.3521],
      maxBounds: [
        [103.33, 0.85],
        [104.31, 1.79],
      ],
    });

    // Customise map style and interaction
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    map.fitBounds([
      // Bounding box is [103.6059, 1.1644], [104.0839, 1.4705]
      [103.5659, 1.1644],
      [104.0739, 1.4705],
    ]);

    const place = places[Math.floor(Math.random() * places.length)];
    setPlaceName(place.name);

    const testPoint = point([103.85561, 1.29326]);

    map.on("click", (event) => {
      const eventCoords = event.lngLat.wrap();

      // Log info for debugging
      console.log(JSON.stringify(eventCoords));
      console.log(`zoom: ${map.getZoom()}`);
      console.log(
        distance(point([eventCoords.lng, eventCoords.lat]), testPoint)
      );

      if (marker.current) {
        marker.current.remove();
      }

      marker.current = new maplibregl.Marker({ color: "red" })
        .setLngLat(event.lngLat)
        .addTo(map);
    });

    return () => {
      if (marker.current) {
        marker.current.remove();
      }
      map.off("click");
      map.remove();
    };
  }, []);

  return (
    <div
      id="map-container"
      ref={mapContainer}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}

export default Map;
