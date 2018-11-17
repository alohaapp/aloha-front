import React from "react";
import Site from "./Site";

function Map({ maps, setMaps, floorId }) {
  return <Site floorId={floorId} offices={maps.offices} floors={maps.floors} />;
}

export default Map;
