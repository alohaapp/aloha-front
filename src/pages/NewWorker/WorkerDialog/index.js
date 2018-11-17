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

function WorkerDialog(props) {
  const { isActive, closeDialog } = props;
  return (
    <Modal isActive={isActive}>
      <ModalBackground />
      <ModalCard>
        <ModalCardBody>
          <Delete onClick={closeDialog} />
          <WorkerFormContainer />
        </ModalCardBody>
      </ModalCard>
    </Modal>
  );
}

WorkerDialog.propTypes = {
  isActive: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired
};

export default WorkerDialog;
