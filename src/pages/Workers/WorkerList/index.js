import "./WorkerList.scss";

import React, { useState, useContext } from "react";
import CRUDContext from "../../../components/CRUDContext";
import PropTypes from "prop-types";
import { Table, Button } from "bloomer";
import Confirm from "../../../components/Confirm";
import WorkerListItem from "../WorkerListItem";
import WorkerDialog from "../WorkerDialog";
import {
  WORKER_PHOTO_URL,
  WORKER_USERNAME,
  WORKER_NAME,
  WORKER_SURNAME,
  WORKER_EMAIL,
  WORKER_NOTES,
  WORKER_ACTIONS
} from "../../../constants";

function WorkerList({ workers }) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [workerSelected, setWorkerSelected] = useState({});
  const [isDeleteConfirmOpened, setIsDeleteConfirmOpened] = useState(false);
  const { workersCRUD } = useContext(CRUDContext);

  const openWorkerForm = (worker = {}) => {
    setIsDialogOpened(true);
    setWorkerSelected(worker);
  };

  const closeWorkerForm = () => {
    setIsDialogOpened(false);
    setWorkerSelected({});
  };

  const openDeleteConfirm = (worker = {}) => {
    setWorkerSelected(worker);
    setIsDeleteConfirmOpened(true);
  };

  const closeDeleteConfirm = () => {
    setIsDeleteConfirmOpened(false);
    setWorkerSelected({});
  };

  const deleteWorker = workerId => {
    workersCRUD.del(workerId);
    closeDeleteConfirm();
  };

  return (
    <>
      {workers.length > 0 ? (
        <Table className="workers-list">
          <thead>
            <tr>
              <th>{WORKER_PHOTO_URL}</th>
              <th>{WORKER_USERNAME}</th>
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
                openDeleteConfirm={openDeleteConfirm}
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

      {isDeleteConfirmOpened ? (
        <Confirm
          isActive={isDeleteConfirmOpened}
          onConfirm={() => deleteWorker(workerSelected.id)}
          onCancel={() => closeDeleteConfirm()}
          title="Delete worker"
          content={`Are you sure you want to delete the worker ${
            workerSelected.name
          } ${workerSelected.surname}?`}
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
