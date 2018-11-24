import "./Map.scss";
import React, { useContext } from "react";
import Site from "./Site";
import NotFound from "../NotFound";
import { Redirect } from "react-router-dom";
import CRUDContext from "../../components/CRUDContext";

const getFloors = offices => {
  const floorsObject = {};
  offices.forEach(office => {
    office.floors.forEach(floor => {
      floorsObject[floor.id] = floor;
    });
  });
  return floorsObject;
};

const findOffice = (offices, floorId) =>
  offices.find(office => office.floors.find(floor => floor.id === floorId));

function Map({ floorId }) {
  const { officesCRUD } = useContext(CRUDContext);
  const offices = officesCRUD.store;

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
          <Site
            floorId={floorId}
            floors={getFloors(offices)}
            offices={offices}
          />
        ))}
    </div>
  );
}

export default Map;
