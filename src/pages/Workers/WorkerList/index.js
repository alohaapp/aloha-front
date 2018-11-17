import "./WorkerList.scss";
import React from "react";
import PropTypes from "prop-types";
import WorkerListItem from "../WorkerListItem";
import { Table } from "bloomer";
import {
  WORKER_PHOTO_URL,
  WORKER_NAME,
  WORKER_SURNAME,
  WORKER_EMAIL,
  WORKER_DESCRIPTION,
  WORKER_NOTES
} from "../../../constants";

function WorkerList(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>{WORKER_PHOTO_URL}</th>
          <th>{WORKER_NAME}</th>
          <th>{WORKER_SURNAME}</th>
          <th>{WORKER_EMAIL}</th>
          <th>{WORKER_DESCRIPTION}</th>
          <th>{WORKER_NOTES}</th>
        </tr>
      </thead>
      <tbody>
        {props.workers.map(worker => (
          <WorkerListItem key={worker.id} worker={worker} />
        ))}
      </tbody>
    </Table>
  );
}

WorkerList.propTypes = {
  workers: PropTypes.array.isRequired
};

export default WorkerList;
