import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";

function WorkerImageDropzone({ onDrop }) {
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
      className="user-new-image"
      multiple={false}
      accept="image/svg+xml, image/jpeg, image/png"
      onDrop={onImageDrop}
    >
      <p>Click or drag to add a photo for this user</p>
    </Dropzone>
  );
}

WorkerImageDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired
};

export default WorkerImageDropzone;
