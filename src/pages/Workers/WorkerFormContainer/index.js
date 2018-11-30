import React, { useContext } from "react";
import CRUDContext from "../../../components/CRUDContext";
import { Formik } from "formik";
import * as Yup from "yup";
import WorkerForm from "../WorkerForm";

export default function({ worker, closeDialog }) {
  const initialValue = {
    userName: worker.userName || "",
    name: worker.name || "",
    surname: worker.surname || "",
    email: worker.email || "",
    notes: worker.notes || ""
  };

  const requiredMessage = "Required field";

  const WorkerSchema = Yup.object().shape({
    userName: Yup.string().required(requiredMessage),
    name: Yup.string().required(requiredMessage),
    surname: Yup.string().required(requiredMessage),
    email: Yup.string()
      .email()
      .required(requiredMessage),
    notes: Yup.string().required(requiredMessage)
  });

  const { workersCRUD } = useContext(CRUDContext);

  const onSubmit = values => {
    workersCRUD.create(values);
    closeDialog();
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
