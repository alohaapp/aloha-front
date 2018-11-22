import React from "react";
import Dropzone from "react-dropzone";

function MapPanelImageDropzone({ onDrop }) {
  const onImageDrop = ([image]) => {
    onDrop(URL.createObjectURL(image));
  };

  return (
    <Dropzone
      className="MapNewImage"
      multiple={false}
      accept="image/svg+xml, image/jpeg, image/png"
      onDrop={onImageDrop}
    >
      <p>Click or drag to add a map for this floor</p>
    </Dropzone>
  );
}

export default MapPanelImageDropzone;
