import React from "react";
import PropTypes from "prop-types";
import WorkerListItem from "../WorkerListItem";
import "./WorkerList.scss";

function WorkerList(props) {
  return (
    <ul>
      {props.workers.map(worker => (
        <WorkerListItem key={worker.id} worker={worker} />
      ))}
    </ul>
  );
}

WorkerList.propTypes = {
  workers: PropTypes.array.isRequired
};

export default WorkerList;
