import "./PopupSelectUser.scss";

import React, { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import CRUDContext from "../../../components/CRUDContext";
import "../../../hooks/useClickOutside";
import useClickOutside from "../../../hooks/useClickOutside";
import WorkerFormContainer from "../../Workers/WorkerFormContainer";
import PopupSelectUserWorkerPhoto from "../PopupSelectUserWorkerPhoto";

function PopupSelectUser({ close, workstation }) {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isExistentUser, setIsExistentUser] = useState(false);

  const { workersCRUD } = useContext(CRUDContext);
  const workers = workersCRUD.store;

  const ref = useRef(null);
  useClickOutside(ref, () => close());

  if (isNewUser) {
    // TODO: move to a component
    return (
      <div className="popup-select-user" ref={ref}>
        <WorkerFormContainer worker={{}} />
      </div>
    );
  }

  if (isExistentUser) {
    // TODO: move to a component
    return (
      <div className="popup-select-user existent-user" ref={ref}>
        <span>User</span>
        {workers.map(worker => (
          <PopupSelectUserWorkerPhoto
            worker={worker}
            key={worker.id}
            closePopup={close}
            workstation={workstation}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="popup-select-user" ref={ref}>
      <span>Assign user</span>
      <span onClick={() => setIsNewUser(true)}>New user</span>
      <span onClick={() => setIsExistentUser(true)}>Existent user</span>
    </div>
  );
}

PopupSelectUser.propTypes = {
  close: PropTypes.func.isRequired,
  workstation: PropTypes.object.isRequired
};

export default PopupSelectUser;
