import React from "react";
import { Icon } from "bloomer";

function MapPanelWorkstation({ workstation }) {
  const positionStyle = {
    left: `${workstation.x}%`,
    bottom: `${workstation.y}%`
  };
  return (
    <div className="MapPanelWorkstation" style={positionStyle}>
      <Icon isSize="small" className="mdi mdi-add mdi-24px" />
    </div>
  );
}

export default MapPanelWorkstation;
