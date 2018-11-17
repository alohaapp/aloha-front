import React from "react";
import Site from "./Site";
import NotFound from "../NotFound";
import useOffice from "./hooks/useOffice";

const getFirstId = offices =>
  offices[0] && offices[0].floors[0] && offices[0].floors[0].id;

const hasFloors = floors => Boolean(Object.keys(floors).length);

function Map({ floorId }) {
  const [map, loading] = useOffice(floorId);

  const floor = floorId
    ? map.floors[floorId]
    : map.floors[getFirstId(map.offices)];

  if (!loading && !floor && hasFloors(map.floors)) {
    return <NotFound />;
  }
  return (
    <div className={`Map${loading ? " loading" : ""}`}>
      {!loading && <Site floor={floor} offices={map.offices} />}
    </div>
  );
}

export default Map;
