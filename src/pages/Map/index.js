import "./Map.scss";
import React from "react";
import Site from "./Site";
import NotFound from "../NotFound";
import { Redirect } from "react-router-dom";
import useAPI from "../../hooks/useAPI";

const findOffice = (offices, floorId) =>
  offices.find(office => office.floors.find(floor => floor.id === floorId));

function Map({ floorId }) {
  const offices = useAPI({ url: "/offices" });
  const office =
    floorId && offices ? findOffice(offices, floorId) : offices && offices[0];

  if (offices && !office) {
    return <NotFound />;
  }

  const redirect =
    offices && !floorId && office.floors[0] && office.floors[0].id;

  return (
    <div className={`Map${!offices ? " loading" : ""}`}>
      {offices &&
        (redirect ? (
          <Redirect to={`/map/${redirect}`} />
        ) : (
          <Site floorId={floorId} offices={offices} />
        ))}
    </div>
  );
}

export default Map;
