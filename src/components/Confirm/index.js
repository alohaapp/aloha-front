import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  ModalCardBody,
  ModalCardFooter,
  Delete,
  Button
} from "bloomer";

function Confirm({ isActive, title, content, onConfirm, onCancel }) {
  return (
    <Modal isActive={isActive}>
      <ModalBackground />
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>{title}</ModalCardTitle>
          <Delete onClick={onCancel} />
        </ModalCardHeader>
        <ModalCardBody>
          <span>{content}</span>
        </ModalCardBody>
        <ModalCardFooter>
          <Button onClick={onConfirm}>Confirm</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ModalCardFooter>
      </ModalCard>
    </Modal>
  );
}

Confirm.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default Confirm;
