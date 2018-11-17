import "./WorkerListItem.scss";

import React from "react";
import PropTypes from "prop-types";
import { Icon, Button } from "bloomer";

function WorkerList({ worker, openWorkerForm }) {
  return (
    <tr className="WorkerList" key={worker.email}>
      <td>{worker.photoUrl}</td>
      <td>{worker.name}</td>
      <td>{worker.surname}</td>
      <td>{worker.email}</td>
      <td>{worker.notes}</td>
      <td>
        <Button onClick={() => openWorkerForm(worker)}>
          <Icon isSize="small" className="fa fa-pencil" />
        </Button>
      </td>
    </tr>
  );
}

WorkerList.propTypes = {
  worker: PropTypes.object.isRequired,
  openWorkerForm: PropTypes.func.isRequired
};

export default WorkerList;
