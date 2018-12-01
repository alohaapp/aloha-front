import "./WorkerListItem.scss";

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "bloomer";
import { API_URL } from "../../../constants";
import CRUDContext from "../../../components/CRUDContext";

function WorkerListItem({ worker, openWorkerForm, openDeleteConfirm }) {
  const { floorsCRUD } = useContext(CRUDContext);
  const workerFloor =
    worker.floorId &&
    floorsCRUD.store &&
    floorsCRUD.store.find(floor => worker.floorId === floor.id);

  return (
    <li className={`worker${" worker--on-map"}`}>
      <div className="worker__photo">
        {worker.photoId ? (
          <img src={`${API_URL}/files/${worker.photoId}`} alt="user" />
        ) : null}
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
        {workerFloor && (
          <Link
            className="button is-light"
            to={{
              pathname: `/map/${workerFloor.officeId}/${workerFloor.id}`,
              search: `?username=${worker.userName}`
            }}
          >
            <span className="icon is-small">
              <i className="material-icons">my_location</i>
            </span>
          </Link>
        )}
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
