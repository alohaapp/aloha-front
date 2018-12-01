import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import { API_URL } from "../../../constants";

function WorkerImageDropzone({ onDrop, workerPhotoId }) {
  const [preview, setPreview] = useState(null);

  const onImageDrop = ([image]) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setPreview(reader.result);
      onDrop(reader.result);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  };

  let photoSrc = null;
  if (preview) {
    photoSrc = preview;
  } else if (workerPhotoId) {
    photoSrc = `${API_URL}/files/${workerPhotoId}`;
  }

  return (
    <>
      <Dropzone
        className="user-new-image"
        multiple={false}
        accept="image/svg+xml, image/jpeg, image/png"
        onDrop={onImageDrop}
      >
        <p>Click or drag to add a photo for this user</p>
      </Dropzone>

      {photoSrc ? <img src={photoSrc} alt="user" /> : null}
    </>
  );
}

WorkerImageDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  workerPhotoId: PropTypes.number
};

export default WorkerImageDropzone;
