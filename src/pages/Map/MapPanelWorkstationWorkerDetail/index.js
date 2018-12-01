import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "bloomer";
import "../../../hooks/useClickOutside";
import Confirm from "../../../components/Confirm";
import useClickOutside from "../../../hooks/useClickOutside";
import createCRUDHook from "../../../hooks/crud";
import WorkerFormContainer from "../../Workers/WorkerFormContainer";

export function MapPanelWorkstationWorkerDetail(props) {
  const { close, workstation, assignedWorker } = props;

  const [isConfirmOpened, setIsConfirmOpened] = useState(false);

  const useWorkstations = createCRUDHook(
    `/floors/${workstation.floorId}/workstations`
  );
  const workstationsCRUD = useWorkstations();

  const ref = useRef(null);
  useClickOutside(ref, () => close());

  const unnasign = () => {
    const workstationToUpdate = { ...workstation, workerId: null };
    workstationsCRUD.update(workstationToUpdate);
    close();
  };

  const deleteWorkstation = () => {
    workstationsCRUD.del(workstation.id);
    close();
  };

  const closeConfirm = () => {
    setIsConfirmOpened(false);
  };

  return (
    <>
      {isConfirmOpened ? (
        <Confirm
          isActive={isConfirmOpened}
          onConfirm={deleteWorkstation}
          onCancel={() => closeConfirm()}
          title="Delete workstation"
          content={`Are you sure you want to delete the workerstation?`}
        />
      ) : (
        <div ref={ref}>
          <WorkerFormContainer
            worker={assignedWorker}
            closeDialog={closeConfirm}
          />
          <Button onClick={unnasign}>Unassign</Button>
          <Button onClick={() => setIsConfirmOpened(true)}>Delete</Button>
        </div>
      )}
    </>
  );
}

MapPanelWorkstationWorkerDetail.propTypes = {
  close: PropTypes.func.isRequired,
  workstation: PropTypes.object.isRequired,
  assignedWorker: PropTypes.object.isRequired
};

export default MapPanelWorkstationWorkerDetail;
