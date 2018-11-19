import React from "react";
import Layout from "../../Layout";
import SidePanel from "../SidePanel";
import MapPanel from "../MapPanel";
import "./Site.scss";

function Site({ floorId, offices, floors }) {
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
