import React from "react";
import SidePanel from "../SidePanel";
import MapPanel from "../MapPanel";
import "./Site.scss";

function Site({ offices, floor }) {
  return (
    <div className="Site">
      <header className="Site-header" />
      <SidePanel offices={offices} />
      {floor && <MapPanel floor={floor} />}
    </div>
  );
}

export default Site;
