import React, { useState } from "react";
import Dropzone from "react-dropzone";

function MapNewImage() {
  return (
    <Dropzone className="MapNewImage">
      <p>Click or drag to add the mapof the first floor</p>
    </Dropzone>
  );
}

export default MapNewImage;
