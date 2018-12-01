import "./WorkerDialog.scss";

import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalCard,
  ModalCardBody,
  ModalCardHeader,
  ModalCardTitle,
  ModalBackground,
  Delete
} from "bloomer";
import WorkerFormContainer from "../WorkerFormContainer";

function WorkerDialog({ isActive, closeDialog, worker, isInMap, onUnassign }) {
  const title = worker.id ? `${worker.name} ${worker.surname}` : "New worker";

  return (
    <Modal className="worker-modal" isActive={isActive}>
      <ModalBackground />
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>{title}</ModalCardTitle>
          <Delete onClick={closeDialog} />
        </ModalCardHeader>
        <ModalCardBody>
          <WorkerFormContainer
            worker={worker}
            closeDialog={closeDialog}
            isModal
            isInMap={isInMap}
            onUnassign={onUnassign}
          />
        </ModalCardBody>
      </ModalCard>
    </Modal>
  );
}

WorkerDialog.propTypes = {
  isActive: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  worker: PropTypes.object,
  isInMap: PropTypes.bool,
  onUnassign: PropTypes.func
};

export default WorkerDialog;
