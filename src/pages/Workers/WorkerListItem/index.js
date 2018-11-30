import "./WorkerListItem.scss";

import React from "react";
import PropTypes from "prop-types";
import { Button } from "bloomer";

function WorkerListItem({ worker, openWorkerForm, openDeleteConfirm }) {
  return (
    <tr className="WorkerList">
      <td>{worker.photoUrl}</td>
      <td>{worker.userName}</td>
      <td>
        {worker.name} {worker.surname}
      </td>
      <td>{worker.email}</td>
      <td>{worker.notes}</td>
      <td>
        <Button onClick={() => openWorkerForm(worker)}>
          <i className="material-icons">edit</i>
        </Button>
        <Button onClick={() => openDeleteConfirm(worker)}>
          <i className="material-icons">delete</i>
        </Button>
      </td>
    </tr>
  );
}

WorkerListItem.propTypes = {
  worker: PropTypes.object.isRequired,
  openWorkerForm: PropTypes.func.isRequired,
  openDeleteConfirm: PropTypes.func.isRequired
};

export default WorkerListItem;
