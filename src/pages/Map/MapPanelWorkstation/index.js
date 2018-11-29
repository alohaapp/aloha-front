import "./MapPanelWorkstation.scss";

import React, { useState, useContext } from "react";
import { Button } from "bloomer";
import CRUDContext from "../../../components/CRUDContext";
import PopupSelectUser from "../PopupSelectUser";

function MapPanelWorkstation({ workstation }) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
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

  return (
    <div>
      {assignedWorker ? (
        <img
          className="assigned-worker-photo"
          src={assignedWorker.photoUrl}
          alt="user"
          style={positionStyle}
        />
      ) : (
        <Button
          onClick={() => togglePopup()}
          className="MapPanelWorkstation"
          style={positionStyle}
        >
          <i className="material-icons md-18">person_add</i>
        </Button>
      )}

      {isPopupOpened ? (
        <PopupSelectUser close={closePopup} workstation={workstation} />
      ) : null}
    </div>
  );
}

export default MapPanelWorkstation;
