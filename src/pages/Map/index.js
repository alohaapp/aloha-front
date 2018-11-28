import "./Map.scss";
import React, { useContext } from "react";
import Site from "./Site";
import { Redirect } from "react-router-dom";
import CRUDContext from "../../components/CRUDContext";

const findFirstFloorId = (floors, officeId) => {
  const floor = floors.find(floor => floor.officeId === officeId);
  return floor && floor.id;
};

function Map({ floorId }) {
  const { officesCRUD, floorsCRUD } = useContext(CRUDContext);
  const offices = officesCRUD.store;
  const floors = floorsCRUD.store;

  const callEnd = Boolean(offices && floors);

  const floor =
    callEnd && floorId && floors.find(floor => floor.id === floorId);
  const office =
    callEnd &&
    (floor ? offices.find(office => office.id === floor.officeId) : offices[0]);

  const redirect =
    callEnd &&
    (!floorId || !floor) &&
    office &&
    findFirstFloorId(floors, office.id);

  return (
    <div className={`Map${!callEnd ? " loading" : ""}`}>
      {offices &&
        (redirect ? (
          <Redirect to={`/map/${redirect}`} />
        ) : (
          <Site office={office} floor={floor} />
        ))}
    </div>
  );
}

export default Map;
