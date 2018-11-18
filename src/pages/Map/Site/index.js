import React from "react";
import SidePanel from "../SidePanel";
import MapPanel from "../MapPanel";
import "./Site.scss";

function Site({ floorId, offices, floors }) {
  return (
    <div className="Site">
      <header className="Site-header" />
      <SidePanel
        offices={offices}
        officeId={floorId && floors[floorId].officeId}
        floorId={floorId}
      />
      <MapPanel floor={floors[floorId]} />
    </div>
  );
}

export default Site;
