import React from "react";

function MapPanelWorkstation({ workstation }) {
  const positionStyle = {
    left: `${workstation.x}%`,
    top: `${workstation.y}%`
  };
  return (
    <div className="MapPanelWorkstation" style={positionStyle}>
      <i className="material-icons md-18">person_add</i>
    </div>
  );
}

export default MapPanelWorkstation;
