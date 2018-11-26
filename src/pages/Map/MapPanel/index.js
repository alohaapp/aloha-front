import React, { useState, useEffect } from "react";
import MapPanelFilterToolbar from "../MapPanelFilterToolbar";
import MapPanelImage from "../MapPanelImage";
import MapPanelImageDropzone from "../MapPanelImageDropzone";
import createCRUDHook from "../../../hooks/crud";

function MapPanel({ floor }) {
  const [image, setImage] = useState(floor.imageUrl);
  // Change map image when floor changes
  useEffect(() => void setImage(floor.imageUrl), [floor]);

  const useWorkstations = createCRUDHook(`/floors/${floor.id}/workstations`);
  const workstationsCRUD = useWorkstations();
  useEffect(() => workstationsCRUD.fetch(), [floor.id]);
  const workstations = workstationsCRUD.store;

  return (
    <div className={`Map-panel${workstations ? "" : " loading"}`}>
      <MapPanelFilterToolbar />
      <div className="Map-panel-display-area">
        {image ? (
          workstations && (
            <MapPanelImage
              image={image}
              alt={floor.name}
              workstations={workstations}
            />
          )
        ) : (
          <MapPanelImageDropzone onDrop={setImage} />
        )}
      </div>
    </div>
  );
}

export default MapPanel;
