import React from "react";
import MapPanelFilterToolbar from "../MapPanelFilterToolbar";
import MapPanelImage from "../MapPanelImage";
import MapPanelWorkstation from "../MapPanelWorkstation";

function MapPanel({ floor }) {
  if (!floor) return null;

  const filteredWorkstations = floor.workstations;

  return (
    <div className="Map-panel">
      <MapPanelFilterToolbar />
      <div className="Map-panel-display-area">
        <MapPanelImage src={floor.imageUrl} />
        {filteredWorkstations &&
          filteredWorkstations.map(workstation => (
            <MapPanelWorkstation workstation={workstation} />
          ))}
      </div>
    </div>
  );
}

export default MapPanel;
