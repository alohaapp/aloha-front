import React from "react";
import MapPanelFilterToolbar from "../MapPanelFilterToolbar";
import MapPanelImage from "../MapPanelImage";
import MapNewImage from "../MapNewImage";

function MapPanel({ floor }) {
  console.log(floor.imageUrl);
  return (
    <div className="Map-panel">
      <MapPanelFilterToolbar />
      <div className="Map-panel-display-area">
        {floor.imageUrl ? <MapPanelImage floor={floor} /> : <MapNewImage />}
      </div>
    </div>
  );
}

export default MapPanel;
