import React from "react";
import MapPanelFilterToolbar from "../MapPanelFilterToolbar";
import MapPanelImage from "../MapPanelImage";
import MapNewImage from "../MapPanelImage";

function MapPanel({ floor }) {
  return (
    <div className="Map-panel">
      <MapPanelFilterToolbar />
      <div className="Map-panel-display-area">
        {floor ? <MapPanelImage floor={floor} /> : <MapNewImage />}
      </div>
    </div>
  );
}

export default MapPanel;
