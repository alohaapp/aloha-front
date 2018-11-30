import React, { useContext, useState } from "react";
import CRUDContext from "../../../components/CRUDContext";
import { Formik } from "formik";
import * as Yup from "yup";
import WorkerForm from "../WorkerForm";
import WorkerImageDropzone from "../WorkerImageDropzone";

export default function({ worker, closeDialog }) {
  const [workerPhoto, setWorkerPhoto] = useState(null);
  const initialValue = {
    userName: worker.userName || "",
    name: worker.name || "",
    surname: worker.surname || "",
    email: worker.email || "",
    notes: worker.notes || ""
  };

  const requiredMessage = "Required field";

  const getPhoto = value => {
    setWorkerPhoto(value);
  };

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
    worker.id
      ? workersCRUD.update({ ...values, id: worker.id, photoUrl: workerPhoto })
      : workersCRUD.create({ ...values, photoUrl: workerPhoto });
    closeDialog();
  };

  return (
    <>
      <div>
        <WorkerImageDropzone onDrop={getPhoto} />
      </div>
      <Formik
        initialValues={initialValue}
        render={WorkerForm}
        validationSchema={WorkerSchema}
        onSubmit={onSubmit}
      />
    </>
  );
}
