import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalCard,
  ModalCardBody,
  ModalBackground,
  Delete
} from "bloomer";
import WorkerFormContainer from "../WorkerFormContainer";

function WorkerDialog({ isActive, closeDialog, worker }) {
  return (
    <Modal isActive={isActive}>
      <ModalBackground />
      <ModalCard>
        <ModalCardBody>
          <Delete onClick={closeDialog} />
          <WorkerFormContainer worker={worker} closeDialog={closeDialog} />
        </ModalCardBody>
      </ModalCard>
    </Modal>
  );
}

WorkerDialog.propTypes = {
  isActive: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  worker: PropTypes.object
};

export default WorkerDialog;
