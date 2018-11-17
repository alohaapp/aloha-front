import React from "react";
import PropTypes from "prop-types";
import "./WorkerListItem.scss";

function WorkerList(props) {
  return (
    <li key={props.key}>
      <div>{props.worker.photoUrl}</div>
      <div>{props.worker.name}</div>
      <div>{props.worker.surname}</div>
      <div>{props.worker.email}</div>
      <div>{props.worker.notes}</div>
    </li>
  );
}

WorkerList.propTypes = {
  worker: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired
};

export default WorkerList;
