import "./WorkerList.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Table, Button } from "bloomer";
import WorkerListItem from "../WorkerListItem";
import WorkerDialog from "../WorkerDialog";
import {
  WORKER_PHOTO_URL,
  WORKER_NAME,
  WORKER_SURNAME,
  WORKER_EMAIL,
  WORKER_NOTES,
  WORKER_ACTIONS
} from "../../../constants";

function WorkerList({ workers }) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [workerSelected, setWorkerSelected] = useState({});

  const openWorkerForm = (worker = {}) => {
    setIsDialogOpened(true);
    setWorkerSelected(worker);
  };

  const closeWorkerForm = () => {
    setIsDialogOpened(false);
    setWorkerSelected({});
  };

  return (
    <>
      {workers.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>{WORKER_PHOTO_URL}</th>
              <th>{WORKER_NAME}</th>
              <th>{WORKER_SURNAME}</th>
              <th>{WORKER_EMAIL}</th>
              <th>{WORKER_NOTES}</th>
              <th>{WORKER_ACTIONS}</th>
            </tr>
          </thead>
          <tbody>
            {workers.map(worker => (
              <WorkerListItem
                key={worker.id}
                openWorkerForm={openWorkerForm}
                worker={worker}
              />
            ))}
          </tbody>
        </Table>
      ) : null}

      {isDialogOpened ? (
        <WorkerDialog
          isActive={isDialogOpened}
          closeDialog={closeWorkerForm}
          worker={workerSelected}
        />
      ) : null}
      <Button isColor="primary" onClick={() => openWorkerForm()}>
        Create new worker
      </Button>
    </>
  );
}

WorkerList.propTypes = {
  workers: PropTypes.array.isRequired
};

export default WorkerList;
