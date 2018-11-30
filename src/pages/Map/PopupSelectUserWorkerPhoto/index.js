import "./PopupSelectUserWorkerPhoto.scss";

import React from "react";
import PropTypes from "prop-types";
import createCRUDHook from "../../../hooks/crud";
import FallbackImage from "../../../assets/img/fallback.jpg";

function PopupSelectUserWorkerPhoto({ worker, closePopup, workstation }) {
  const { floorId } = workstation;
  const useWorkstations = createCRUDHook(`/floors/${floorId}/workstations`);
  const workstationsCRUD = useWorkstations();

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
        <i className="material-icons md-18">check_circle</i>
      ) : null}
      <img
        className="worker-photo"
        src={worker.photoUrl ? worker.photoUrl : FallbackImage}
        alt="user"
      />
      <span>{worker.name}</span>
    </div>
  );
}

PopupSelectUserWorkerPhoto.propTypes = {
  worker: PropTypes.object.isRequired,
  closePopup: PropTypes.func.isRequired
};

export default PopupSelectUserWorkerPhoto;
