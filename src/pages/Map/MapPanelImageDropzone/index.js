import React from "react";
import Dropzone from "react-dropzone";

function MapPanelImageDropzone({ onDrop }) {
  const onImageDrop = ([image]) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      onDrop(reader.result);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  };

  return (
    <Dropzone
      className="map-new-image"
      multiple={false}
      accept="image/svg+xml, image/jpeg, image/png"
      onDrop={onImageDrop}
    >
      <p>Click or drag to add a map for this floor</p>
    </Dropzone>
  );
}

export default MapPanelImageDropzone;
