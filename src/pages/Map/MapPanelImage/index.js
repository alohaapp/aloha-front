import React from "react";
import MapPanelWorkstation from "../MapPanelWorkstation";

function MapPanelImage({ floor }) {
  return (
    <div className="MapPanelImage">
      <img alt={floor.name} src={floor.imageUrl} />
      {floor.workstations.map(workstation => (
        <MapPanelWorkstation workstation={workstation} />
      ))}
    </div>
  );
}

export default MapPanelImage;
