import React from "react";
import Dropzone from "react-dropzone";

function MapNewImage({ setImage }) {
  const onDrop = ([image]) => {
    setImage(URL.createObjectURL(image));
  };

  return (
    <Dropzone
      className="MapNewImage"
      multiple={false}
      accept="image/svg+xml, image/jpeg, image/png"
      onDrop={onDrop}
    >
      <p>Click or drag to add a map for this floor</p>
    </Dropzone>
  );
}

export default MapNewImage;
