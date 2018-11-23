import React from "react";
import Layout from "../../Layout";
import SidePanel from "../SidePanel";
import MapPanel from "../MapPanel";

const getFloors = offices => {
  const floorsObject = {};
  offices.forEach(office => {
    office.floors.forEach(floor => {
      floorsObject[floor.id] = floor;
    });
  });
  return floorsObject;
};

function Site({ floorId, offices }) {
  const floors = getFloors(offices);
  return (
    <Layout
      sidebar={
        <SidePanel
          offices={offices}
          officeId={floorId && floors[floorId].officeId}
          floorId={floorId}
        />
      }
      content={floors[floorId] && <MapPanel floor={floors[floorId]} />}
    />
  );
}

export default Site;
