import "./MapPanelWorkstation.scss";

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "bloomer";
import CRUDContext from "../../../components/CRUDContext";
import PopupSelectUser from "../PopupSelectUser";
import MapPanelWorkstationWorkerDetail from "../MapPanelWorkstationWorkerDetail";
import { API_URL } from "../../../constants";
import Person from "../../../assets/img/person.svg";

function MapPanelWorkstation({ workstation, workstationsCRUD, found }) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isWorkerDetailOpened, setIsWorkerDetailOpened] = useState(false);
  const { workersCRUD } = useContext(CRUDContext);

  // Get the worker if the worksation has one
  let assignedWorker = null;
  if (workstation.workerId) {
    assignedWorker = workersCRUD.store.find(
      worker => worker.id === workstation.workerId
    );
  }

  const positionStyle = {
    left: `${workstation.x}%`,
    top: `${workstation.y}%`
  };

  const closePopup = () => {
    setIsPopupOpened(false);
  };
  const togglePopup = () => {
    setIsPopupOpened(!isPopupOpened);
  };

  const closeWorkerDetail = () => {
    setIsWorkerDetailOpened(false);
  };
  const toggleWorkerDetail = () => {
    setIsWorkerDetailOpened(!isWorkerDetailOpened);
  };

  return (
    <div
      className={`workstation ${found ? "found" : "not-found"}`}
      style={positionStyle}
    >
      {assignedWorker ? (
        <img
          onClick={() => toggleWorkerDetail()}
          className="assigned-worker-photo"
          src={
            assignedWorker.photoId
              ? `${API_URL}/files/${assignedWorker.photoId}`
              : Person
          }
          alt="user"
        />
      ) : (
        <Button onClick={() => togglePopup()}>
          <i className="material-icons md-18">person_add</i>
        </Button>
      )}

      {isPopupOpened ? (
        <PopupSelectUser
          close={closePopup}
          workstation={workstation}
          workstationsCRUD={workstationsCRUD}
        />
      ) : null}

      {isWorkerDetailOpened ? (
        <MapPanelWorkstationWorkerDetail
          close={closeWorkerDetail}
          workstation={workstation}
          assignedWorker={assignedWorker}
          workstationsCRUD={workstationsCRUD}
        />
      ) : null}
    </div>
  );
}

MapPanelWorkstation.propTypes = {
  workstation: PropTypes.object.isRequired,
  workstationsCRUD: PropTypes.object.isRequired
};

export default MapPanelWorkstation;
