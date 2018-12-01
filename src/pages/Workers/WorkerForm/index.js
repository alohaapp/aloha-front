import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field, Form } from "formik";
import { Button, Label, ModalCardFooter } from "bloomer";

function WorkerForm({ closeDialog, isModal }) {
  const ErrorMessageComponent = ({ errorMessage }) => (
    <p className="help is-danger">{errorMessage} </p>
  );
  return (
    <Form>
      <div className="field">
        <Label>Username</Label>
        <Field
          className="input"
          type="text"
          name="userName"
          placeholder="Username"
        />
        <ErrorMessage
          name="userName"
          render={errorMessage => (
            <ErrorMessageComponent errorMessage={errorMessage} />
          )}
        />
      </div>
      <div className="field">
        <Label>Name</Label>
        <Field className="input" type="text" name="name" placeholder="Name" />
        <ErrorMessage
          name="name"
          render={errorMessage => (
            <ErrorMessageComponent errorMessage={errorMessage} />
          )}
        />
      </div>
      <div className="field">
        <Label>Surname</Label>
        <Field
          className="input"
          type="text"
          name="surname"
          placeholder="Surname"
        />
        <ErrorMessage
          name="surname"
          render={errorMessage => (
            <ErrorMessageComponent errorMessage={errorMessage} />
          )}
        />
      </div>
      <div className="field">
        <Label>Email</Label>
        <Field
          className="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage
          name="email"
          render={errorMessage => (
            <ErrorMessageComponent errorMessage={errorMessage} />
          )}
        />
      </div>
      <div className="field">
        <Label>Description</Label>
        <Field
          className="input"
          component="textarea"
          name="notes"
          placeholder="Notes"
        />
      </div>
      {isModal ? (
        <ModalCardFooter>
          <Button className="is-light" onClick={closeDialog}>
            Cancel
          </Button>
          <Button type="submit" isColor="primary">
            Submit
          </Button>
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
  isModal: PropTypes.bool
};

export default WorkerForm;
