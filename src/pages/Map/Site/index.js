import React from "react";
import Layout from "../../Layout";
import SidePanel from "../SidePanel";
import MapPanel from "../MapPanel";

function Site({ office, floor, filters }) {
  return (
    <Layout
      sidebar={
        <SidePanel officeId={office && office.id} floorId={floor && floor.id} />
      }
      content={floor ? <MapPanel floor={floor} /> : false}
      filters={filters}
      isMap={true}
    />
  );
}

export default Site;
