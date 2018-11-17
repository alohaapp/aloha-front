import "./WorkerList.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Table } from "bloomer";
import WorkerListItem from "../WorkerListItem";
import WorkerDialog from "../WorkerDialog";
import {
  WORKER_PHOTO_URL,
  WORKER_NAME,
  WORKER_SURNAME,
  WORKER_EMAIL,
  WORKER_NOTES
} from "../../../constants";

function WorkerList(props) {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [workerSelected, setWorkerSelected] = useState({});

  const openWorkerForm = worker => {
    setIsDialogOpened(true);
    setWorkerSelected(worker);
  };

  const closeWorkerForm = () => {
    setIsDialogOpened(false);
    setWorkerSelected({});
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>{WORKER_PHOTO_URL}</th>
            <th>{WORKER_NAME}</th>
            <th>{WORKER_SURNAME}</th>
            <th>{WORKER_EMAIL}</th>
            <th>{WORKER_NOTES}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.workers.map(worker => (
            <WorkerListItem openWorkerForm={openWorkerForm} worker={worker} />
          ))}
        </tbody>
      </Table>

      <WorkerDialog
        isActive={isDialogOpened}
        closeDialog={closeWorkerForm}
        worker={workerSelected}
      />
    </>
  );
}

WorkerList.propTypes = {
  workers: PropTypes.array.isRequired
};

export default WorkerList;
