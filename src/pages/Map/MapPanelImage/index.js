import React from "react";
import MapPanelWorkstation from "../MapPanelWorkstation";
import { API_URL } from "../../../constants";

/* https://stackoverflow.com/questions/5755312/getting-mouse-position-relative-to-content-area-of-an-element */

function getNumericStyleProperty(style, prop) {
  return parseInt(style.getPropertyValue(prop), 10);
}

function elementPosition(e) {
  let x = 0,
    y = 0;
  let inner = true;
  do {
    x += e.offsetLeft;
    y += e.offsetTop;
    const style = getComputedStyle(e, null);
    const borderTop = getNumericStyleProperty(style, "border-top-width");
    const borderLeft = getNumericStyleProperty(style, "border-left-width");
    y += borderTop;
    x += borderLeft;
    if (inner) {
      const paddingTop = getNumericStyleProperty(style, "padding-top");
      const paddingLeft = getNumericStyleProperty(style, "padding-left");
      y += paddingTop;
      x += paddingLeft;
    }
    inner = false;
  } while ((e = e.offsetParent));
  return [x, y];
}

function generateWorkstation(event) {
  const [elementX, elementY] = elementPosition(event.target);
  return {
    x:
      (100 * (event.clientX - elementX + window.scrollX)) /
      event.target.offsetWidth,
    y:
      (100 * (event.clientY - elementY + window.scrollY)) /
      event.target.offsetHeight,
    workerId: null
  };
}

function MapPanelImage({
  alt,
  image,
  workstations,
  onCreateWorkstation,
  workstationsCRUD
}) {
  return (
    <div className="map-panel-image">
      <img
        className="panel-image"
        onClick={event => {
          onCreateWorkstation(generateWorkstation(event));
        }}
        alt={alt}
        src={`${API_URL}/files/${image}`}
      />
      {workstations.map(workstation => (
        <MapPanelWorkstation
          key={workstation.id}
          workstation={workstation}
          workstationsCRUD={workstationsCRUD}
        />
      ))}
    </div>
  );
}

export default MapPanelImage;
