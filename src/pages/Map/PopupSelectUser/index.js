import "./PopupSelectUser.scss";

import React, { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Input } from "bloomer";
import CRUDContext from "../../../components/CRUDContext";
import "../../../hooks/useClickOutside";
import useClickOutside from "../../../hooks/useClickOutside";
import PopupSelectUserWorkerPhoto from "../PopupSelectUserWorkerPhoto";
import WorkerDialog from "../../Workers/WorkerDialog";

function PopupSelectUser({ close, workstation, workstationsCRUD }) {
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

  const deleteWorkstation = () => {
    workstationsCRUD.del(workstation.id);
    close();
  };

  if (isNewUser) {
    return (
      <WorkerDialog
        worker={{}}
        isActive={isNewUser}
        closeDialog={() => setIsNewUser(false)}
      />
    );
  }

  if (isExistentUser) {
    // TODO: move to a component
    return (
      <div className="popup-select-user existent-user" ref={ref}>
        <div className="existent-user__form">
          <div className="search">
            <Input
              placeholder="Search user"
              autoFocus
              onInput={filterWorkers}
              type="text"
            />
          </div>
        </div>
        <div className="existent-user__list">
          {filteredList.length > 0
            ? filteredList.map(worker => (
                <PopupSelectUserWorkerPhoto
                  worker={worker}
                  key={worker.id}
                  closePopup={close}
                  workstation={workstation}
                  workstationsCRUD={workstationsCRUD}
                />
              ))
            : "There are no results."}
        </div>
      </div>
    );
  }

  return (
    <div className="popup-select-user" ref={ref}>
      <span className="popup-select-user__heading">Assign user</span>
      <span onClick={() => setIsNewUser(true)}>New user</span>
      <span onClick={() => setIsExistentUser(true)}>Existent user</span>
      <span onClick={deleteWorkstation}>Delete workstation</span>
    </div>
  );
}

PopupSelectUser.propTypes = {
  close: PropTypes.func.isRequired,
  workstation: PropTypes.object.isRequired,
  workstationsCRUD: PropTypes.object.isRequired
};

export default PopupSelectUser;
