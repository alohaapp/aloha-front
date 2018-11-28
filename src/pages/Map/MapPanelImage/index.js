import React from "react";
import MapPanelWorkstation from "../MapPanelWorkstation";

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
  console.log(elementX, elementY);
  const x =
    (100 * (event.clientX - elementX + window.scrollX)) /
    event.target.offsetWidth;
  const y =
    (100 * (event.clientY - elementY + window.scrollY)) /
    event.target.offsetHeight;
  return {
    x,
    y,
    officeId: null,
    floorId: null,
    workerId: null
  };
}

function MapPanelImage({ alt, image, workstations, onCreateWorkstation }) {
  return (
    <div className="MapPanelImage">
      <img
        onClick={event => {
          console.log(generateWorkstation(event));
        }}
        alt={alt}
        src={image}
      />
      {workstations.map(workstation => (
        <MapPanelWorkstation key={workstation.id} workstation={workstation} />
      ))}
    </div>
  );
}

export default MapPanelImage;
