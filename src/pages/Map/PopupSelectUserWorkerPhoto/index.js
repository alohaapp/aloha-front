import "./PopupSelectUserWorkerPhoto.scss";

import React from "react";
import PropTypes from "prop-types";
import Person from "../../../assets/img/person.svg";
import { API_URL } from "../../../constants";

function PopupSelectUserWorkerPhoto({
  worker,
  closePopup,
  workstation,
  workstationsCRUD
}) {
  const assignWorkerToWorkstation = () => {
    if (!worker.workstationId) {
      const workstationToUpdate = { ...workstation, workerId: worker.id };
      workstationsCRUD.update(workstationToUpdate);
      closePopup();
    }
  };

  return (
    <div
      key={worker.id}
      className="popup-select-user-worker-photo-container"
      onClick={assignWorkerToWorkstation}
    >
      {worker.workstationId ? (
        <i className="popup-select-user-worker-mark material-icons md-18">
          check_circle
        </i>
      ) : null}
      <img
        className="worker-photo"
        src={worker.photoId ? `${API_URL}/files/${worker.photoId}` : Person}
        alt="user"
      />
      <span>{worker.name}</span>
    </div>
  );
}

PopupSelectUserWorkerPhoto.propTypes = {
  worker: PropTypes.object.isRequired,
  closePopup: PropTypes.func.isRequired,
  workstation: PropTypes.object.isRequired,
  workstationsCRUD: PropTypes.object.isRequired
};

export default PopupSelectUserWorkerPhoto;
