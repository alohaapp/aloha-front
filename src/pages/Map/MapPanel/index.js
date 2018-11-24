import React, { useState, useEffect } from "react";
import MapPanelFilterToolbar from "../MapPanelFilterToolbar";
import MapPanelImage from "../MapPanelImage";
import MapPanelImageDropzone from "../MapPanelImageDropzone";

function MapPanel({ floor }) {
  const [image, setImage] = useState(floor.imageUrl);
  // Change map image when floor changes
  useEffect(() => void setImage(floor.imageUrl), [floor]);

  return (
    <div className="Map-panel">
      <MapPanelFilterToolbar />
      <div className="Map-panel-display-area">
        {image ? (
          <MapPanelImage
            image={image}
            alt={floor.name}
            workstations={floor.workstations}
          />
        ) : (
          <MapPanelImageDropzone onDrop={setImage} />
        )}
      </div>
    </div>
  );
}

export default MapPanel;
