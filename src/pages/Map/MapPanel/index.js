import React from "react";
import MapPanelImage from "../MapPanelImage";
import MapNewImage from "../MapNewImage";

function MapPanel({ floor }) {
  console.log(floor);

  return (
    <div className="MapPanel">
      {floor ? <MapPanelImage image={floor.imageUrl} /> : <MapNewImage />}
    </div>
  );
}

export default MapPanel;
