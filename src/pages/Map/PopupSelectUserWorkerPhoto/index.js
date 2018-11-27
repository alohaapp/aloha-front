import "./PopupSelectUserWorkerPhoto.scss";

import React from "react";
import PropTypes from "prop-types";
import FallbackImage from "../../../assets/img/fallback.jpg";

function PopupSelectUserWorkerPhoto({ worker, closePopup }) {
  const assignWorkerToWorkstation = () => {
    // TODO: API call
    closePopup();
  };

  return (
    <div
      key={worker.id}
      className="popup-select-user-worker-photo-container"
      onClick={assignWorkerToWorkstation}
    >
      {worker.workstationId ? (
        <i className="material-icons md-18">check_circle</i>
      ) : null}
      <img
        className="worker-photo"
        src={worker.photoUrl ? worker.photoUrl : FallbackImage}
        alt="user"
      />
    </div>
  );
}

PopupSelectUserWorkerPhoto.propTypes = {
  worker: PropTypes.object.isRequired,
  closePopup: PropTypes.func.isRequired
};

export default PopupSelectUserWorkerPhoto;
