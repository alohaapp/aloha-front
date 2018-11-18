import "./MapPanelImage.scss";
import React from "react";
import MapPanelWorkstation from "../MapPanelWorkstation";

function MapPanelImage({ floor, image }) {
  return (
    <div className="MapPanelImage">
      <img alt={floor.name} src={image} />
      {floor.workstations.map(workstation => (
        <MapPanelWorkstation workstation={workstation} />
      ))}
    </div>
  );
}

export default MapPanelImage;
