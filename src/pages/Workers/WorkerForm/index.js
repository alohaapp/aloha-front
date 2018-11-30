import React from "react";
import { ErrorMessage, Field, Form } from "formik";
import { Button } from "bloomer";

export default function(props) {
  const ErrorMessageComponent = ({ errorMessage }) => (
    <p className="help is-danger">{errorMessage} </p>
  );
  return (
    <Form>
      <div className="field">
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
        <Field className="input" type="text" name="name" placeholder="Name" />
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
        <Field
          className="input"
          component="textarea"
          name="notes"
          placeholder="Notes"
        />
      </div>
      <Button type="submit" isColor="primary">
        Submit
      </Button>
    </Form>
  );
}
