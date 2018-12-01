import "./PopupSelectUser.scss";

import React, { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Input } from "bloomer";
import CRUDContext from "../../../components/CRUDContext";
import "../../../hooks/useClickOutside";
import useClickOutside from "../../../hooks/useClickOutside";
import WorkerFormContainer from "../../Workers/WorkerFormContainer";
import PopupSelectUserWorkerPhoto from "../PopupSelectUserWorkerPhoto";

function PopupSelectUser({ close, workstation }) {
  const { workersCRUD } = useContext(CRUDContext);
  const workers = workersCRUD.store;

  const [isNewUser, setIsNewUser] = useState(false);
  const [isExistentUser, setIsExistentUser] = useState(false);
  const [filteredList, setFilteredList] = useState(workers);

  const ref = useRef(null);
  useClickOutside(ref, () => close());

  const filterWorkers = event => {
    const searchCriteria = event.target.value;
    if (!searchCriteria) {
      setFilteredList(workers);
    }
    const filteredWorkers = workers.filter(worker => {
      return (
        worker.name.toLowerCase().includes(searchCriteria.toLowerCase()) ||
        worker.surname.toLowerCase().includes(searchCriteria.toLowerCase()) ||
        worker.email.toLowerCase().includes(searchCriteria.toLowerCase()) ||
        worker.userName.toLowerCase().includes(searchCriteria.toLowerCase())
      );
    });

    setFilteredList(filteredWorkers);
  };

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
        <div>
          <div className="search">
            <i className="material-icons">search</i>
            <Input autoFocus onInput={filterWorkers} type="text" />
          </div>
          <i onClick={close} className="material-icons md-18 close">
            cancel
          </i>
        </div>

        {filteredList.length > 0
          ? filteredList.map(worker => (
              <PopupSelectUserWorkerPhoto
                worker={worker}
                key={worker.id}
                closePopup={close}
                workstation={workstation}
              />
            ))
          : "There are no results."}
      </div>
    );
  }

  return (
    <div className="popup-select-user" ref={ref}>
      <span className="popup-select-user__heading">Assign user</span>
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
