import React from "react";
import PropTypes from "prop-types";
import "./WorkerListItem.scss";

function WorkerList(props) {
  return (
    <tr className="WorkerList" key={props.key}>
      <td>{props.worker.photoUrl}</td>
      <td>{props.worker.name}</td>
      <td>{props.worker.surname}</td>
      <td>{props.worker.email}</td>
      <td>{props.worker.notes}</td>
    </tr>
  );
}

WorkerList.propTypes = {
  worker: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired
};

export default WorkerList;
