import "./Map.scss";
import React, { useContext } from "react";
import Site from "./Site";
import { Redirect } from "react-router-dom";
import CRUDContext from "../../components/CRUDContext";

const findFirstFloorId = (floors, officeId) => {
  const floor = floors.find(floor => floor.officeId === officeId);
  return floor && floor.id;
};

function Map({ officeId, floorId, filters }) {
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

  let redirect = false;
  if (callEnd && (!office || !floor)) {
    const officeIdRedirect = office ? office.id : offices[0].id;
    const floorIdRedirect = findFirstFloorId(floors, officeIdRedirect);
    if (!office || floorId || floorIdRedirect) {
      redirect = `${officeIdRedirect}/${floorIdRedirect || ""}`;
    }
  }

  return (
    <div className={`map${!callEnd ? " loading" : ""}`}>
      {callEnd &&
        (redirect ? (
          <Redirect to={`/map/${redirect}`} />
        ) : (
          <Site office={office} floor={floor} filters={filters} />
        ))}
    </div>
  );
}

export default Map;
