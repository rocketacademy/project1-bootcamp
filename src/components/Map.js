import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";

function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/363b3c4e-0ad0-4a51-b858-c019423b9d2c/style.json?key=${process.env.REACT_APP_MAPTILER_KEY}`,
      center: [103.8198, 1.3521],
      zoom: 10,
    });

    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainer} style={{ width: "100%", height: "100%" }}></div>
  );
}

export default Map;
