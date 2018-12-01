import "./WorkerListItem.scss";

import React from "react";
import PropTypes from "prop-types";
import { Button } from "bloomer";
import { API_URL } from "../../../constants";
import Person from "../../../assets/img/person.svg";

function WorkerListItem({ worker, openWorkerForm, openDeleteConfirm }) {
  return (
    <li className="worker">
      <div className="worker__photo">
        <img
          src={worker.photoId ? `${API_URL}/files/${worker.photoId}` : Person}
          alt="user"
        />
      </div>
      <div className="worker__info">
        <div className="worker__name">
          {worker.name} {worker.surname}{" "}
          <span className="worker__username">@{worker.userName}</span>
        </div>
        <p className="worker__notes">{worker.notes}</p>
        <div className="worker__email">{worker.email}</div>
      </div>
      <div className="worker__actions">
        <Button className="is-light" onClick={() => openWorkerForm(worker)}>
          <span className="icon is-small">
            <i className="material-icons">edit</i>
          </span>
        </Button>
        <Button className="is-light" onClick={() => openDeleteConfirm(worker)}>
          <span className="icon is-small">
            <i className="material-icons">delete</i>
          </span>
        </Button>
      </div>
    </li>
  );
}

WorkerListItem.propTypes = {
  worker: PropTypes.object.isRequired,
  openWorkerForm: PropTypes.func.isRequired,
  openDeleteConfirm: PropTypes.func.isRequired
};

export default WorkerListItem;
