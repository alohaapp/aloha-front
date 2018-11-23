import React from "react";
import MapPanelWorkstation from "../MapPanelWorkstation";

function MapPanelImage({ alt, image, workstations }) {
  return (
    <div className="MapPanelImage">
      <img alt={alt} src={image} />
      {workstations.map(workstation => (
        <MapPanelWorkstation key={workstation.id} workstation={workstation} />
      ))}
    </div>
  );
}

export default MapPanelImage;
