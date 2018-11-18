import React, { useState } from "react";
import MapPanelFilterToolbar from "../MapPanelFilterToolbar";
import MapPanelImage from "../MapPanelImage";
import MapNewImage from "../MapNewImage";

function MapPanel({ floor }) {
  const [image, setImage] = useState(floor.imageUrl);

  console.log(image);
  return (
    <div className="Map-panel">
      <MapPanelFilterToolbar />
      <div className="Map-panel-display-area">
        {image ? (
          <MapPanelImage image={image} floor={floor} />
        ) : (
          <MapNewImage setImage={setImage} />
        )}
      </div>
    </div>
  );
}

export default MapPanel;
