import "./Map.scss";
import React, { useContext } from "react";
import Site from "./Site";
import { Redirect } from "react-router-dom";
import CRUDContext from "../../components/CRUDContext";
import FilterContext from "../../components/FilterContext";

const findFirstFloorId = (floors, officeId) => {
  const floor = floors.find(floor => floor.officeId === officeId);
  return floor && floor.id;
};

function Map({ officeId, floorId }) {
  const { officesCRUD, floorsCRUD } = useContext(CRUDContext);
  const offices = officesCRUD.store;
  const floors = floorsCRUD.store;
  const callEnd = Boolean(offices && floors);

  const { search, username } = useContext(FilterContext);
  const queryString = `${search ? `?search=${search}` : ""}${
    username ? `${search ? "&" : "?"}username=${username}` : ""
  }`;

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
      redirect = `${officeIdRedirect}${
        floorIdRedirect ? `/${floorIdRedirect}` : ""
      }`;
    }
  }

  return (
    <div className={`map${!callEnd ? " loading" : ""}`}>
      {callEnd &&
        (redirect ? (
          <Redirect to={`/map/${redirect}${queryString}`} />
        ) : (
          <Site office={office} floor={floor} />
        ))}
    </div>
  );
}

export default Map;
