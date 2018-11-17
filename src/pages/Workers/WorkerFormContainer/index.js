import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import WorkerForm from "../WorkerForm";

export default function({ worker }) {
  const initialValue = {
    name: worker.name || "",
    surname: worker.surname || "",
    email: worker.email || "",
    notes: worker.notes || ""
  };

  const requiredMessage = "Required field";

  const WorkerSchema = Yup.object().shape({
    name: Yup.string().required(requiredMessage),
    surname: Yup.string().required(requiredMessage),
    email: Yup.string()
      .email()
      .required(requiredMessage),
    notes: Yup.string().required(requiredMessage)
  });

  const onSubmit = values => {
    // API call
  };

  return (
    <Formik
      initialValues={initialValue}
      render={WorkerForm}
      validationSchema={WorkerSchema}
      onSubmit={onSubmit}
    />
  );
}
