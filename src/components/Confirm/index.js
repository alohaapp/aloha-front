import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";

function Confirm({ isActive, title, content, onConfirm, onCancel }) {
  return (
    <Modal
      isActive={isActive}
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <span>{content}</span>
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
