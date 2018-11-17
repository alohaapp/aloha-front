import React from "react";
import Site from "./Site";
import NotFound from "../NotFound";
import useOffice from "./hooks/useOffice";

const getFirstId = offices =>
  offices[0] && offices[0].floors[0] && offices[0].floors[0].id;

const hasFloors = floors => Boolean(Object.keys(floors).length);

function Map({ floorId }) {
  const [offices, floors, loading] = useOffice(floorId);

  const floor = floorId ? floors[floorId] : floors[getFirstId(offices)];

  if (!loading && !floor && hasFloors(floors)) {
    return <NotFound />;
  }
  return (
    <div className={`Map${loading ? " loading" : ""}`}>
      {!loading && <Site floor={floor} offices={offices} />}
    </div>
  );
}

export default Map;
