import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field, Form } from "formik";
import { Button, ModalCardFooter } from "bloomer";

function WorkerForm({ closeDialog, isModal, isInMap, onUnassign }) {
  const ErrorMessageComponent = ({ errorMessage }) => (
    <p className="help is-danger">{errorMessage} </p>
  );
  return (
    <Form>
      <div className="form-fields">
        <div className="field">
          <Field
            placeholder="Username"
            className="input"
            type="text"
            name="userName"
          />
          <ErrorMessage
            name="userName"
            render={errorMessage => (
              <ErrorMessageComponent errorMessage={errorMessage} />
            )}
          />
        </div>
        <div className="field">
          <Field className="input" placeholder="Name" type="text" name="name" />
          <ErrorMessage
            name="name"
            render={errorMessage => (
              <ErrorMessageComponent errorMessage={errorMessage} />
            )}
          />
        </div>
        <div className="field">
          <Field
            className="input"
            placeholder="Surname"
            type="text"
            name="surname"
          />
          <ErrorMessage
            name="surname"
            render={errorMessage => (
              <ErrorMessageComponent errorMessage={errorMessage} />
            )}
          />
        </div>
        <div className="field">
          <Field
            className="input"
            placeholder="Email"
            type="email"
            name="email"
          />
          <ErrorMessage
            name="email"
            render={errorMessage => (
              <ErrorMessageComponent errorMessage={errorMessage} />
            )}
          />
        </div>
        <div className="field">
          <Field
            className="input"
            placeholder="Description"
            component="textarea"
            name="notes"
          />
        </div>
      </div>
      {isModal ? (
        <ModalCardFooter>
          <Button className="is-light" onClick={closeDialog}>
            Cancel
          </Button>
          <Button type="submit" isColor="primary">
            Submit
          </Button>
          <Button onClick={onUnassign}>Unassign</Button>
        </ModalCardFooter>
      ) : (
        <>
          <Button className="is-light" onClick={closeDialog}>
            Cancel
          </Button>
          <Button type="submit" isColor="primary">
            Submit
          </Button>
        </>
      )}
    </Form>
  );
}

WorkerForm.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  isModal: PropTypes.bool,
  isInMap: PropTypes.bool,
  onUnassign: PropTypes.func
};

export default WorkerForm;
