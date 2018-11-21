import React from "react";
import MapPanelWorkstation from "../MapPanelWorkstation";

function MapPanelImage({ floor, image }) {
  return (
    <div className="MapPanelImage">
      <img alt={floor.name} src={image} />
      {floor.workstations.map(workstation => (
        <MapPanelWorkstation key={workstation.id} workstation={workstation} />
      ))}
    </div>
  );
}

export default MapPanelImage;
