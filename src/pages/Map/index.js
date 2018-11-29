import "./Map.scss";
import React, { useContext } from "react";
import Site from "./Site";
import { Redirect } from "react-router-dom";
import CRUDContext from "../../components/CRUDContext";

const findFirstFloorId = (floors, officeId) => {
  const floor = floors.find(floor => floor.officeId === officeId);
  return floor && floor.id;
};

function Map({ officeId, floorId }) {
  const { officesCRUD, floorsCRUD } = useContext(CRUDContext);
  const offices = officesCRUD.store;
  const floors = floorsCRUD.store;
  const callEnd = Boolean(offices && floors);

  if (callEnd && !offices.length) {
    // TODO: first office
    return null;
  }

  const office =
    callEnd && officeId && offices.find(office => office.id === officeId);

  const floor =
    callEnd &&
    office &&
    floorId &&
    floors.find(floor => floor.id === floorId && floor.officeId === officeId);

  const redirect =
    callEnd &&
    (!office
      ? `${offices[0].id}/${findFirstFloorId(floors, offices[0].id)}`
      : !floor
        ? findFirstFloorId(floors, offices.id)
          ? `${offices.id}/${findFirstFloorId(floors, offices.id)}`
          : false
        : false);

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
