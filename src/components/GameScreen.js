import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";

function GameScreen() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${process.env.REACT_APP_MAPTILER_KEY}`,
      center: [103.8198, 1.3521],
      zoom: 10,
    });

    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainer} style={{ width: "100%", height: "600px" }}></div>
  );
}

export default GameScreen;
